export interface EducationEntry {
  school: string;
  shortName: string;
  location: string;
  degree: string;
  start: string;
  end: string;
  note?: string;
  logo?: string;
}

export const education: EducationEntry[] = [
  {
    school: "UC Berkeley, Haas School of Business",
    shortName: "Berkeley Haas",
    location: "Berkeley, CA",
    degree: "Master of Business Administration",
    start: "2025",
    end: "2027",
    logo: "/images/logos/ucb.png",
    note: "Berkeley Haas Merit Scholarship · Tech Club · Fintech Club · Product Management Club",
  },
  {
    school: "National Taiwan University",
    shortName: "NTU",
    location: "Taipei, Taiwan",
    degree: "Bachelor of Arts, Economics",
    start: "2015",
    end: "2019",
    logo: "/images/logos/ntu.jpg",
    note: "Co-Captain, Varsity Baseball Team",
  },
];
