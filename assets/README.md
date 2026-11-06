# Site architecture

This is a static multi-page GitHub Pages website. Every public route is a directory containing its own `index.html`, so pages can be indexed and opened directly.

- `/index.html` — homepage and legacy hash-link migration.
- `/office/`, `/expertise/`, `/clients/`, `/anatomy/`, `/selected-work/`, `/journal/`, `/enquiries/` — primary pages and nested routes.
- `/privacy/`, `/terms/`, `/cookies/` — legal and privacy information.
- `/assets/css/site.css` — shared visual design system.
- `/assets/js/main.js` — navigation, enquiry mailto behaviour and cookie preference controls.
- `/sitemap.xml`, `/robots.txt`, `/sitemap/` — search discovery and human directory.
- `/404.html` — error page.

Keep page content in its route-specific HTML, use root-relative links for navigation and shared assets, and preserve the existing editorial visual language. No build step or client-side router is required. Never publish private owner information in metadata or public source code.
