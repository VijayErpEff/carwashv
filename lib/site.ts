export const site = {
  name: "Onyx",
  full: "Onyx Mobile Detailing",
  tagline: "The showroom comes to your driveway.",
  phone: "(415) 555-0142",
  phoneHref: "tel:+14155550142",
  email: "book@onyxdetail.co",
  hours: "Tue–Sun · 7am – 6pm",
  baseCity: "the Bay Area",
};

export type Service = {
  id: string;
  name: string;
  blurb: string;
  duration: string;
  from: number;
  features: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "express",
    name: "Express Exterior",
    blurb:
      "The weekly reset. Hand wash, foam bath, wheels and tyres dressed, glass cleared, a quick spray sealant for beading that lasts.",
    duration: "45–60 min",
    from: 49,
    features: ["Two-bucket hand wash", "Wheels, tyres & arches", "Streak-free glass", "Spray sealant top-coat"],
  },
  {
    id: "full",
    name: "The Full Detail",
    blurb:
      "Inside and out, top to bottom. Deep interior extraction, leather conditioned, every vent and seam addressed — paired with a decontaminated, polished exterior.",
    duration: "3–4 hrs",
    from: 189,
    features: [
      "Everything in Express",
      "Interior shampoo & steam",
      "Leather clean + condition",
      "Clay bar decontamination",
      "One-step machine polish",
    ],
    featured: true,
  },
  {
    id: "ceramic",
    name: "Ceramic & Paint Protection",
    blurb:
      "Lock in the gloss. A multi-stage correction followed by a pro-grade ceramic coating — years of hydrophobic, UV-stable protection.",
    duration: "1–2 days",
    from: 699,
    features: ["Paint correction (1–3 stage)", "9H ceramic coating", "Glass & wheel coating", "2–5 yr warranty"],
  },
];

export const steps = [
  {
    n: "01",
    title: "Book in 90 seconds",
    body: "Tell us your vehicle, your address and a window that works. No phone tag — pick a slot and you’re set.",
  },
  {
    n: "02",
    title: "We roll up self-contained",
    body: "Our van carries its own water, power and pro equipment. All we need is a parking space — driveway, kerb or office lot.",
  },
  {
    n: "03",
    title: "You walk out to a showroom finish",
    body: "Keep working, keep relaxing. We text when it’s done and leave your car looking like the day you first saw it.",
  },
];

export const stats = [
  { value: "1,400+", label: "cars detailed" },
  { value: "4.9", label: "average rating", suffix: "★" },
  { value: "0", label: "trips to a wash" },
  { value: "100%", label: "we come to you" },
];

export const testimonials = [
  {
    quote:
      "Booked the full detail on a Tuesday, they were parked outside my place by Thursday morning. The interior looks better than when I bought it — and I have a toddler.",
    name: "Marina D.",
    meta: "Audi Q5 · Noe Valley",
  },
  {
    quote:
      "I run a six-van fleet. Onyx keeps every one of them spotless on a standing schedule and I never have to think about it. The invoicing is just as clean as the trucks.",
    name: "Desmond R.",
    meta: "Fleet account · SoMa",
  },
  {
    quote:
      "The ceramic coat is unreal. Rain just sheets straight off and bird mess wipes away with a towel. Worth every dollar — and they did it all in my own garage.",
    name: "Priya K.",
    meta: "Tesla Model 3 · Berkeley",
  },
];

export const coverage = [
  "San Francisco",
  "Oakland",
  "Berkeley",
  "Daly City",
  "South San Francisco",
  "Alameda",
  "Emeryville",
  "Sausalito",
];

export const faqs = [
  {
    q: "What do you need from me on the day?",
    a: "A parking spot roughly the size of one-and-a-half cars and access to your vehicle. That’s genuinely it — we’re fully self-contained with our own water and power.",
  },
  {
    q: "Do you work in rain or apartment garages?",
    a: "Yes. We carry pop-up cover for light rain and work comfortably in covered garages and underground lots, provided there’s room to open the doors.",
  },
  {
    q: "Is there a membership?",
    a: "There is. Members get a recurring Express or Full Detail at a standing discount, priority slots, and free interim spot-cleans between visits.",
  },
];
