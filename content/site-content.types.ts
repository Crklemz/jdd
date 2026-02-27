/**
 * Shared types for JDD site content.
 * Edit content in content/home.ts, about.ts, experiences.ts, booking.ts.
 */

export interface HomeContent {
  hero: {
    tagline: string;
    invocation: [string, string];
    identity: string;
    identity2: string;
    energy1: string;
    energy2: string;
  };
  scrapbookImagePaths: string[];
  skillsHeading: string;
  skillsList: string[];
  eventTypesIntro: string;
  eventTypesList: string[];
  ctaButtonLabel: string;
  ctaButtonHref: string;
  reviewQuotes: string[];
  landingImagePaths: string[];
  videoAriaLabel: string;
  videoAspectRatio: string;
  galleryAltPrefix: string;
  /** Alt text for decorative section images (skills, event types, energy block). */
  sectionImageAlts: {
    skills: string;
    eventTypes: string;
    energy: string;
  };
}

export interface AboutContent {
  welcomeHeading: string;
  preJesterHeading: string;
  preJesterParagraphs: string[];
  becomingHeading: string;
  becomingParagraphs: string[];
  whatSetsApartHeading: string;
  whatSetsApartItems: string[];
  whyChooseHeading: string;
  whyChooseItems: string[];
  testimonialQuotes: string[];
  aboutImagePaths: string[];
  videoAriaLabel: string;
  /** e.g. "16/9" — frame hugs video with no letterboxing when matched to actual video ratio */
  videoAspectRatio: string;
  galleryAltPrefix: string;
  ctaButtonLabel: string;
  ctaButtonHref: string;
}

export interface RealmBlurb {
  title: string;
  description: string;
}

/** Neon text + shadow class pair for fantasy list styling (e.g. "neon-text-red text-shadow-neon-red") */
export type FantasyNeonColor =
  | "neon-text-red text-shadow-neon-red"
  | "neon-text-orange text-shadow-neon-orange"
  | "neon-text-yellow text-shadow-neon-yellow"
  | "neon-text-green text-shadow-neon-green"
  | "neon-text-blue text-shadow-neon-blue"
  | "neon-text-purple text-shadow-neon-purple"
  | "neon-text-pink text-shadow-neon-pink"
  | "neon-text-indigo text-shadow-neon-indigo"
  | "neon-text-magenta text-shadow-neon-magenta"
  | "neon-text-cyan text-shadow-neon-cyan"
  | "neon-text-coral text-shadow-neon-coral";

export interface JesterFantasy {
  name: string;
  tags: string[];
  /** Optional image paths shown below this fantasy (e.g. /landing-images/2.jpg). */
  imagePaths?: string[];
  /** Neon color class string for this entry. */
  color: FantasyNeonColor;
}

export interface ExperiencesContent {
  introHeading: string;
  eventTypesList: string[];
  realmBlurbs: RealmBlurb[];
  fantasiesHeading: string;
  jesterFantasies: JesterFantasy[];
  customFantasiesNote: string;
  fantasyImagePaths: string[];
  childrensImagePaths: string[];
  adultImagePaths: string[];
  adultGalleryLabel: string;
  ctaButtonLabel: string;
  ctaButtonHref: string;
}

export interface BookingContent {
  heading: string;
  introParagraphs: string[];
  workflowSteps: string[];
  landingImagePaths: string[];
}
