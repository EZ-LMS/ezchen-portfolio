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
    location: "Taipei, Taiwan",
    role: "Product Manager",
    start: "Jul 2022",
    end: "Jun 2025",
    blurb:
      "Led growth, GTM, and platform initiatives across credit and mortgage portfolios at a commercial bank with 51 branches and 2,200+ employees.",
    bullets: [
      "Launched online mortgage platform with end-to-end automation, cutting application processing time by 60% and driving 50% digital channel adoption.",
      "Built AI/ML cross-sell model with data scientists, lifting cross-sell penetration from 17% to 24%.",
      "Reframed marketing from CPL to CPA via real-time analytics, reducing CAC by 40% and lifting conversion by 50%.",
    ],
  },
  {
    company: "KGI Bank",
    location: "Taipei, Taiwan",
    role: "Management Associate",
    start: "Jul 2021",
    end: "Jun 2022",
    blurb:
      "Rotation program across credit, ops, and digital lending — owned UAT for a core credit system and ran cross-functional process redesigns.",
  },
  {
    company: "Nogle Limited",
    location: "Taipei, Taiwan",
    role: "Associate Product Manager",
    start: "Jun 2020",
    end: "Jul 2021",
    blurb:
      "Crypto exchange and payment gateway fintech. Led product development of a crypto payment gateway and streamlined OTC operations.",
    bullets: [
      "Shipped multi-currency crypto payment gateway processing 1M daily transactions; broke even in 1.5 years.",
      "Cut implementation time 50% and support response time to 3 minutes via API and workflow redesign.",
    ],
  },
];
