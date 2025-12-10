export function parseSlug(s: string): string[] {
  if (!s) return [];

  const slug = decodeURIComponent(s);

  const map: Record<string, string> = {
    "home-living": "Home & Living",
    "tech-accessories": "Tech & Accessories",
    "wall-decor": "Wall Decor",
    clothing: "Clothing",
    footer: "Footer",
  };

  let detectedKey = "";
  let prettyCategory = "";

  Object.keys(map)
    .sort((a, b) => b.length - a.length)
    .forEach((key) => {
      if (!detectedKey && slug.includes(key)) {
        detectedKey = key;
        prettyCategory = map[key];
      }
    });

  if (!detectedKey) {
    return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1));
  }

  const remainingSlug = slug
    .replace(detectedKey, "")
    .replace(/^-|-$/g, "")
    .replace(/--/g, "-");

  let formattedRemaining: string[] = [];

  if (remainingSlug) {
    formattedRemaining = [
      remainingSlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    ];
  }

  return [prettyCategory, ...formattedRemaining];
}

export const parseNameToSlug = (str: String) => {
  return str.replace(" & ", " ").split(" ").join("-").toLowerCase();
};
