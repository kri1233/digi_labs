# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# Digilabss Landing Page — Strategy Note

The landing page was designed around an Apple-inspired principle: reduce the amount of information shown at once and let visual hierarchy, motion and spacing communicate the story.

Instead of creating many dense marketing sections, the page follows one continuous narrative: attention is scarce, Digilabss provides a growth system, the system produces measurable outcomes, and the visitor is finally given a clear path to start a conversation.

The hero leads with oversized typography and an animated performance dashboard rather than a large paragraph. The dashboard visual communicates advertising performance through revenue, ROAS, CTR and campaign activity without requiring the visitor to read a detailed explanation.

The Problem section uses oversized “ATTENTION” typography and atmospheric motion to communicate the central marketing challenge visually. Services are condensed into four growth levers: Paid Media, Creative, Conversion and Growth. Results are represented as large numerical cards, while the Process section turns the service methodology into a simple four-step timeline.

Motion is deliberately restrained. Framer Motion is used for hero entrances, scroll-triggered reveals, floating elements, hover interactions and subtle background movement. This creates multiple moments of interaction without making the page feel busy.

For performance, the design avoids depending on multiple heavy video files. Most visual storytelling is generated with CSS and lightweight Framer Motion elements, reducing network requests and media payload. Animations are also designed with transform and opacity properties where possible, while reduced-motion preferences are respected.

The lead form stores submissions in localStorage for verifiable demonstration purposes and pushes a mock analytics event into the dataLayer. The page is responsive across mobile, tablet and desktop, with a persistent but unobtrusive Book a Call CTA.