export const site = {
  name: "EZ Chen",
  fullName: "Chen Yi (EZ)",
  tagline: "Product Manager from Taiwan",
  location: "Berkeley, CA",
  description:
    "Portfolio of EZ Chen — Product Manager, Berkeley Haas MBA, builder of small things with AI.",
  url: "https://ezchen.vercel.app",
  intro: {
    paragraphs: [
      "Hi, I'm EZ, a Product Manager from Taiwan, now pursuing my MBA at UC Berkeley Haas (Class of 2027). I spent five years building digital banking and fintech products in Taiwan, most recently leading credit and mortgage portfolios at KGI Bank, and before that launching a crypto payment gateway at Nogle. I'm into the messy intersection of data, growth, and user behavior.",
      "Outside of work, I play baseball and basketball, grind Texas Hold'em, and binge dramas and novels. My favorite artist is LANY.",
    ],
  },
  links: {
    email: "ez_chen@berkeley.edu",
    linkedin: "https://www.linkedin.com/in/ez-chen",
    github: "https://github.com/EZ-LMS",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "History", href: "#history" },
    { label: "Project", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  headline: "Building products at the messy intersection of data, growth, and user behavior.",
} as const;
