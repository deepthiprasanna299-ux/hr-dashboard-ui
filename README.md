<<<<<<< HEAD
# HR Dashboard UI

A premium-looking HR dashboard built with React, Vite, Tailwind CSS and Lucide icons. Useful as an interview-ready frontend demo.

## Features
- Dashboard: KPIs, department analytics, weekly attendance
- Employees: searchable list, quick view modal, details page
- Profile & Settings pages, dark mode with persistence
- Collapsible sidebar, responsive layout, mobile overlay
- Notifications, upcoming interviews, quick actions (export CSV)

## Routes
- `/` — Dashboard
- `/employees` — Employees list
- `/employee/:id` — Employee details
- `/hiring` — Hiring page
- `/calendar` — Calendar page
- `/settings` — Settings
- `/profile` — Profile

## Local setup
1. Install dependencies
```
npm install
```
2. Run dev server
```
npm run dev
```
3. Build for production
```
npm run build
```
4. Lint
```
npm run lint
```

## Implementation notes
- Theme persistence: stored in `localStorage.theme` and applied on `document.documentElement`.
- Logout clears `localStorage.auth` and redirects to `/` (`Header` component).
- Quick export uses `src/data/employees.js` to generate a CSV in the browser.
- Page transitions: `.page-transition` animation in `src/index.css`.

## File pointers
- Layout & routing: `src/components/Layout.jsx` and `src/main.jsx`
- Header / Sidebar: `src/components/Header.jsx`, `src/components/Sidebar.jsx`
- Employees data: `src/data/employees.js`

If you want, I can commit these changes, run a local preview, or prepare a short demo script.
# HR Dashboard UI

This is a frontend-only HR Dashboard UI built with React (Vite) and Tailwind CSS. It includes a Dashboard, Employees list, Employee details, search, filters, dark mode, collapsible sidebar, and quick-view modals.

Features implemented:
- Dashboard page with placeholder cards
- Employees page with search, department filter, and sorting
- Employee Details page
- Quick-view modal for employees
- Dark mode toggle (persisted to localStorage)
- Collapsible sidebar

Run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Deployment (Netlify):
1. Push the repo to GitHub.
2. In Netlify, create a new site from Git and connect the repo.
3. Use the default build command `npm run build` and publish directory `dist`.

Notes:
- Tailwind dark mode uses the `class` strategy. Toggle via the moon/sun button in the header.
- This project is intentionally frontend-only with mock data in `src/data/employees.js`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# hr-dashboard-ui
A responsive HR Dashboard UI built with React, Vite, Tailwind CSS, and React Router.
>>>>>>> c942027b20e9d543118c63fb08ff91c70ef1849b
