# Prabhav Jain's Projects

## Project 1: AI-Powered Frontend Code Generator

### Objective
To build a web application that generates frontend code (React, Tailwind CSS) from user prompts using AI.

### Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Node.js
- **AI**: Groq API

### Description
This project leverages the Groq API for its incredible speed, allowing for near-instant code generation. The Node.js backend serves as a simple proxy to manage API keys and route requests. Framer Motion is used to animate the generated components as they appear on the screen.

### Key Features
- Real-time code generation from natural language prompts
- Instant preview of generated components
- Support for React and Tailwind CSS
- Smooth animations using Framer Motion
- Copy-to-clipboard functionality

### Technical Challenges Solved
- Optimizing API calls for minimal latency
- Implementing real-time code preview
- Creating a user-friendly prompt interface

### Links
- GitHub: [Add your GitHub link]
- Live Demo: [Add your demo link]

---

## Project 2: Swadeshi Prompt Builder

### Objective
A web application to help users build high-quality prompts for AI models, with a freemium subscription model.

### Tech Stack
- **AI**: Google Gemini API
- **Frontend**: [Specify your frontend tech]
- **Backend**: [Specify your backend tech]

### Description
Features a two-tier system:
- **"Janata" Tier** (Free): Basic prompt building features
- **"Maharaja" Tier** (Pro): Advanced features and unlimited usage

The core logic relies on the Google Gemini API to analyze and improve user prompts, teaching users how to craft better prompts for various AI models.

### Key Features
- Prompt analysis and improvement suggestions
- Template library for common use cases
- Freemium subscription model
- User dashboard with usage analytics

### Links
- GitHub: [Add your GitHub link]
- Live Demo: [Add your demo link]

---

## Project 3: Tapnex - Event Technology Platform

### Objective
Comprehensive event management solution for organizers, volunteers, and vendors.

### Tech Stack
- [Add your tech stack details]

### Description
Tapnex is a complete event technology platform that streamlines:
- **Volunteer Management**: Coordination and task assignment
- **Cashless Access Control**: Secure entry and payment systems
- **Vendor Settlement**: Automated payment and reconciliation
- **Event Coordination**: Real-time communication and updates

### Key Features
- Real-time volunteer tracking
- QR code-based access control
- Automated vendor payments
- Analytics dashboard for organizers
- Mobile-responsive design

### Impact
[Describe the impact - number of events managed, users served, etc.]

### Links
- Website: [Add your website link]
- GitHub: [Add your GitHub link if applicable]

---

## Project 4: Forge Cafe Booking (FCB) - A Tapnex Platform

### Objective
Forge Cafe Booking (FCB) is a full-stack, multi-tenant SaaS (Software as a Service) platform built to modernize gaming cafes. It provides a complete, end-to-end solution for cafe owners to manage their gaming stations, automate slot bookings, handle online payments, and track revenue. The system also provides a seamless booking experience for customers and a central dashboard for super-admin (Tapnex) oversight.

### Tech Stack
- **Backend**: Django (Python)
- **Frontend**: Django Templates (HTML), Tailwind CSS, Vanilla JavaScript
- **Database**: PostgreSQL (with psycopg2-binary)
- **Payments**: Razorpay
- **Real-time Features**: Supabase (for real-time slot availability updates)
- **Notifications**: Telegram Bot API (for instant alerts to cafe owners)
- **Authentication**: Django All-Auth (for social and local user login)
- **Deployment**: Vercel (configured for serverless Django and cron jobs)

### Description
This project is a complete, monolithic application with a complex, multi-tenant architecture designed to revolutionize how gaming cafes operate. It handles everything from slot booking to payment processing to real-time notifications.

### Key Features & Technical Details

#### 1. Multi-Tenant Role System
The entire platform is built around three distinct user roles, each with a unique dashboard and permissions:
- **Customer (`Customer` model)**: Can browse cafes, view real-time slot availability, book slots, pay online, and manage their upcoming bookings
- **Cafe Owner (`CafeOwner` model)**: Manages their cafe profile, gaming stations, and pricing. They have a dedicated dashboard to view all bookings, track revenue, and verify customer QR codes. They also receive instant Telegram notifications for new bookings
- **Super Admin (`TapnexSuperUser` model)**: Has global oversight of the entire platform. They can manage all cafe owners, view system-wide analytics, and control platform settings like commission rates

#### 2. Dynamic Slot Booking & Real-Time Availability
This is the core technical feature of the app:
- **Slot Generation**: The system includes a robust `AutoSlotGenerator` to automatically create `TimeSlot` objects for each `GamingStation` based on the cafe's operating hours
- **Real-time Updates**: To prevent double-bookings, the frontend uses Vanilla JavaScript to subscribe to a **Supabase real-time channel**. When one user selects a slot, it is instantly marked as "locked" for all other users browsing the page, ensuring a smooth and conflict-free booking experience

#### 3. Secure QR Code Verification System
To handle in-person check-ins, the system generates secure, expiring QR codes:
- **Generation**: Upon successful payment, a unique QR code is generated for the booking
- **Security**: The QR code is not just a simple ID. It is a **JSON Web Token (JWT)** containing encrypted booking details and a short expiration time (e.g., 5 minutes). This prevents users from screenshotting a QR code and trying to reuse it later
- **Verification**: The cafe owner's dashboard has a scanner that validates the JWT, checks its expiration, and marks the booking as "verified" in the database, all in one step

#### 4. Automated Payments & Commission
The platform fully automates the financial workflow:
- **Payments**: Integrates **Razorpay** as the payment gateway. It creates a payment order, handles the frontend checkout modal, and verifies the payment signature (webhook) to confirm the booking
- **Commission Engine**: A custom `CommissionService` automatically calculates the platform fee (for Tapnex) and the net payout (for the Cafe Owner) for every booking based on pre-set rates
- **Revenue Dashboards**: Both the cafe owner and super admin have dashboards to track total revenue, commissions earned, and pending payouts in real-time

#### 5. Automated Operations
- **Telegram Notifications**: As soon as a booking is confirmed, a **Telegram bot** instantly messages the cafe owner with the booking details, so they are always in sync without having to check their dashboard
- **Cron Jobs**: The project is configured for Vercel deployment and includes a **Vercel Cron Job** (`api/cron/cleanup-old-slots.py`) that runs automatically to clean up old, expired, or unbooked slots from the database, keeping the system efficient

### Technical Challenges Solved
- Implementing real-time slot locking across multiple users to prevent double bookings
- Securing QR codes with JWT to prevent fraud and screenshot abuse
- Building a multi-tenant architecture with role-based access control
- Automating commission calculations and revenue tracking
- Integrating Razorpay payment webhooks for secure payment verification
- Setting up serverless Django on Vercel with automated cron jobs
- Implementing Supabase real-time subscriptions with Vanilla JavaScript

### Impact
This SaaS platform transforms traditional gaming cafes into modern, automated businesses with:
- Zero double-booking conflicts through real-time updates
- Instant payment verification and commission distribution
- Real-time notifications to cafe owners
- Secure, fraud-proof check-in system
- Automated administrative tasks saving hours of manual work

### Links
- GitHub: [Add your GitHub link]
- Live Demo: [Add your demo link]

---

*Note to Prabhav: Add more projects, fill in the missing details, and include specific metrics, achievements, and links. The more detailed your project descriptions, the better the AI can explain them to visitors!*