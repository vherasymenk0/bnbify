# Bnbify

## Project Overview

**Bnbify** is a full-stack web application designed to offer short-term rental services, inspired by Airbnb. This
project aims to replicate the core functionalities of Airbnb, including booking properties, viewing listings, and
managing user accounts. Additionally, Bnbify includes an admin account with access to project statistics.

The project accessible at [https://bnbify.vercel.app/](https://bnbify.vercel.app/).

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, Shadcn UI, Zustand
- **Backend:** Prisma ORM, Supabase (for database management), Stripe (for payment integration)
- **Utilities:** Axios, Leaflet (for map features), Zod (for schema validation)
- **Authentication:** Clerk
- **Deployment:** Vercel

## Features

- **User Authentication**: Secure login and registration handled by Clerk.
- **Listings & Bookings**: Users can view listings, book properties, and manage their bookings.
- **Map Integration**: Map-based property visualization using Leaflet and React Leaflet.
- **Admin Dashboard**: Access to project statistics for admins to monitor platform performance.
- **Payment Processing**: Stripe integration for seamless and secure payment handling.
- **Dark Mode Support**: Theme switching support via `next-themes`.
- **Responsive Design**: Optimized for mobile and desktop experiences.

## How to Run the Project Locally

## Available Scripts

- `yarn dev` - Starts the development server.
- `yarn build` - Generates Prisma client and builds the application for production.
- `yarn start`  Starts the application in production mode.
- `yarn lint` Runs ESLint to check for code quality issues.
