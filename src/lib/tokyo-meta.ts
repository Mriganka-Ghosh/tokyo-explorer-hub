export function tokyoMeta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — Tokyo Explore` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Tokyo Explore` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
