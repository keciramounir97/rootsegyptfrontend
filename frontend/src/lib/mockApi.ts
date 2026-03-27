/**
 * ROOTS EGYPT — Mock API Adapter
 *
 * Intercepts Axios requests and returns realistic mock data.
 * Activated when MOCK_MODE is enabled (default in dev without backend).
 *
 * To use your real backend:
 *   localStorage.setItem("rootsegypt_mock_mode", "false")
 *   and reload the page.
 */

import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import {
  MOCK_USERS,
  MOCK_TOKEN,
  MOCK_REFRESH_TOKEN,
  MOCK_TREES,
  MOCK_BOOKS,
  MOCK_GALLERY,
  MOCK_STATS,
  MOCK_ACTIVITY,
  MOCK_USERS_LIST,
  MOCK_NOTIFICATIONS,
} from "./mockData";

// ── State ──────────────────────────────────────────────────────────────
const MOCK_MODE_KEY = "rootsegypt_mock_mode";
const MOCK_USER_KEY = "rootsegypt_mock_logged_user";

export function isMockMode(): boolean {
  const stored = localStorage.getItem(MOCK_MODE_KEY);
  if (stored === "false") return false;
  return true; // default ON
}

export function setMockMode(enabled: boolean): void {
  localStorage.setItem(MOCK_MODE_KEY, String(enabled));
  if (!enabled) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem(MOCK_USER_KEY);
  }
}

function getLoggedUser() {
  const raw = localStorage.getItem(MOCK_USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setLoggedUser(user: any) {
  localStorage.setItem(MOCK_USER_KEY, JSON.stringify(user));
}

// ── Helpers ────────────────────────────────────────────────────────────
const delay = (ms = 250) =>
  new Promise<void>((r) => setTimeout(r, ms + Math.random() * 150));

function makeResponse(
  data: any,
  config: InternalAxiosRequestConfig,
  status = 200,
): AxiosResponse {
  return {
    data,
    status,
    statusText: status === 200 ? "OK" : "Created",
    headers: { "content-type": "application/json" },
    config,
    request: {},
  };
}

function makeError(message: string, status: number) {
  const err: any = new Error(message);
  err.response = { data: { message }, status, statusText: message };
  err.userMessage = message;
  return err;
}

// ── Router ─────────────────────────────────────────────────────────────
export async function mockAdapter(
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse> {
  await delay();

  const method = (config.method || "get").toLowerCase();
  const url = String(config.url || "");

  // Normalize URL: strip query string for matching
  const path = url.split("?")[0];

  // ── AUTH ──────────────────────────────────────────────────────────
  if (method === "post" && path.includes("/auth/login")) {
    let body: any = {};
    try {
      body = typeof config.data === "string" ? JSON.parse(config.data) : config.data || {};
    } catch {
      /* */
    }
    const email = String(body.email || "").toLowerCase().trim();
    const password = String(body.password || "");

    // Accept any credential — try to match known users first
    let user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password,
    );

    // Fallback: accept any email/password and return a demo user
    if (!user) {
      user = {
        id: 99,
        email,
        password,
        fullName: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        phone: "",
        role: 2,
        roleName: "Member",
        status: "active",
        permissions: [],
      };
    }

    const { password: _pw, ...safeUser } = user as any;
    setLoggedUser(safeUser);
    localStorage.setItem("token", MOCK_TOKEN);
    localStorage.setItem("refreshToken", MOCK_REFRESH_TOKEN);

    return makeResponse(
      { token: MOCK_TOKEN, refreshToken: MOCK_REFRESH_TOKEN, user: safeUser },
      config,
    );
  }

  if (method === "post" && path.includes("/auth/signup")) {
    let body: any = {};
    try {
      body = typeof config.data === "string" ? JSON.parse(config.data) : config.data || {};
    } catch {
      /* */
    }
    const newUser = {
      id: Math.floor(Math.random() * 9000) + 1000,
      email: String(body.email || ""),
      fullName: String(body.fullName || "New User"),
      phone: String(body.phone || ""),
      role: 2,
      roleName: "Member",
      status: "active",
    };
    setLoggedUser(newUser);
    localStorage.setItem("token", MOCK_TOKEN);
    localStorage.setItem("refreshToken", MOCK_REFRESH_TOKEN);
    return makeResponse({ message: "Account created successfully.", user: newUser, token: MOCK_TOKEN, refreshToken: MOCK_REFRESH_TOKEN }, config, 201);
  }

  if (method === "get" && path.includes("/auth/me")) {
    const user = getLoggedUser();
    if (!user) {
      throw makeError("Unauthorized", 401);
    }
    return makeResponse(user, config);
  }

  if (method === "post" && path.includes("/auth/logout")) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem(MOCK_USER_KEY);
    return makeResponse({ message: "Logged out." }, config);
  }

  if (method === "post" && path.includes("/auth/reset/verify")) {
    return makeResponse({ message: "Password reset successfully." }, config);
  }

  if (method === "post" && path.includes("/auth/reset")) {
    return makeResponse({ message: "If this email exists, a reset code has been sent." }, config);
  }

  if (method === "post" && path.includes("/auth/refresh")) {
    const user = getLoggedUser();
    return makeResponse({ token: MOCK_TOKEN, refreshToken: MOCK_REFRESH_TOKEN, user }, config);
  }

  // ── TREES ─────────────────────────────────────────────────────────
  if (method === "get" && /\/trees\/(\d+)\/gedcom/.test(path)) {
    const match = path.match(/\/trees\/(\d+)\/gedcom/);
    const id = parseInt(match![1], 10);
    const tree = MOCK_TREES.find((t) => t.id === id);
    if (!tree || !tree.gedcom) throw makeError("GEDCOM not found", 404);
    return {
      data: tree.gedcom,
      status: 200,
      statusText: "OK",
      headers: { "content-type": "text/plain" },
      config,
      request: {},
    };
  }

  if (method === "get" && /\/my\/trees/.test(path)) {
    const user = getLoggedUser();
    const myTrees = MOCK_TREES.filter((t) => user && (t.owner === user.email || t.id <= 2));
    return makeResponse(myTrees, config);
  }

  if (method === "get" && /\/admin\/trees/.test(path)) {
    return makeResponse(MOCK_TREES, config);
  }

  if (method === "get" && /\/trees\/(\d+)$/.test(path)) {
    const match = path.match(/\/trees\/(\d+)$/);
    const id = parseInt(match![1], 10);
    const tree = MOCK_TREES.find((t) => t.id === id);
    if (!tree) throw makeError("Tree not found", 404);
    return makeResponse(tree, config);
  }

  if (method === "get" && /\/trees$/.test(path)) {
    return makeResponse(MOCK_TREES, config);
  }

  if (method === "post" && /\/trees$/.test(path)) {
    let body: any = {};
    try {
      body = typeof config.data === "string" ? JSON.parse(config.data) : config.data || {};
    } catch {
      /* */
    }
    const newTree = { ...body, id: Date.now(), createdAt: new Date().toISOString(), isPublic: true, hasGedcom: false };
    return makeResponse(newTree, config, 201);
  }

  if (method === "put" && /\/trees\/\d+$/.test(path)) {
    return makeResponse({ message: "Tree updated." }, config);
  }

  if (method === "delete" && /\/trees\/\d+$/.test(path)) {
    return makeResponse({ message: "Tree deleted." }, config);
  }

  // ── GALLERY ───────────────────────────────────────────────────────
  if (method === "get" && /\/admin\/gallery/.test(path)) {
    return makeResponse({ gallery: MOCK_GALLERY }, config);
  }

  if (method === "get" && /\/my\/gallery/.test(path)) {
    return makeResponse({ gallery: MOCK_GALLERY.slice(0, 5) }, config);
  }

  if (method === "get" && /\/gallery/.test(path)) {
    return makeResponse({ gallery: MOCK_GALLERY }, config);
  }

  if (method === "post" && /\/gallery/.test(path)) {
    return makeResponse({ message: "Image uploaded.", id: Date.now() }, config, 201);
  }

  if (method === "delete" && /\/gallery\/\d+/.test(path)) {
    return makeResponse({ message: "Image deleted." }, config);
  }

  // ── BOOKS ─────────────────────────────────────────────────────────
  if (method === "get" && /\/admin\/books/.test(path)) {
    return makeResponse(MOCK_BOOKS, config);
  }

  if (method === "get" && /\/my\/books/.test(path)) {
    return makeResponse(MOCK_BOOKS.slice(0, 4), config);
  }

  if (method === "get" && /\/books\/(\d+)\/download/.test(path)) {
    // Simulate a download response with a demo PDF message
    return makeResponse({ message: "Download started (mock mode — no actual file)." }, config);
  }

  if (method === "get" && /\/books\/(\d+)$/.test(path)) {
    const match = path.match(/\/books\/(\d+)$/);
    const id = parseInt(match![1], 10);
    const book = MOCK_BOOKS.find((b) => b.id === id);
    if (!book) throw makeError("Book not found", 404);
    return makeResponse(book, config);
  }

  if (method === "get" && /\/books$/.test(path)) {
    return makeResponse(MOCK_BOOKS, config);
  }

  if (method === "post" && /\/books$/.test(path)) {
    return makeResponse({ message: "Book added.", id: Date.now() }, config, 201);
  }

  if (method === "put" && /\/books\/\d+$/.test(path)) {
    return makeResponse({ message: "Book updated." }, config);
  }

  if (method === "delete" && /\/books\/\d+$/.test(path)) {
    return makeResponse({ message: "Book deleted." }, config);
  }

  // ── ADMIN ─────────────────────────────────────────────────────────
  if (method === "get" && /\/admin\/stats/.test(path)) {
    return makeResponse(MOCK_STATS, config);
  }

  if (method === "get" && /\/admin\/users/.test(path)) {
    return makeResponse(MOCK_USERS_LIST, config);
  }

  if (method === "put" && /\/admin\/users\/\d+/.test(path)) {
    return makeResponse({ message: "User updated." }, config);
  }

  if (method === "delete" && /\/admin\/users\/\d+/.test(path)) {
    return makeResponse({ message: "User deleted." }, config);
  }

  // ── ACTIVITY ──────────────────────────────────────────────────────
  if (method === "get" && /\/activity/.test(path)) {
    return makeResponse(MOCK_ACTIVITY, config);
  }

  // ── NOTIFICATIONS ─────────────────────────────────────────────────
  if (method === "get" && /\/notifications/.test(path)) {
    return makeResponse(MOCK_NOTIFICATIONS, config);
  }

  if (method === "post" && /\/notifications\/\d+\/read/.test(path)) {
    return makeResponse({ message: "Notification marked as read." }, config);
  }

  // ── SOCIAL ────────────────────────────────────────────────────────
  if (method === "post" && /\/social\/.*\/like/.test(path)) {
    return makeResponse({ liked: true, count: Math.floor(Math.random() * 100) + 1 }, config);
  }

  if (method === "get" && /\/social\/.*\/comments/.test(path)) {
    return makeResponse([], config);
  }

  if (method === "post" && /\/social\/.*\/comments/.test(path)) {
    return makeResponse({ message: "Comment posted." }, config, 201);
  }

  // ── SETTINGS / MISC ───────────────────────────────────────────────
  if (method === "get" && /\/settings/.test(path)) {
    return makeResponse({ siteName: "Roots Egypt", maintenance: false }, config);
  }

  if (method === "put" && /\/settings/.test(path)) {
    return makeResponse({ message: "Settings saved." }, config);
  }

  // ── CATCH-ALL ─────────────────────────────────────────────────────
  // For any unknown endpoint, return empty success
  console.warn(`[MockAPI] Unhandled ${method.toUpperCase()} ${path} — returning empty 200`);
  return makeResponse({}, config);
}
