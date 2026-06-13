export type ServiceId =
  | 'stairlifts'
  | 'wet-rooms'
  | 'walk-in-showers'
  | 'grab-rails'
  | 'ramps'
  | 'door-widening'
  | 'bathroom-adaptations'
  | 'kitchen-adaptations'
  | 'through-floor-lifts'
  | 'level-access-showers';

export interface Service {
  id: ServiceId;
  title: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  keyFeatures: string[];
  averageCostRange: string;
  installDays: string;
  eligibilityInfo: string;
  iconName: string;
  seoKeywords: string[];
}

export interface FundingGuide {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  eligibilityRules: string[];
  applicationSteps: string[];
  frequentlyAsked: { q: string; a: string }[];
}

export interface CityData {
  id: string;
  name: string;
  region: string;
  localIntro: string;
  councilName: string;
  councilOtPhone: string;
  areaCoverage: string[];
  caseStudyTitle: string;
  caseStudyDesc: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  adaptationType: string;
  rating: number;
  text: string;
  date: string;
}
