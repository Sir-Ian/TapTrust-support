# TapTrust Website Analytics Events

The site does not currently include an analytics provider. Avoid adding a new
analytics dependency until the provider and privacy posture are confirmed.

Recommended providers:

- Plausible for simple privacy-forward traffic, UTM, and goal tracking.
- GA4 if paid media attribution and deeper funnel reporting become necessary.

Current markup includes `data-analytics-event` hooks for the highest-value
conversion actions:

- `app_store_cta_click`: Download TapTrust CTA clicks.
- `free_trial_cta_click`: Start Free / free trial CTA clicks.
- `how_it_works_click`: How-it-works CTA clicks.
- `contact_support_click`: Support email clicks.
- `supported_credentials_view`: Supported credentials section exposure hook.
- `pricing_trial_view`: Pricing and trial section exposure hook.
- `faq_interaction`: FAQ disclosure interactions.

Current download destination:

- All `Download TapTrust`, `Start Free`, and free-trial CTAs should use the
  centralized `downloadLinks` placement config in `src/lib/marketing.ts`.
- The visible website destination is `/download`; the redirect route sends users
  to the configured `APP_STORE_URL`.
- The current App Store campaign link uses Apple campaign attribution:
  `pt=128086069`, `ct=TapTrust%20Website`, `mt=8`.

Privacy posture:

- Avoid collecting credential details, names, dates of birth, device IDs, or
  staff-entered ID information in analytics.
- Prefer aggregate page, campaign, and CTA metrics.
- Treat support contact as a help event without attaching personal ID data.

Recommended campaign attribution:

- Reddit: `utm_source=reddit&utm_medium=social&utm_campaign=venue_mobile_id`
- Facebook groups: `utm_source=facebook&utm_medium=group&utm_campaign=venue_mobile_id`
- Venue outreach: `utm_source=venue_outreach&utm_medium=email&utm_campaign=door_staff_trial`
- QR flyers: `utm_source=qr&utm_medium=print&utm_campaign=venue_free_trial`
- TikTok or Instagram: `utm_source=instagram&utm_medium=social&utm_campaign=mobile_id_door`
- Paid ads: `utm_source=paid_ads&utm_medium=cpc&utm_campaign=mobile_id_age_checks`

Useful experiments:

- Hero headline: hardware-free iPhone promise vs faster line promise.
- Primary CTA: `Download TapTrust` vs `Start Free`.
- Trial copy: free-check allowance first vs hardware-free iPhone promise first.
- Credential section: compact cards vs state/issuer availability explainer.
- Audience emphasis: bar-owner cost and hardware pain vs door-staff speed and
  confidence.
