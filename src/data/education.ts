export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  start: string;
  end: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    school: "UC Berkeley, Haas School of Business",
    location: "Berkeley, CA",
    degree: "Master of Business Administration",
    start: "2025",
    end: "2027",
    note: "Berkeley Haas Merit Scholarship · Tech Club · Fintech Club · Product Management Club",
  },
  {
    school: "National Taiwan University",
    location: "Taipei, Taiwan",
    degree: "Bachelor of Arts, Economics",
    start: "2015",
    end: "2019",
    note: "Co-Captain, Varsity Baseball Team",
  },
];
