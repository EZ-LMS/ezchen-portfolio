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
    company: "Gen Digital",
    location: "United States",
    role: "Sales Operations & Enablement Intern",
    start: "2026",
    end: "2026",
    logo: "/images/logos/gen.png",
    blurb:
      "Validated the data integrity behind a new Salesforce scoring system and designed an AI readiness framework to help Sales leadership prioritize deals for Legal and Finance review.",
  },
  {
    company: "KGI Bank",
    location: "Taipei",
    role: "Product Manager",
    start: "2022",
    end: "2025",
    logo: "/images/logos/kgi.png",
    blurb:
      "Led digital transformation across credit and mortgage portfolios, including digital marketing, online application platforms, end-to-end workflow optimization, and lending portfolio strategy.",
  },
  {
    company: "KGI Bank",
    location: "Taipei",
    role: "Management Associate",
    start: "2021",
    end: "2022",
    logo: "/images/logos/kgi.png",
    blurb:
      "Rotation across different departments in the Retail Banking Group. Sourced a B2B partnership embedding banking APIs into dental-clinic workflows.",
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
