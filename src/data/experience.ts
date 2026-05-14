export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  blurb?: string;
  bullets?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "KGI Bank",
    location: "Taipei",
    role: "Product Manager",
    start: "2022",
    end: "2025",
    blurb:
      "Led digital transformation across credit and mortgage portfolios — covering digital marketing, online application platforms, and workflow optimization at a commercial bank with 51 branches and 2,200+ employees.",
    bullets: [
      "Launched online mortgage platform with end-to-end automation, cutting application processing time by 60% and driving 50% digital channel adoption.",
      "Built AI/ML cross-sell model with data scientists, lifting cross-sell penetration from 17% to 24%.",
      "Reframed marketing from CPL to CPA via real-time analytics, reducing CAC by 40% and lifting conversion by 50%.",
    ],
  },
  {
    company: "KGI Bank",
    location: "Taipei",
    role: "Management Associate",
    start: "2021",
    end: "2022",
    blurb:
      "Rotation across credit, ops, and digital lending. Owned UAT for a core credit system and ran cross-functional process redesigns.",
    bullets: [
      "Sourced and closed a B2B partnership with a health software provider, embedding banking APIs into dental clinic workflows to acquire physician clients averaging $200K in deposits and 30% cross-sell to wealth products.",
    ],
  },
  {
    company: "Nogle Limited",
    location: "Taipei",
    role: "Associate Product Manager",
    start: "2020",
    end: "2021",
    blurb:
      "Crypto exchange and payment gateway fintech. Led product development of a crypto payment gateway and streamlined OTC operations.",
    bullets: [
      "Shipped multi-currency crypto payment gateway processing 1M daily transactions; broke even in 1.5 years.",
      "Cut implementation time 50% and support response time to 3 minutes via API and workflow redesign.",
      "Streamlined OTC trading for 5M daily trades via SOP design and IT dual-verification, guaranteeing 10-minute deal execution and eliminating financial loss from human error.",
    ],
  },
];
