// Curated, license-free photography (Unsplash CDN). Verified to load.
// Swap any URL here to rebrand imagery in one place.

const u = (id: string, w = 1600, q = 72) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  // moody black car under studio light — the hero
  heroCar: {
    src: u("1567808291548-fc3ee04dbcf0", 1400),
    alt: "A black car gleaming under low light in a quiet garage.",
  },
  // detailer applying protection film by hand
  atWork: {
    src: u("1632823469850-2f77dd9c7f93", 1400),
    alt: "A detailer working a protective film onto a car's headlight by hand.",
  },
  // pristine quilted-leather interior
  interior: {
    src: u("1605437241278-c1806d14a4d9", 1200),
    alt: "The spotless quilted-leather interior of a freshly detailed car.",
  },
};
