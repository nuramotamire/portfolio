export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  imageUrl: string;
}

export interface Project {
  title: string;
  description: string;
  caseStudyUrl: string;
  imageUrl: string;
}
