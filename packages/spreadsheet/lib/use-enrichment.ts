export type Person = {
  id: string;
  linkedinUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
};

const LINKEDIN_URLS = [
  "https://linkedin.com/in/john-smith-tech",
  "https://linkedin.com/in/sarah-johnson-marketing",
  "https://linkedin.com/in/michael-brown-sales",
  "https://linkedin.com/in/emily-davis-hr",
  "https://linkedin.com/in/david-wilson-finance",
  "https://linkedin.com/in/jessica-garcia-product",
  "https://linkedin.com/in/robert-miller-engineering",
  "https://linkedin.com/in/amanda-taylor-design",
  "https://linkedin.com/in/christopher-anderson-ops",
  "https://linkedin.com/in/michelle-thomas-strategy",
  "https://linkedin.com/in/james-jackson-consulting",
  "https://linkedin.com/in/lisa-white-analytics",
  "https://linkedin.com/in/daniel-harris-growth",
  "https://linkedin.com/in/jennifer-martin-content",
  "https://linkedin.com/in/matthew-thompson-dev",
  "https://linkedin.com/in/ashley-clark-partnerships",
  "https://linkedin.com/in/andrew-rodriguez-security",
  "https://linkedin.com/in/stephanie-lewis-legal",
  "https://linkedin.com/in/joshua-lee-research",
  "https://linkedin.com/in/nicole-walker-customer",
  "https://linkedin.com/in/ryan-hall-innovation",
  "https://linkedin.com/in/rachel-allen-communications",
  "https://linkedin.com/in/brandon-young-infrastructure",
  "https://linkedin.com/in/samantha-king-quality",
  "https://linkedin.com/in/kevin-wright-business",
  "https://linkedin.com/in/lauren-lopez-training",
  "https://linkedin.com/in/tyler-hill-compliance",
  "https://linkedin.com/in/megan-green-procurement",
  "https://linkedin.com/in/jonathan-adams-logistics",
  "https://linkedin.com/in/brittany-baker-relations",
];

export const generateSamplePeople = (count: number): Person[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    linkedinUrl: LINKEDIN_URLS[i] || `https://linkedin.com/in/user-${i + 1}`,
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
  }));
};
