export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  blurb?: string;
  logo?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "KGI Bank",
    location: "Taipei",
    role: "Product Manager",
    start: "2022",
    end: "2025",
    logo: "/images/logos/kgi.png",
    blurb:
      "Led digital transformation across credit and mortgage portfolios — digital marketing, online application platforms, and end-to-end workflow optimization.",
  },
  {
    company: "KGI Bank",
    location: "Taipei",
    role: "Management Associate",
    start: "2021",
    end: "2022",
    logo: "/images/logos/kgi.png",
    blurb:
      "Rotation across credit, ops, and digital lending. Sourced a B2B partnership embedding banking APIs into dental-clinic workflows.",
  },
  {
    company: "Nogle Limited",
    location: "Taipei",
    role: "Associate Product Manager",
    start: "2020",
    end: "2021",
    logo: "/images/logos/nogle.png",
    blurb:
      "Crypto exchange and payment gateway fintech. Shipped a multi-currency crypto payment gateway and streamlined OTC trading operations.",
  },
];
