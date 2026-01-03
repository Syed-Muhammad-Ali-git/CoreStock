This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Project changes made by the developer assistant:

- Split common types into per-area files under `app/types/`.
- Converted generated datasets to explicit hardcoded data in `app/data/hardcoded/` (removed runtime `Array.from` usage).
- Replaced inline-styled progress component in data with Tailwind classes and moved progress markup into data rows where used.
- Ensured global buttons use the `ManropeLocal` font; login page keeps `Satoshi` via the `.login-font` wrapper.
- Wired the organization table action "View" to navigate to `/organization/[name]`.
- Added global button cursor and hover improvements in `app/globals.css`.

Next steps recommended:

- Wire Edit/Delete actions to open modals and persist changes (in-memory or API).
- Centralize `react-toastify` by placing a single `ToastContainer` near the app root and call `toast()` on form submissions.
- Replace any remaining inline styles with Tailwind equivalents where needed.
- Run `npm run build` and fix any TypeScript or bundling issues that appear.

To run locally:

```bash
npm install
npm run dev
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
