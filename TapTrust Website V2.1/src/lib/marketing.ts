export const CONTACT_EMAIL = 'help@taptrust.app';

export const DOWNLOAD_ROUTE = '/download';

export const APP_STORE_URL =
  'https://apps.apple.com/app/apple-store/id6751519386?pt=128086069&ct=TapTrust%20Website&mt=8';

export const downloadLinks = {
  default: DOWNLOAD_ROUTE,
  website_hero: DOWNLOAD_ROUTE,
  website_pricing: DOWNLOAD_ROUTE,
  website_footer: DOWNLOAD_ROUTE,
  website_contact: DOWNLOAD_ROUTE,
  website_resources: DOWNLOAD_ROUTE,
} as const;

export const HOW_IT_WORKS_URL = '/how-it-works';
export const CONTACT_URL = `mailto:${CONTACT_EMAIL}?subject=TapTrust%20venue%20setup`;
export const FREE_CHECK_COUNT = 25;

export const analyticsEvents = {
  appStoreCta: 'app_store_cta_click',
  freeTrialCta: 'free_trial_cta_click',
  howItWorks: 'how_it_works_click',
  contactSupport: 'contact_support_click',
  supportedCredentialsView: 'supported_credentials_view',
  pricingTrialView: 'pricing_trial_view',
  faqInteraction: 'faq_interaction',
} as const;
