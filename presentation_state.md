# Finance Club - Study on Inflation (Presentation State)

## Project Overview
This project is an interactive, premium "Keynote-style" web presentation built with Next.js, Tailwind CSS, Framer Motion, and GSAP. It has been transformed from a general Finance Club presentation into a detailed "Study on Inflation".

## Global Visual Identity
- **Theme:** Premium light theme (white, off-white, soft grays) with institutional accents (soft emerald, blue, gold).
- **Navigation:** Floating side navigation with snap-scrolling (`snap-y snap-mandatory`) for slide-by-slide transitions.
- **Global Background:** `<LivingBackground />` active across the entire app, displaying slow-moving candlestick charts and TradingView-style grids.

## Slide Structure & Components

### 1. Title Slide (`SectionPortfolio.tsx`)
- **Headline:** Finance Club Presents: Study On Inflation
- **Visuals:** Custom dashboard widget simulating the Consumer Price Index (CPI) and a "Purchasing Power" degradation chart (Value of $100).

### 2. Causes of Inflation (`SectionAnalytics.tsx`)
- **Content:** Money Supply, Government Policies, Exchange Rates, Rising Wages.
- **Background/Effects:** Transparent background with an animated dashed SVG line graph. Glassmorphism cards.
- **Image:** Hyper-realistic shot of a central bank currency printing press (`inflation_causes.png`).

### 3. Effects of Inflation (`SectionStrategy.tsx`)
- **Content:** Depreciation of Money, Increased Bank Rates, High Living Costs, Income Inequality, Drop in Exports, Less Investment.
- **Background/Effects:** Transparent background with slow-rotating orbital dashed rings.
- **Image:** Hyper-realistic 3D brass scale balancing gold and paper currency (`inflation_effects.png`).

### 4. Theory (`SectionLiteracy.tsx`)
- **Content:** The Quantity Theory of Money (Explanation & Quotes).
- **Background/Effects:** Transparent background with animated equalizer bars rising and falling.
- **Image:** Hyper-realistic bank vault door glowing with golden light (`quantity_theory.png`).

### 5. Case Study (`SectionActivities.tsx`)
- **Content:** The Zimbabwe Hyperinflation Case Study (2007-2009). Peak inflation at 79.6 Billion %.
- **Background/Effects:** **Exception to the transparent rule**. Uses the dramatic, moody red-tinted 100 Trillion dollar banknote image as a full-screen dimmed background (`hyperinflation_zimbabwe.png`).

### 6. Countering Inflation (`SectionAchievements.tsx`)
- **Content:** Monetary Policy, Fiscal Policy, Supply-Side Fixes.
- **Background/Effects:** Transparent background with massive concentric rotating SVG rings.
- **Image:** Hyper-realistic mechanical "Interest Rates" dial (`inflation_measures.png`).

### 7. Join & Acknowledgements (`SectionJoin.tsx`)
- **Content:** Roster of 22 Finance Club members and special thanks to the Mentor and Club Coordinator.
- **Background/Effects:** Transparent background with soft, floating emerald and blue glowing orbs.

## Technologies Used
- **Next.js (App Router)** for structure.
- **Tailwind CSS** for responsive styling and glassmorphic utilities.
- **GSAP & ScrollTrigger** for slide snapping, scroll-based entry animations.
- **Framer Motion** for infinite background ambient animations.
- **Lucide React** for professional SVG iconography.

## Next Steps / Notes
- The presentation is currently functionally complete and fully responsive. 
- All hyper-realistic images are stored in `public/images/`.
- Unused components (`HeroSection.tsx`, `PowerOfClubs.tsx`, `MarketInsights.tsx`, `StrategyAndJoin.tsx`) remain in the `src/components` folder but are safely disconnected from the main `page.tsx` rendering tree.
