export type Platform = 'linkedin' | 'infojobs' | 'indeed' | 'tecnoempleo' | 'glassdoor';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  platform: Platform;
  tags: string[];
  posted: string;
  match: number;
  url: string;
}

export interface UserProfile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  skills: string;
  education: string;
  languages: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface GeneratedDocument {
  type: 'cv' | 'cover-letter';
  content: string;
  job: Job;
  date: Date;
}
