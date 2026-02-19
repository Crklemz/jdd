/**
 * Shared types for JDD site content.
 * Edit content in content/home.ts, about.ts, experiences.ts, booking.ts.
 */

export interface HomeContent {
  hero: {
    tagline: string;
    invocation: string;
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
  signatureVideoPath: string;
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
  signatureVideoPath: string;
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

export interface JesterFantasy {
  name: string;
  tags: string[];
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
