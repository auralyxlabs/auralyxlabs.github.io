/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  bullets?: string[];
  deliverables?: string[];
  benefits?: string[];
  ctaText?: string;
  badge?: string;
  category?: string;
  stats?: { value: string; label: string }[];
  image?: string;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  project: string;
  representative?: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  category?: string;
  // Newly requested premium fields
  industry: string;
  timeline: string;
  servicesDelivered: string[];
  logoText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  linkedin: string;
  email: string;
  shortBio?: string;
  photoUrl: string; // Unsplash premium portraits url
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  company: string;
  position: string;
  review: string;
  rating: number;
}
