# Next.js + Material UI starter project

Build status:

-   Main: [![CI](https://github.com/liebharc/nextjs-mui-starter/workflows/CI/badge.svg?branch=main)](https://github.com/liebharc/nextjs-mui-starter/actions)
-   Demo: (https://liebharc.github.io/nextjs-mui-starter/)[https://liebharc.github.io/nextjs-mui-starter/].

## Features

This starter project offers:

-   Up to date Next.js and Material UI project, ready to go
-   A simple design, which still receives a lot of positive feedback
-   The design is kept close the Material UI defaults. This makes it easy to work with, allows good integration of 3rd party libraries and is a good starting point for your own designs.
-   It includes a blog!
-   Reduced the material UI bundle size (https://mui.com/guides/minimizing-bundle-size/)
-   Unit Test (Jest) and Integration Test (Cypress) are setup
-   Linter and prettier are configured
-   Setup for sitemaps, hardened HTTP headers

A live demo can be found at (https://liebharc.github.io/nextjs-mui-starter/)[https://liebharc.github.io/nextjs-mui-starter/].

## License

This project is licensed under `Apache-2.0`. It would be nice if you would link https://growtogether.team from your site to support us as well. But no attribution is required, it's only a favor we ask and completely optional :).

## Build

Cheat sheet on how to start things:

-   Build the blog: `npm run build:content`, do this first after checking out the repo as dev builds won't work otherwise
-   Dev: `npm run dev`
-   Prod: `npm run prod`
-   Unit Tests: `npm test` or `npm run test:watch`
-   UI Integration Tests: `npx cypress open`
-   Checks: `npm run lint`
-   Update all dependencies: Once `npm install -g npm-check-updates` and then `npx npm-check-updates -u`

## Getting Started

Clone this repository: `git clone https://github.com/liebharc/nextjs-mui-starter`

### Customization

-   Edit `/src/ui/Literals.ts` and enter your brand, description and contact details
-   Start your own blog post by edit `/content/post/yourfirstpost.md`
-   Add your own content to the pages at `/pages` or create new ones
-   Enable github workflows based on `/.github/workflows`
-   Edit your names and roles to `/public/humans.txt` and consider to generate a security.txt at https://securitytxt.org/ and place it next to the humans.txt
-   Add your URL to `sitemap-config.js`
-   Review the content security policy in `next.config.js`. If the site refuses to load external images, APIs, styles, etc then you have add them here. Chrome provides useful information about this in its console (developer tools). If you insist you can of course delete the whole content security section, but perhaps read https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP first. Also https://observatory.mozilla.org/analyze/ gives you feedback regarding your HTTP headers.
