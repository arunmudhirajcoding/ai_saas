# Tekytalk - AI-Powered Real-Time Teaching Platform

A modern SaaS application that enables users to create personalized AI teaching companions and engage in real-time voice-based learning sessions using advanced voice AI technology.

## Demo

If you want to see a demo of this project in action, you can visit:
[DEMO](https://ai-saas-sand-one.vercel.app/) 

## 📋 Project Overview

**Tekytalk** is a Next.js-based full-stack application that combines artificial intelligence with education. Users can create custom AI tutors ("companions") tailored to specific subjects and learning styles, then interact with them through natural voice conversations powered by VAPI AI and advanced speech synthesis.

### Key Features

-   **Companion Builder**: Create custom AI tutors with configurable:
    -   Subject (Mathematics, Language, Science, History, Coding, Economics)
    -   Learning topic and style (formal/casual)
    -   Voice preferences (male/female with multiple voice options)
    -   Session duration
-   **Real-Time Voice Sessions**: Interactive voice conversations with AI tutors using:

    -   VAPI AI SDK for voice orchestration
    -   Deepgram for speech-to-text transcription
    -   11Labs for text-to-speech synthesis
    -   OpenAI GPT-4 for intelligent tutoring responses

-   **User Management**: Secure authentication and subscription-based access control via Clerk

-   **Learning Journey Tracking**: Monitor completed sessions, created companions, and learning history

-   **Subscription Plans**: Flexible pricing tiers with companion creation limits

## 🏗️ Tech Stack

### Frontend

-   **Framework**: [Next.js 15.2.3](https://nextjs.org/) - React-based full-stack framework
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Built with Radix UI primitives
-   **Styling**: [Tailwind CSS 4.1.7](https://tailwindcss.com/) - Utility-first CSS framework
-   **Animations**: [Lottie React 2.4.1](https://www.npmjs.com/package/lottie-react) - JSON-based animations
-   **Icons**: [Lucide React 0.511.0](https://lucide.dev/) - Icon library
-   **Forms**: [React Hook Form 7.56.4](https://react-hook-form.com/) + [Zod 3.25.28](https://zod.dev/) - Form validation

### Backend & Services

-   **Authentication**: [@clerk/nextjs 6.20.0](https://clerk.com/) - User authentication & management
-   **Database**: [@supabase/supabase-js 2.49.8](https://supabase.com/) - PostgreSQL backend
-   **Voice AI**: [@vapi-ai/web 2.3.1](https://vapi.ai/) - Voice conversation orchestration
-   **Runtime**: Node.js with TypeScript 5
-   **Observability / Error Tracking**: `@sentry/nextjs` - application monitoring, error reporting and performance tracing

### Development Tools

-   **Language**: TypeScript 5
-   **Linting**: ESLint 9
-   **Build**: Next.js built-in build system
-   **PostCSS**: PostCSS 8 for CSS processing

## 📦 Project Structure

```
ai_saas/
├── app/                          # Next.js App Router pages
│   ├── companions/               # Companion library & sessions
│   │   ├── page.tsx             # Browse all companions
│   │   ├── [id]/page.tsx        # Individual companion session
│   │   └── new/page.tsx         # Create new companion
│   ├── my-journey/              # User profile & history
│   ├── subscription/            # Pricing & plans
│   ├── sign-in/                 # Clerk authentication
│   ├── layout.tsx               # Root layout with Clerk provider
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles & theme
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   ├── accordion.tsx
│   │   ├── label.tsx
│   │   └── table.tsx
│   ├── CompanionForm.tsx        # Companion creation form
│   ├── CompanionComponent.tsx   # Real-time voice session UI
│   ├── CompanionsList.tsx       # Table view of companions
│   ├── CompanionCard.tsx        # Card component for companions
│   ├── Navbar.tsx               # Navigation header
│   ├── NavItems.tsx             # Nav links
│   ├── CTA.tsx                  # Call-to-action section
│   ├── SearchInput.tsx          # Search functionality
│   └── SubjectFilter.tsx        # Subject filtering
│
├── lib/                          # Utility functions & client setup
│   ├── actions/                 # Server actions
│   │   └── companion.actions.ts # CRUD operations for companions
│   ├── utils.ts                 # Helper functions & AI config
│   ├── supabase.ts              # Supabase client factory
│   └── vapi.sdk.ts              # VAPI SDK initialization
│
├── types/                        # TypeScript type definitions
│   ├── index.d.ts               # Main types (Companion, User, etc.)
│   └── vapi.d.ts                # VAPI message types
│
├── constants/                    # Static data
│   ├── index.ts                 # Subjects, voices, sample data
│   └── soundwaves.json          # Lottie animation data
│
├── middleware.ts                 # Clerk auth middleware
├── sentry.server.config.ts       # Sentry server initialization
├── sentry.edge.config.ts         # Sentry edge runtime configuration
├── instrumentation-client.ts     # Sentry client instrumentation
├── instrumentation.ts              # Sentry server instrumentation
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies & scripts
└── .env.local                   # Environment variables
```

## 🚀 Getting Started

### Prerequisites

-   **Node.js** 18+ (with npm or yarn)
-   Clerk account (authentication)
-   Supabase project (database)
-   VAPI API key (voice AI)
-   Environment variables configured
-   Sentry account (optional, for error tracking) and `sentry-cli` for uploading source maps in CI

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/arunmudhirajcoding/ai_saas.git
    cd ai_saas
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure environment variables**

    Create a `.env.local` file in the root directory:

    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
    CLERK_SECRET_KEY=<your-clerk-secret-key>

    # Supabase Database
    NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
    NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>

    # VAPI Voice AI
    NEXT_PUBLIC_VAPI_WEB_TOKEN=<your-vapi-web-token>

    ```

# Sentry (observability)

NEXT_PUBLIC_SENTRY_DSN=<your-sentry-dsn>
SENTRY_AUTH_TOKEN=<your-sentry-auth-token>
SENTRY_ORG=<your-sentry-org>
SENTRY_PROJECT=<your-sentry-project>

````


5. **Run development server**
```bash
npm run dev
````

The application will be available at `http://localhost:3000`

## 📚 Available Scripts

All scripts defined in `package.json`:

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🔑 Key Functionalities

### 1. **Companion Creation** (`/companions/new`)

-   Users can create custom AI tutors
-   Form validation using React Hook Form + Zod
-   Fields: name, subject, topic, voice, style, duration
-   Server action in `lib/actions/companion.actions.ts`
-   Subscription-based limits enforced

### 2. **Real-Time Voice Sessions** (`/companions/[id]`)

Uses `CompanionComponent.tsx` to orchestrate:

-   **Voice AI Configuration**: Managed by `lib/utils.ts` `configureAssistant()` function
    -   GPT-4 as the language model
    -   Deepgram Nova-3 for speech recognition
    -   11Labs for voice synthesis with customizable voice IDs
-   **Session Management**:

    -   Call start/end tracking
    -   Real-time transcript capture
    -   Microphone toggle functionality
    -   Lottie animations during active sessions

-   **Message Flow**:
    ```
    User Speech → Deepgram (STT) → GPT-4 (Processing)
                                   → 11Labs (TTS) → User Hears Response
    ```

### 3. **Companion Library** (`/companions`)

-   Browse all available companions
-   Search by topic using `SearchInput.tsx`
-   Filter by subject using `SubjectFilter.tsx`
-   URL-based query parameters for state management

### 4. **User Dashboard** (`/my-journey`)

-   View created companions
-   See session history with duration tracked
-   Statistics: lessons completed, companions created
-   Expandable sections using Radix UI Accordion

### 5. **Subscription Management** (`/subscription`)

-   Integrated Clerk pricing tables
-   Plan-based companion creation limits:
    -   Free: Limited companions
    -   Pro: Unlimited companions
-   Server-side permission checks

## 🎯 User Flow

```
1. User visits homepage → Sees popular companions
                       → Can view recent sessions
                       → CTA to build companion

2. User clicks "Build Companion" → Redirects to /companions/new
                                 → Checks subscription limits
                                 → Shows form or upgrade prompt
                                 → Creates companion on submit

3. User selects companion → Routes to /companions/[id]
                          → Initializes VAPI session
                          → Displays companion avatar + transcript
                          → Enables real-time voice conversation

4. Session ends → Records to session_history
               → User redirected or can restart

5. User visits "My Journey" → Sees all created companions
                            → Views session history
                            → Checks learning stats
```

## 🚨 Error Handling & Validation

-   **Form Validation**: Zod schemas with custom error messages
-   **Server Actions**: Try-catch with user-friendly error feedback
-   **Type Safety**: Full TypeScript coverage with strict mode enabled
-   **UI Feedback**: Loading states, disabled buttons during operations

### Sentry (Error tracking & observability)

This project uses `@sentry/nextjs` to capture errors, performance traces, and server-side exceptions. Sentry is initialized in the repository (see `sentry.server.config.ts` and `sentry.edge.config.ts`) and wired into both server and edge runtimes.

Setup and environment variables:

-   `NEXT_PUBLIC_SENTRY_DSN` — DSN used by the browser SDK (public).
-   `SENTRY_AUTH_TOKEN` — token for `sentry-cli` (CI) to upload source maps and releases.
-   `SENTRY_ORG` and `SENTRY_PROJECT` — sentry organization and project slugs for CI uploads.
-   Optionally set `SENTRY_RELEASE` in your CI to a predictable release id (commit SHA) to associate source maps.

Local quick test:

1. Add `NEXT_PUBLIC_SENTRY_DSN` to your `.env.local` (use Sentry project DSN).
2. Start the app and trigger a test error in the browser console or a server action. Example (browser console):

```js
// in browser console
throw new Error("sentry-test");
```

CI / Production recommendations:

-   Upload source maps using `sentry-cli` during your build step and set `SENTRY_RELEASE` to the commit SHA. This improves stack trace visibility.
-   Keep `SENTRY_AUTH_TOKEN` and `SUPABASE_SERVICE_ROLE_KEY` as secrets in your deployment platform (Vercel, GitHub Actions secrets, etc.).

Privacy & best practices:

-   Avoid sending sensitive PII. Use Sentry's `beforeSend` hook (in `sentry.server.config.ts`) to scrub or remove fields such as full names, emails, or raw transcripts before sending events.
-   Use sampling or performance triggers to limit traces in high-traffic environments.

Where to look in the repo:

-   `sentry.server.config.ts` — server-side Sentry init
-   `sentry.edge.config.ts` — edge runtime configuration
-   `next.config.js` — may contain Sentry webpack plugin integration for source maps

How Sentry is used in this project:

-   Initialization: Sentry is initialized for both server and edge runtimes using `sentry.server.config.ts` and `sentry.edge.config.ts`. These files configure SDK options such as `DSN`, `environment`, `release`, and `tracesSampleRate`.
-   Client-side: Browser errors and performance traces are captured via the public DSN (`NEXT_PUBLIC_SENTRY_DSN`) and sent to Sentry automatically for uncaught exceptions and manual captures.
-   Server-side: Server actions and API routes use the server SDK to capture exceptions and set user/context data. Use `Sentry.captureException()` in try/catch blocks where helpful.
-   Source maps & releases: During CI builds, set `SENTRY_RELEASE` and upload source maps with `sentry-cli` so Sentry can map minified stack traces back to source.
-   Privacy: The project uses `beforeSend` in the server init to scrub PII (for example, removing full transcripts or user emails) before events are sent.

## 📱 Responsive Design

-   Mobile-first approach using Tailwind breakpoints
-   Hidden elements on small screens (max-sm, max-md)
-   Flexible layouts with max-lg:flex-col-reverse
-   Touch-friendly button sizing
-   Optimized images with Next.js Image component

## 🔮 Future Enhancements

-   Bookmark system for favorite companions
-   Advanced analytics for learning metrics
-   Multi-language support
-   Offline mode with service workers
-   Community-shared companions
-   Advanced AI model fine-tuning

## Support

-   For issues or questions, contact me at [duruguarun@gmail.com](mailto:duruguarun@gmail.com).
-   Feedback is also welcome! You can create an issue on this project's GitHub page and label it as "feedback". This will help me to improve the project and make it more useful for everyone.
-   You can also give feedback direct in the application via the **"Give Feedback"** button in the right bottom of the screen.

---

**Built with ❤️ using Next.js, VAPI AI, and modern web technologies**
