# Vanasthali Hills redesign and lead follow-up

## Outcome
Turn the current one-page static site into a polished, mobile-first property guide for both plot buyers and sellers, with accurate location information and a consent-based inquiry and WhatsApp follow-up flow.

## What will change
- Redesign the public page with a distinctive nature-and-property visual direction, clearer Buy / Sell paths, easier navigation, and a persistent WhatsApp contact using the saved business number.
- Replace invented urgency, simulated activity, unsupported legal badges, and unverified travel-time claims with transparent, sourced information. Keep plot availability below 10 and remove the fake countdown.
- Improve the location experience with the supplied Vanasthali Hills coordinates, a Google map, and nearby-place categories backed by verified Places results. Show approximate travel times only when confirmed; retain map attribution.
- Make the investment tool illustrative rather than a promised return. Keep buyer stories text-only and use only claims supported by the information available.
- Capture buyer/seller inquiries with validation, store each submission securely, and add separate optional WhatsApp marketing consent. Give the owner a protected view of inquiries and controls for opted-in updates.
- Build WhatsApp follow-up as an owner-reviewed, scheduled workflow. It must use approved WhatsApp templates, honor opt-outs, and never send to people who did not consent. No promotional message will be sent during testing.
- Keep the public site deployable as static files; place private credentials and all messaging actions in Lovable Cloud.

## Technical approach
- Preserve the current static `index.html` as the actual public page rather than changing the unused React copy.
- Enable Lovable Cloud for secure submissions, consent records, owner access, and server-side WhatsApp actions; use explicit database grants and row-level security.
- Link Google Maps and WhatsApp Business through their managed connectors. Verify nearby businesses through Places API; keep Google credentials server-side and use the browser key only for map rendering.
- Add metadata for the Vanasthali Hills page and verify the static site, form, database write, and protected views. Google Maps rendering cannot be live-tested in this sandbox; it will need a check on an authorized deployed domain.

## Waiting on
- The user's preferred WhatsApp update frequency and owner email for private lead access.
- The user completing Lovable Cloud, Google Maps, and WhatsApp Business setup cards; WhatsApp templates also need Meta approval before sending.