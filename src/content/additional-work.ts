import { AdditionalWorkItem } from "./types";

export const additionalWork: AdditionalWorkItem[] = [
  {
    id: 1,
    title: "Web Homepage Redesign",
    company: "Marley Spoon",
    description:
      "Turned a bloated, inconsistent order page into a clean conversion surface. Built the stakeholder case and delivered via A/B test.",
    tags: ["Web", "Conversion", "UX Design"],
    thumbnail: {
      src: "/images/additional-work/work-1.png",
      alt: "Web Homepage Redesign - Marley Spoon",
      width: 800,
      height: 600,
      background: "#F5F5F5",
    },
    overview:
      "Mid-year, the business noticed a revenue drop. One response was to bring upselling and cross-selling initiatives, already performing well on mobile, to the web platform. A dedicated task force of a PM, designer, and web engineers was assembled to make it happen.",
    sections: [
      {
        heading: "The Problem",
        body: "What started as a brief to add new features to the existing page quickly became something bigger. An audit revealed that the homepage had significant structural problems: orders were displayed in an endless scroll (up to 6 weeks on the US market), CTAs were buried, the information hierarchy was unclear, the colour scheme was outdated, and the experience was increasingly inconsistent with the app.\n\nIntegrating new features into a broken foundation would be a missed opportunity.",
      },
      {
        heading: "Building the Case",
        body: "I helped build the case for a full redesign rather than a patch. The argument rested on five pillars: analytics showing mobile converted ~20% better and had ~15% less drop-off despite being only ~40% of traffic; user research surfacing consistent pain points with the current page; a competitor benchmark; high-fidelity prototypes to make the vision tangible; and a tech debt assessment showing the outdated codebase was slowing down development and affecting loading times.\n\nThe stakeholders were convinced.",
      },
      {
        heading: "Results",
        body: "The redesign moved into implementation and was released to a limited group of users in an A/B test to measure its impact on conversion rate. The page is now live.",
      },
    ],
  },
  {
    id: 2,
    title: "Design System Color Unification",
    company: "Marley Spoon",
    description:
      "Slashed Marley Spoon's web palette from 127 to 31 colours and Dinnerly's from 114 to 27, establishing one token system across two brands.",
    tags: ["Design System", "Accessibility", "Multi-brand"],
    thumbnail: {
      src: "/images/additional-work/work-2.png",
      alt: "Design System Color Unification - Marley Spoon",
      width: 800,
      height: 600,
      background: "#F5F5F5",
    },
    overview:
      "Marley Spoon and Dinnerly share the same underlying product, but their web and app experiences had drifted apart visually. With 127 colours in use on Marley Spoon's web platform alone, maintaining consistency across two brands, multiple platforms, and a team of designers had become increasingly difficult.",
    sections: [
      {
        heading: "The Challenge",
        body: "Two brands, multiple platforms, and a colour system that had grown organically rather than intentionally. The gap between web and mobile meant new features often looked inconsistent across surfaces, and developers worked from hardcoded HEX values rather than a shared token system.",
      },
      {
        heading: "The Solution",
        body: "I designed a unified colour palette for web that aligned with the existing mobile system. New grey tones were introduced to both platforms for better balance, contrast, and accessibility. I updated the Figma library for designers and worked with the development team to introduce CSS variables, replacing hardcoded HEX and RGBA values with a structured token system.",
      },
      {
        heading: "Results",
        body: "Marley Spoon web reduced from 127 to 31 colours. Dinnerly web reduced from 114 to 27 colours. Designers and developers now work from a single source of truth across web and app.",
      },
    ],
  },
  {
    id: 3,
    title: "Flexible Order Frequency",
    company: "Marley Spoon",
    description:
      "Gave subscribers a middle ground between their schedule and cancellation: 2% chose to reduce frequency rather than leave.",
    tags: ["Retention", "Subscriptions", "Churn Reduction"],
    thumbnail: {
      src: "/images/additional-work/work-3.png",
      alt: "Flexible Order Frequency - Marley Spoon",
      width: 800,
      height: 600,
      background: "#F5F5F5",
    },
    overview:
      "Reducing churn was one of my team's key priorities in the first half of 2023. Analysis showed that 18% of cancellations were driven by frequency: users didn't want to cancel outright, they just wanted more flexibility. There was no middle ground between the current schedule and cancelling entirely.",
    sections: [
      {
        heading: "The Problem",
        body: "The churn flow offered users no options between their current delivery frequency and full cancellation. 18% of churning users cited frequency as their primary reason, a significant share that was addressable through design rather than pricing or product changes.",
      },
      {
        heading: "The Design",
        body: "I introduced a Flexible Order Frequency option within the churn flow on both the app and desktop. At the moment a user indicated they wanted to cancel, they were offered the ability to reduce their delivery frequency instead, keeping the relationship alive with less friction than a full re-signup later.",
      },
      {
        heading: "Results",
        body: "2% of users who would have cancelled chose to reduce their frequency instead, staying with Marley Spoon.",
      },
    ],
  },
  {
    id: 4,
    title: "Insurance Manager Dashboard",
    company: "Friendsurance / Deutsche Bank",
    description:
      "Redesigned the Deutsche Bank insurance dashboard with clearer hierarchy and social proof, driving higher Add Insurance conversions.",
    tags: ["Dashboard", "Fintech", "B2B", "Deutsche Bank"],
    thumbnail: {
      src: "/images/additional-work/work-4.png",
      alt: "Insurance Manager Dashboard - Friendsurance / Deutsche Bank",
      width: 800,
      height: 600,
      background: "#F5F5F5",
    },
    overview:
      "Deutsche Bank VersicherungsManager is an insurance management tool developed by Friendsurance for Deutsche Bank customers. The core challenge was raising the number of insurance contracts being added: users weren't taking action, and the dashboard wasn't making it easy for them.",
    sections: [
      {
        heading: "Design Sprint",
        body: "I participated in a design sprint focused on making the Add Insurance action more accessible. My key contribution, adding a persistent Add Insurance CTA to the main navigation making it reachable from anywhere in the product, was selected as the development action point at the end of the sprint.",
      },
      {
        heading: "Dashboard Redesign",
        body: "I redesigned the full dashboard with a \"less is more\" approach: clearer visual hierarchy, a more prominent Add Insurance action, social proof elements (earlier user testing had shown these were an important decision factor), and a reduction in secondary elements that added cognitive load without driving action.",
      },
      {
        heading: "Results",
        body: "Higher conversions on the Add Insurance action and increased user engagement across the dashboard.",
      },
    ],
  },
];
