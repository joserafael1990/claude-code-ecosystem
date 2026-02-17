# Modern Next.js Engineering & Best Practices

This skill outlines the standards for building high-performance, full-stack applications using Next.js 14/15+ with the App Router architecture.

## App Router & Architecture
- **Routing Model**: Leverage file-based routing with `layout.js`, `page.js`, and `template.js`. Use `(route-groups)` to organize code without affecting URLs.
- **Advanced UI Flows**: Implement Parallel Routes (`@slot`) and Intercepting Routes (`(..)`) for complex interfaces like modals or dashboard sidebars.
- **Middleware**: Use `middleware.ts` for centralized authentication, localization, and edge-level redirects.
- **Safety**: Implement robust loading states with `loading.js` (Suspense) and error handling with `error.js`.

## React Server Components (RSC) & Server Actions
- **Server Default**: Write components as Server Components by default. Use `"use client"` sparingly only for event listeners, browser-only APIs, or state hooks.
- **Data Fetching**: Fetch data directly in Server Components using `async/await`. Use the Extended Fetch API for native caching and revalidation.
- **Server Actions**: Use Server Actions for all data mutations. Pair with `useActionState` and `useFormStatus` for robust form handling.
- **Mutation Safety**: Implement optimistic updates using `useOptimistic` to provide instant user feedback.

## Data Caching & Revalidation
- **Caching Strategy**: Use the Next.js Data Cache. Manage revalidation using time-based intervals (`next: { revalidate: 60 }`) or on-demand tags (`revalidateTag`).
- **External Data**: Use `unstable_cache` for database or CMS calls that don't involve the `fetch` API.
- **Rendering Modes**: Understand and apply Static Rendering, Dynamic Rendering, and Incremental Static Regeneration (ISR) as needed.
- **Partial Prerendering (PPR)**: Target PPR to combine static shell performance with dynamic content flexibility.

## Performance & SEO Optimization
- **Asset Optimization**: Use `next/image` for automatic resizing, compression, and lazy loading. Always provide `sizes` and `priority` for LCP images.
- **Typography**: Use `next/font` to eliminate layout shift (CLS) by pre-loading and self-hosting fonts.
- **Metadata**: Utilize the Metadata API (`generateMetadata`) instead of manual `<head>` tags. Correctly implement `sitemap.xml` and `robots.txt` using route handlers.
- **Vitals**: Aim for aggressive Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, and INP < 200ms.

## Quality & Standards
- **TypeScript**: Enforce strict TypeScript types across server and client boundaries. Ensure `params` and `searchParams` are correctly typed in page components.
- **Bundle Management**: Regularly audit the build with `@next/bundle-analyzer`. Minimize the use of heavy client-side libraries.
- **Deployment**: Design for Vercel or self-hosted environments using the `standalone` build output. Ensure environment variables are strictly managed in CI/CD.
