/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useThemeStore } from "../../store/theme";
import { useTranslation } from "../../context/TranslationContext";
import LanguageMenu from "../../components/LanguageMenu";
import { useAuth } from "./AuthContext";
import {
  LayoutDashboard,
  Network,
  Image,
  BookOpen,
  Settings,
  Activity,
  Users,
  X,
  LogOut,
  ChevronRight,
  PanelLeftClose,
} from "lucide-react";

// Navigation Config
const links = [
  { to: "/admin", end: true, labelKey: "dashboard", Icon: LayoutDashboard },
  { to: "/admin/trees", labelKey: "trees", Icon: Network },
  { to: "/admin/gallery", labelKey: "gallery", Icon: Image },
  { to: "/admin/books", labelKey: "books", Icon: BookOpen },
  { to: "/admin/users", labelKey: "users", Icon: Users },
  { to: "/admin/activity", labelKey: "activity", Icon: Activity },
  { to: "/admin/settings", labelKey: "settings", Icon: Settings },
];

export default function AdminSidebar({
  open,
  onClose,
  onToggle,
}: {
  open: boolean;
  onClose: () => void;
  onToggle: () => void;
}) {
  const { theme } = useThemeStore();
  const { logout } = useAuth();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  return (
    <>
      {/* Backdrop - mobile/tablet when sidebar overlays */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto bg-black/50 backdrop-blur-sm"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sidebar Panel - toggleable on ALL screen sizes */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 z-50 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } flex flex-col shadow-2xl overflow-hidden
        ${isDark ? "bg-[#060e1c] border-r border-white/10" : "bg-[#0d1b2a] border-r border-[#0c4a6e]/30"}`}
      >
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: `
              radial-gradient(ellipse at top left, rgba(13,148,136,0.16) 0%, transparent 58%),
              radial-gradient(ellipse at bottom right, rgba(232,180,160,0.1) 0%, transparent 55%)
            `,
          }}
        />

        {/* Header */}
        <div className="relative h-20 flex items-center justify-between px-5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-terracotta flex items-center justify-center text-[#0a1220] font-black text-lg shadow-lg shadow-teal/25">
              R
            </div>
            <div>
              <span className="font-cinzel font-bold text-xl tracking-wider text-[#f8f5ef] block leading-tight">
                ROOTS
              </span>
              <span className="text-[10px] tracking-[0.2em] text-teal/90 uppercase font-medium">
                {t("admin_brand_subtitle", "Egypt Admin")}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={onToggle}
              className="admin-icon-btn hidden lg:flex p-2 rounded-lg hover:bg-white/10 text-[#e8dfca]/70 hover:text-white transition-colors"
              aria-label={open ? t("close_sidebar", "Close sidebar") : t("open_sidebar", "Open sidebar")}
              title={open ? t("close_sidebar", "Close sidebar") : t("open_sidebar", "Open sidebar")}
            >
              <PanelLeftClose className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="admin-icon-btn lg:hidden p-2 rounded-lg hover:bg-white/10 text-[#e8dfca]/70 hover:text-white transition-colors"
              aria-label={t("close_sidebar", "Close sidebar")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative flex-1 overflow-y-auto py-5 px-3 flex flex-col gap-1">
          <div className="px-3 mb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-teal/60">
              {t("menu", "Main Menu")}
            </span>
          </div>

          {links.map(({ to, end, labelKey, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-teal to-tealDark text-white font-semibold shadow-lg shadow-teal/25 ring-1 ring-lotus/25"
                    : "text-[#e8dfca]/80 hover:bg-white/8 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-white/15" : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-white" : "text-teal"}`}
                    />
                  </div>
                  <span className="text-sm tracking-wide flex-1">{t(labelKey)}</span>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-white/60 shrink-0" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="relative p-4 border-t border-white/10 bg-black/20 shrink-0 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <LanguageMenu
              align="up"
              buttonClassName="w-full justify-center px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-[#e8dfca] hover:bg-white/10 transition-colors text-xs font-medium"
            />
            <ThemeToggle
              className="w-full justify-center px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-[#e8dfca] hover:bg-white/10 transition-colors"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              logout();
              onClose();
            }}
            className="admin-sidebar-logout interactive-btn w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>{t("logout", "Sign Out")}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
