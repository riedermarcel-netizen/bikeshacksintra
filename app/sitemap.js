import { stories } from "@/lib/journal";

const base = "https://bikeshacksintra.com";

export default function sitemap() {
  const now = new Date();
  const pages = ["", "/ride", "/retreat", "/about", "/journal", "/company", "/privacy", "/terms"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" || p === "/retreat" || p === "/ride" ? "monthly" : "yearly",
    priority: p === "" ? 1 : p === "/retreat" || p === "/ride" ? 0.9 : 0.5,
  }));
  const journal = stories.map((s) => ({
    url: `${base}/journal/${s.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...journal];
}
