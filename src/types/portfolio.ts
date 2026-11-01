export type RoleCategory = 'all' | 'frontend' | 'backend' | 'fullstack'

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  category: 'frontend' | 'backend' | 'fullstack'
  featured: boolean
  image?: string
  tags: string[]
  githubUrl: string
  githubClientUrl?: string
  githubServerUrl?: string
  liveUrl?: string
  highlights: string[]
  architectureDetails?: string
  stats?: {
    label: string
    value: string
  }[]
}

export interface SkillCategory {
  title: string
  description: string
  icon: string
  skills: {
    name: string
    level: 'Core' | 'Proficient' | 'Familiar'
    icon?: string
    description?: string
  }[]
}

export interface Experience {
  id: string
  role: string
  organization: string
  location: string
  period: string
  type: 'University Lab' | 'Club & Community' | 'Academic Teaching' | 'Open Source' | 'Internship'
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  degree: string
  major: string
  institution: string
  period: string
  gpa: string
  status: string
  relevantCourses: string[]
  highlights: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  badgeText: string
  credentialUrl?: string
  icon?: string
}

export interface CandidateInfo {
  name: string
  headline: string
  targetRoles: string[]
  status: {
    available: boolean
    label: string
    details: string
  }
  bio: string
  longBio: string[]
  location: {
    city: string
    country: string
    timezone: string
    remotePreference: string
  }
  education: Education
  careerGoal: string
  currentlyLearning: {
    topic: string
    reason: string
    progress: string
  }
  contacts: {
    email: string
    github: string
    linkedin: string
    leetcode?: string
    twitter?: string
  }
  stats: {
    projectsCompleted: number
    technologiesMastered: number
    githubContributions: string
    gpa: string
  }
}

