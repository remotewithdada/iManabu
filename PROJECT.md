# IMANABU Website Project Specification

This document is the single source of truth for the IMANABU website. Product decisions, design choices, content structure, and implementation details should align with this specification unless this file is intentionally updated.

## Project Overview

IMANABU is a modern language school website designed to present the school clearly, warmly, and professionally to prospective students, parents, adult learners, and community partners.

The website should communicate that IMANABU is:

- Friendly and welcoming
- Serious about language learning outcomes
- Easy to understand for first-time visitors
- Trustworthy for parents, students, and adult learners
- Locally grounded while globally minded

The site should prioritize clarity over decoration. Visitors should quickly understand what IMANABU offers, who it serves, how lessons work, and how to take the next step.

## Business Goals

The website exists to support the growth and credibility of IMANABU.

Primary goals:

- Convert qualified visitors into trial lesson inquiries.
- Explain IMANABU's learning approach in simple, confidence-building language.
- Present courses and lesson options clearly.
- Build trust through professional design, approachable messaging, and transparent information.
- Make contact, booking, or inquiry actions easy from every major page.

Secondary goals:

- Improve local search visibility.
- Support future multilingual content.
- Provide a maintainable foundation for new pages, campaigns, and course offerings.
- Establish a consistent brand system for future digital materials.

## Target Audience

IMANABU should serve several overlapping audiences.

### Parents

Parents are looking for a safe, encouraging, structured environment where their children can improve language skills and confidence.

They care about:

- Teacher quality
- Lesson structure
- Child confidence
- Progress over time
- Scheduling
- Price clarity
- Safety and trust

### Adult Learners

Adult learners may want practical language skills for work, travel, study, relocation, hobbies, or personal growth.

They care about:

- Flexible lesson options
- Clear learning outcomes
- Comfortable atmosphere
- Conversation practice
- Teacher support
- Practical usefulness

### Students

Students may need help with school subjects, exams, speaking confidence, study abroad preparation, or academic goals.

They care about:

- Progress
- Motivation
- Friendly teachers
- Exam support
- Speaking practice
- Study confidence

### Local Community

Local residents, schools, organizations, and partners should see IMANABU as reliable, professional, and community-oriented.

## Brand Identity

IMANABU should feel warm, intelligent, contemporary, and human.

Brand attributes:

- Encouraging
- Clear
- Calm
- Trustworthy
- Curious
- International
- Practical
- Friendly

Voice and tone:

- Plainspoken and confident
- Warm but not childish
- Professional but not stiff
- Supportive rather than sales-heavy
- Direct about benefits and next steps

Avoid:

- Overly academic or intimidating language
- Generic corporate slogans
- Dense blocks of explanation
- Visual clutter
- Excessive animation
- Stock-photo cliches

## Design Philosophy

The IMANABU website should be elegant, readable, and conversion-focused.

Design principles:

- Put useful information first.
- Make primary actions obvious.
- Use whitespace to create calm and confidence.
- Keep sections visually distinct without making every section a card.
- Use photography or meaningful visuals where they help visitors imagine the school experience.
- Make mobile layouts feel intentional, not compressed.
- Prefer reusable layout patterns over one-off styling.

The visual direction should feel like a modern education brand, not a generic software landing page. The design should balance Japanese local trust with international openness.

## Color Palette

The palette should be warm, clean, and optimistic without becoming overly playful.

### Primary Colors

- Deep Ink: `#1F2933`
  - Main text, strong headings, high-contrast UI elements.
- Learning Blue: `#2563EB`
  - Primary calls to action, links, selected states, important highlights.
- Warm White: `#FFFCF7`
  - Main page background and calm content areas.

### Secondary Colors

- Sky Tint: `#DBEAFE`
  - Soft backgrounds, callout areas, subtle highlights.
- Fresh Green: `#16A34A`
  - Success states, positive accents, progress-related details.
- Sun Accent: `#F59E0B`
  - Limited accent use for warmth, labels, or key visual moments.

### Neutral Colors

- Slate: `#475569`
  - Secondary text.
- Mist: `#E5E7EB`
  - Borders and dividers.
- Cloud: `#F8FAFC`
  - Alternating section backgrounds.
- White: `#FFFFFF`
  - Cards, forms, and high-clarity content surfaces.

### Color Usage Rules

- Use Learning Blue for primary actions only.
- Use Sun Accent sparingly so it remains meaningful.
- Maintain strong contrast for all text.
- Do not rely on color alone to communicate meaning.
- Avoid large purple gradients, dark-heavy palettes, and overly beige visual systems.

## Typography

Typography should be highly readable across English and future multilingual content.

Recommended font strategy:

- Headings: system sans-serif or a clean web font with strong readability.
- Body: system sans-serif for performance, legibility, and multilingual support.
- Japanese support: choose font stacks that gracefully support Japanese characters.

Suggested font stack:

```css
font-family: Inter, "Noto Sans JP", "Hiragino Sans", "Yu Gothic", system-ui, sans-serif;
```

Typography rules:

- Use clear hierarchy between page titles, section headings, body text, and captions.
- Keep body text comfortable, ideally `16px` or larger.
- Avoid negative letter spacing.
- Do not scale text directly with viewport width.
- Keep line lengths readable.
- Use bold text selectively for emphasis and scanability.

## Website Pages

The initial website should support these core pages.

### Home

Purpose: introduce IMANABU, explain the value proposition, and guide visitors toward inquiry or trial booking.

### Courses

Purpose: present available lesson types and help visitors choose the right path.

Possible course categories:

- Kids lessons
- Junior and high school support
- Adult conversation
- Business English or professional language support
- Exam preparation
- Private lessons
- Group lessons

### About

Purpose: build trust by explaining IMANABU's story, teaching philosophy, values, and team.

### Teachers

Purpose: introduce instructors and make the school feel personal and credible.

### Pricing

Purpose: provide transparent lesson options, fees, and what is included.

### FAQ

Purpose: reduce uncertainty before inquiry.

Topics:

- Trial lessons
- Lesson levels
- Scheduling
- Payment
- Materials
- Online or in-person options
- Children and adult class differences

### Contact

Purpose: make inquiry simple and low-friction.

Should include:

- Contact form
- Trial lesson call to action
- Location or service area
- Email or phone information if available
- Expected response time

### Blog or Resources

Purpose: support SEO and provide useful learning content over time.

Potential topics:

- Language learning tips
- Study habits
- Exam preparation
- Parent guides
- Local school announcements
- Cultural learning notes

## Homepage Sections

The homepage should be structured for quick understanding and conversion.

Recommended section order:

1. Hero
2. Trust signals
3. Course overview
4. Learning approach
5. Who IMANABU helps
6. Teacher or school introduction
7. Student outcomes or benefits
8. Testimonials or proof
9. Pricing preview or lesson options
10. FAQ preview
11. Final call to action

### Hero

The hero should immediately communicate:

- The school name
- The primary promise
- Who the school is for
- A clear next step

Primary CTA:

- Book a trial lesson

Secondary CTA:

- View courses

### Trust Signals

Use concise proof points such as:

- Friendly teachers
- Practical lessons
- Support for children and adults
- Local language school
- Flexible levels

### Course Overview

Show major lesson categories with short, scannable descriptions and links to detail pages.

### Learning Approach

Explain how lessons work in plain language:

- Understand the learner's goal
- Build confidence through guided practice
- Use language in realistic situations
- Review progress and adjust lessons

### Who IMANABU Helps

Use audience-based pathways:

- For kids
- For students
- For adults
- For professionals

### Teacher or School Introduction

Add human context and credibility. This section should make IMANABU feel personal, not faceless.

### Student Outcomes

Focus on benefits:

- Speak with more confidence
- Build consistent study habits
- Prepare for tests or interviews
- Enjoy learning
- Communicate in real situations

### Testimonials

Use real testimonials when available. Until then, use a layout prepared for future testimonials without inventing fake quotes.

### FAQ Preview

Include the most common pre-inquiry questions and link to the full FAQ page.

### Final CTA

End with a clear invitation to book a trial lesson or send an inquiry.

## Component Architecture

The site should use reusable Astro components for layout, content sections, and UI patterns.

Recommended component groups:

- Layout components
- Navigation components
- Section components
- Card components
- Form components
- CTA components
- Content components

### Core Components

Suggested components:

- `BaseLayout.astro`
- `Header.astro`
- `Footer.astro`
- `Seo.astro`
- `HeroSection.astro`
- `SectionHeader.astro`
- `CourseCard.astro`
- `AudienceCard.astro`
- `TeacherCard.astro`
- `TestimonialCard.astro`
- `FaqAccordion.astro`
- `ContactForm.astro`
- `CtaBand.astro`

Component rules:

- Keep components focused and reusable.
- Pass content through props or slots where appropriate.
- Avoid hard-coding page-specific content inside shared UI components.
- Prefer semantic HTML as the foundation.
- Use client-side JavaScript only when interactivity requires it.

## Folder Structure

The project should follow a clear Astro-friendly structure.

Recommended structure:

```text
src/
  components/
    layout/
    navigation/
    sections/
    cards/
    forms/
    ui/
  content/
    blog/
    courses/
  data/
  layouts/
  pages/
  styles/
  utils/
public/
  images/
  fonts/
  favicon/
```

### Folder Responsibilities

- `src/pages/`: route files and page-level composition.
- `src/layouts/`: page shell layouts.
- `src/components/`: reusable UI and content sections.
- `src/content/`: structured content collections such as blog posts or course entries.
- `src/data/`: shared structured data such as navigation, FAQs, and course summaries.
- `src/styles/`: global styles, tokens, and utility CSS.
- `src/utils/`: small helper functions.
- `public/`: static assets served directly.

## Coding Standards

The codebase should remain simple, readable, and easy to maintain.

General standards:

- Use Astro-first patterns.
- Prefer static rendering unless dynamic behavior is required.
- Use semantic HTML.
- Keep CSS organized and predictable.
- Avoid unnecessary dependencies.
- Reuse components before creating new variants.
- Keep naming descriptive and consistent.
- Do not mix unrelated refactors into feature work.

Astro standards:

- Keep frontmatter concise.
- Use layouts for shared page structure.
- Use components for repeated sections.
- Use content collections for scalable content.
- Use framework components only when Astro components are insufficient.

CSS standards:

- Define shared design tokens for colors, spacing, typography, and radii.
- Keep responsive styles intentional.
- Avoid deeply nested selectors.
- Avoid one-off magic values where a token should exist.
- Ensure UI text fits at mobile and desktop sizes.

Content standards:

- Write in plain, useful language.
- Keep headings descriptive.
- Use short paragraphs.
- Make calls to action specific.
- Avoid unsupported claims.
- Do not publish fake testimonials.

## Accessibility Requirements

The website should meet WCAG 2.2 AA expectations wherever practical.

Requirements:

- Use semantic HTML landmarks.
- Maintain sufficient color contrast.
- Provide visible focus states.
- Ensure keyboard navigation works across interactive elements.
- Use descriptive link and button text.
- Include alt text for meaningful images.
- Mark decorative images appropriately.
- Associate labels with form fields.
- Provide clear validation and error messages.
- Avoid motion that is distracting or required for understanding.
- Respect reduced-motion preferences.
- Keep heading order logical.
- Ensure tap targets are comfortable on mobile.

Forms:

- Every input must have a label.
- Required fields must be clearly identified.
- Errors must explain what needs to be fixed.
- Successful submission states must be clear.

## SEO Requirements

The website should be built with local and educational search visibility in mind.

Technical SEO:

- Unique title and meta description for every page.
- Canonical URLs.
- Semantic heading hierarchy.
- Open Graph metadata.
- Sitemap generation.
- Robots.txt.
- Clean, descriptive URLs.
- Structured data where appropriate.

Content SEO:

- Each page should target a clear search intent.
- Course pages should use language prospective students actually search for.
- Local references should be included naturally where relevant.
- Blog posts should answer specific learner or parent questions.
- Avoid keyword stuffing.

Recommended structured data:

- `LocalBusiness`
- `EducationalOrganization`
- `Course`
- `FAQPage`
- `BreadcrumbList`

## Performance Goals

The site should feel fast on mobile and desktop.

Targets:

- Lighthouse Performance score: 90 or higher.
- Lighthouse Accessibility score: 95 or higher.
- Lighthouse Best Practices score: 95 or higher.
- Lighthouse SEO score: 95 or higher.
- Largest Contentful Paint: under 2.5 seconds on typical mobile connections.
- Cumulative Layout Shift: under 0.1.
- Interaction to Next Paint: under 200 ms.

Performance rules:

- Optimize images before publishing.
- Use modern image formats when practical.
- Lazy-load non-critical images.
- Avoid unnecessary client-side JavaScript.
- Keep font loading efficient.
- Do not ship unused framework code.
- Use Astro's static output strengths.

## Deployment

The project should be deployed through GitHub and Cloudflare Pages.

### GitHub

GitHub is the source control and collaboration system.

Expected workflow:

- Main branch contains production-ready code.
- Feature work happens in focused branches when appropriate.
- Pull requests are used for meaningful changes.
- Commit messages should describe the user-facing or technical change.
- Do not commit secrets or local environment files.

### Cloudflare Pages

Cloudflare Pages is the production hosting target.

Recommended settings:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

Deployment requirements:

- Every production deployment should come from the GitHub repository.
- Preview deployments should be used for review when available.
- Environment variables should be configured in Cloudflare, not committed.
- Custom domain and HTTPS should be configured through Cloudflare.
- Redirects and headers should be managed deliberately when needed.

## Future Roadmap

The website should be designed so future improvements can be added without rebuilding the foundation.

### Phase 1: Core Website

- Homepage
- Course overview
- About page
- Contact page
- Basic SEO metadata
- Responsive design
- Cloudflare Pages deployment

### Phase 2: Trust and Conversion

- Teacher profiles
- Pricing page
- FAQ page
- Testimonials
- Trial lesson inquiry flow
- Improved local SEO

### Phase 3: Content and Growth

- Blog or learning resources
- Course detail pages
- Content collections
- Structured data expansion
- Email capture or newsletter option

### Phase 4: Multilingual Support

- Japanese and English language support
- Localized URLs
- Translated metadata
- Language switcher
- Internationalized content structure

### Phase 5: Advanced Features

- Online booking integration
- Student placement form
- Downloadable resources
- Event or workshop pages
- Analytics dashboard integration
- CRM or email marketing integration

## Decision Log

Major product, design, and technical decisions should be recorded here when they become settled.

Current decisions:

- Astro is the website framework.
- GitHub and Cloudflare Pages are the deployment path.
- `PROJECT.md` is the canonical project specification.
- The site should be static-first, accessible, fast, and easy to maintain.
