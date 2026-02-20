# Chuk's Kitchen

A food ordering web application bringing authentic Nigerian home cooking to your doorstep. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Tech Stack

| Technology   | Version | Purpose                                     |
| ------------ | ------- | ------------------------------------------- |
| Next.js      | 16.1.6  | React framework with App Router             |
| React        | 19.2.3  | UI library                                  |
| Tailwind CSS | 4.x     | Utility-first CSS (v4 with `@theme inline`) |
| TypeScript   | 5.x     | Type safety                                 |
| react-icons  | 5.5.0   | Icon library (Font Awesome 6 set)           |

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
chuks-kitchen/
├── app/
│   ├── globals.css          # Global styles, Tailwind theme, custom breakpoints
│   ├── layout.tsx           # Root layout with Inter, Jost, Island Moments & Poppins fonts
│   ├── page.tsx             # Home page
│   ├── explore/
│   │   └── page.tsx         # Explore / menu page
│   ├── food/
│   │   └── [id]/
│   │       └── page.tsx     # Food detail page (dynamic route)
│   ├── onboarding/
│   │   └── page.tsx         # Landing / onboarding page
│   └── auth/
│       └── page.tsx         # Login & create account page
├── components/
│   ├── Header.tsx           # Responsive header with mobile slide-out nav & optional bg prop
│   ├── Footer.tsx           # Global footer with back-to-top button
│   ├── MenuCategories.tsx   # Interactive category sidebar (client component)
│   └── FoodDetailsForm.tsx  # Food detail form with protein/sides/instructions (client component)
├── data.js                  # Static data arrays for menus & categories
└── public/                  # Images, icons, and static assets
```

## Pages Built

### Home (`/`)

The main landing page showcasing the restaurant's offerings. It features:

- **Full-width hero** — background image with dark overlay, heading, subtitle, and "Discover what's new" CTA
- **Floating search bar** — positioned overlapping the hero bottom with a search icon and styled placeholder
- **Popular Categories** — responsive grid of 6 category cards (3 hidden on mobile) with food images and labels
- **Chef's Specials** — 6 dish cards with images, descriptions, prices, and "Add to Cart" buttons; each card links to its food detail page (`/food/[id]`)
- **CTA banner** — full-width promotional section with background image, heading, and call-to-action
- **Responsive design** — scales across mobile, tablet, laptop, and 1440px desktop with per-breakpoint sizing

### Explore (`/explore`)

The menu exploration page with category filtering and food cards. It features:

- **Hero section** — full-width background image with dark overlay, restaurant name, and tagline; height and text scale across breakpoints
- **Menu Categories** — interactive sidebar with 7 clickable categories; active category highlighted with orange background and left accent bar; clicking a category smooth-scrolls to its section
- **Popular section** — responsive 3-column grid of food cards with images, descriptions, prices, and add-to-cart buttons; each card links to its food detail page (`/food/[id]`)
- **Jollof Rice & Entrees** — 3-column grid of entree cards, each linking to its detail page
- **Swallow & Soups** — 3-column grid of soup/swallow cards, each linking to its detail page
- **Responsive grid** — switches from 3-column to single-column on mobile with horizontal card layout

### Food Detail (`/food/[id]`)

A dynamic detail page for each food item. It features:

- **Split layout** — left full-height food image (661px) + right detail panel with white card
- **White header** — uses the Header component with `bg="white"` prop
- **"← Back to Menu" link** — navigates back to the explore page

- **Dynamic routing** — looks up food by ID across all data arrays (`chefsSpecials`, `explorePopular`, `entrees`, `swallow`)
- **404 fallback** — shows "Food Not Found" with a link back to the menu

### Onboarding (`/onboarding`)

The landing page introducing users to Chuk's Kitchen. It features:

- **Hero split layout** — left image panel + right content panel on desktop/laptop
- **Mobile-first responsive design** — adapts across mobile, tablet, laptop, and 1440px desktop
- **Feature highlights** — "Freshly Prepared", "Support Local Business", "Fast & Reliable Delivery" with icon cards
- **Dual CTA buttons** — "Start Your Order" (primary) and "Learn More About Us" (secondary)
- **Interactive buttons** — hover fills, active press scale, focus-visible accessibility rings
- **Global footer** — 4-column layout with links, contact info, social links, and a scroll-to-top button

### Auth (`/auth`)

Login and account creation page with client-side form toggling. It features:

- **Split layout** — left branded image panel (orange overlay with tagline) + right form panel on desktop/laptop; image hidden on tablet and below
- **Login form** — email and password fields with inline icons, "Forgot Password" link, and "Continue" CTA
- **Create Account form** — email, phone number, password, confirm password fields with Terms & Conditions checkbox
- **Social login** — "Continue with Google" and "Continue with Facebook" buttons on both forms
- **Form toggle** — "Create an account" / "Sign in" links switch between login and signup without a page reload
- **Responsive design** — forms center and fill the viewport on mobile/tablet with adjusted padding and full-width buttons

## Custom Breakpoints

The project uses custom Tailwind v4 breakpoints defined in `globals.css`:

| Breakpoint | Width  | Use case                    |
| ---------- | ------ | --------------------------- |
| `xs`       | 320px  | Small phones                |
| `sm`       | 375px  | Standard phones             |
| `bmd`      | 640px  | Large phones / small tablet |
| `md`       | 768px  | Tablets                     |
| `lg`       | 1024px | Laptops                     |
| `xl`       | 1440px | Desktop (target design)     |

## Design Adjustments

Beyond the original Figma design, the following adjustments were made during development:

### Global Styles

- **Back to top button** — the button scrolls to the top of the page.
- **Footer** — the footer is now always visible and has a 1-column layout with links, contact info, social links, and a scroll-to-top button on mobile screens.
  - **Always visible** — footer displays on all screen sizes (removed mobile `hidden`).

### Onboarding Page

- **Mobile hero image** — moved the hero image below the Logo and Sign in button. This promotes immediate recognition of the site's value proposition.
- **Support Local Business icon** — the second feature ("Support Local Business") uses a distinct `FaCartShopping` icon instead of the generic fork-knife icon, better communicating the feature's purpose.
- **In-page footer removed** — the copyright / Privacy Policy / Terms of Service section originally inside the hero panel was removed; these links were relocated to the global footer.
- **Hover States** — buttons and links now have hover states.

### Home Page

- **Card hover effects** — lift, shadow, and image zoom micro-animations on both Popular Categories and Chef's Specials cards
- **Card linking** — Chef's Specials cards are wrapped with `Link` to navigate to `/food/[id]`

### Auth Page

- **Hover States** — buttons and links now have hover states.

### Explore Page

- **Menu Categories** — interactive client component with click-to-highlight category selection
- **Card hover effects** — lift, shadow, and image zoom micro-animations added for a modern feel
- **Card linking** — all food cards (Popular, Entrees, Swallow) are wrapped with `Link` to navigate to `/food/[id]`

### Food Detail Page

- **FoodDetailsForm** — client component managing protein selection (radio), extra sides (checkboxes), and special instructions (textarea)
- **Back to Menu link** — replaces close button with a styled `← Back to Menu` link to `/explore`

## Fonts

| Font           | Variable                | Usage                        |
| -------------- | ----------------------- | ---------------------------- |
| Inter          | `--font-inter`          | Primary body font            |
| Island Moments | `--font-island-moments` | Brand name / logo            |
| Jost           | `--font-jost`           | Footer headings, description |
| Poppins        | `--font-poppins`        | Footer links, copyright      |
