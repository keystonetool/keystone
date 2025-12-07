# Keystone Tool & Fabrication — Next.js Starter

This repository is a production-ready starting point for a modern website for Keystone Tool & Fabrication. It's built with Next.js + Tailwind CSS and designed to be dropped into GitHub and deployed to Vercel (free plan).

## What is included
- Responsive Next.js site with pages: Home, Capabilities, Gallery, About, Request a Quote, Contact
- Tailwind CSS for styling
- Components: Header, Footer, Hero, Gallery grid
- A Quote form wired to Formspree (replace the endpoint in /pages/quote.js with your form id)
- Placeholder images in `/public` — replace with the shop photos and logo you have permission to use.

## How to use
1. Replace placeholder images in `/public`:
   - `/public/logo.png` — company logo (recommended 400x400 PNG)
   - `/public/hero.jpg` — hero/shop photo
   - `/public/gallery1.jpg` ... `/public/gallery6.jpg` — gallery images

2. Replace contact info in `/components/Footer.js` and pages.

3. Set up a Formspree form to receive RFQs:
   - Create a free form at https://formspree.io and copy the form endpoint.
   - In `/pages/quote.js` replace `https://formspree.io/f/your-form-id` with your endpoint.

4. Test locally:
```bash
npm install
npm run dev
```

5. Push to GitHub and connect the repo to Vercel:
   - Create a new GitHub repo and push the files.
   - In Vercel, click "New Project" → Import from GitHub → pick this repo.
   - Vercel will build and deploy automatically.

## Notes & next steps
- If you need file upload storage > Formspree limits, we can add an S3 presigned upload flow and a small API to handle uploads.
- For CRM integration (HubSpot, Pipedrive), we can add webhooks or serverless API routes.
- Accessibility and SEO meta can be expanded per-page.

If you'd like, I can:
- Replace placeholders with the real images you give me and produce a new zip.
- Add an admin dashboard (requires serverless functions and optional secrets).
- Convert this to a static export (next export) or a headless CMS-enabled site.

