/**
 * Seeds localStorage with mock articles, comments, and like/share counts.
 * Only runs once per session (checks a version key).
 */
import {
  ART_KEY,
  CMT_KEY,
  LIKE_CNT_KEY,
  LIKE_MINE_KEY,
  SHARE_CNT_KEY,
  CMT_LIKE_CNT_KEY,
  CMT_LIKE_MINE_KEY,
  saveArticles,
  saveComments,
  saveLikeCounts,
  saveShareCounts,
} from "../components/articles/articleStorage";
import {
  MOCK_ARTICLES,
  MOCK_ARTICLE_COMMENTS,
  MOCK_ARTICLE_LIKE_COUNTS,
  MOCK_ARTICLE_SHARE_COUNTS,
} from "./mockData";

const SEED_VERSION_KEY = "rootsegypt_mock_seed_v3";

export function seedMockStorage() {
  // Don't re-seed if already done for this version
  if (localStorage.getItem(SEED_VERSION_KEY)) return;

  // Only seed if no articles already exist
  const existingRaw = localStorage.getItem(ART_KEY);
  let existing: any[] = [];
  try {
    existing = existingRaw ? JSON.parse(existingRaw) : [];
  } catch {
    existing = [];
  }

  // If user already has articles, merge mock articles at the end (don't duplicate)
  const existingIds = new Set(existing.map((a: any) => a.id));
  const toAdd = MOCK_ARTICLES.filter((a) => !existingIds.has(a.id));
  const merged = [...existing, ...toAdd];
  saveArticles(merged);

  // Seed comments
  const existingCmtRaw = localStorage.getItem(CMT_KEY);
  let existingCmts: any[] = [];
  try {
    existingCmts = existingCmtRaw ? JSON.parse(existingCmtRaw) : [];
  } catch {
    existingCmts = [];
  }
  const existingCmtIds = new Set(existingCmts.map((c: any) => c.id));
  const cmtsToAdd = MOCK_ARTICLE_COMMENTS.filter((c) => !existingCmtIds.has(c.id));
  saveComments([...existingCmts, ...cmtsToAdd]);

  // Seed like counts (merge, don't overwrite user's likes)
  const existingLikes: Record<string, number> = (() => {
    try {
      return JSON.parse(localStorage.getItem(LIKE_CNT_KEY) || "{}");
    } catch {
      return {};
    }
  })();
  const mergedLikes = { ...MOCK_ARTICLE_LIKE_COUNTS, ...existingLikes };
  saveLikeCounts(mergedLikes);

  // Seed share counts
  const existingShares: Record<string, number> = (() => {
    try {
      return JSON.parse(localStorage.getItem(SHARE_CNT_KEY) || "{}");
    } catch {
      return {};
    }
  })();
  const mergedShares = { ...MOCK_ARTICLE_SHARE_COUNTS, ...existingShares };
  saveShareCounts(mergedShares);

  // Mark as seeded
  localStorage.setItem(SEED_VERSION_KEY, "1");
}
