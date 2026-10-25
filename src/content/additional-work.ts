import { AdditionalWorkItem } from "./types";

export const additionalWork: AdditionalWorkItem[] = [
  {
    id: 6,
    title: "Creator Program",
    company: "Atolls (Pepper, mydealz, hotukdeals)",
    description:
      "Gave the community's top posters a way to earn ad revenue from their deals, live today across iOS, Android and web.",
    tags: ["Community", "Monetisation", "Mobile", "Web"],
    thumbnail: {
      src: "/images/additional-work/work-6.png",
      alt: "Creator Program screens - Atolls",
      width: 800,
      height: 600,
      background: "#F5F5F5",
    },
    overview:
      "Atolls runs some of the largest deal communities in Europe, including Pepper, mydealz in Germany and hotukdeals in the UK, and the best deals come from a small group of dedicated posters. A points and levels programme (Silver, Gold, Platinum) already rewarded them for posting and referrals, and it worked well. In user interviews, though, top contributors kept saying the same thing: they spend real time finding and writing up deals, and they wanted that effort recognised in a way that mattered. The Creator Program was the next step: keep the top contributors posting great deals by letting them share in the ad revenue their deal pages generate. The success metric was a 3% increase in contributed deals.",
    sections: [
      {
        heading: "My Role",
        body: "I joined the Hyperion team, which owned the levels programme, and designed the Creator Program layer on top of it, working with a PM, a data analyst, and iOS, Android and web engineers. I designed how members discover the programme from Points & Rewards, the Become a Creator page explaining how it works, who can apply and how much they can earn, the application, its status messages in the inbox, the approved and rejected paths, the warning when a creator is about to lose their status, and the Creator label on their profile.",
      },
      {
        heading: "The Legal Constraint",
        body: "The long-term idea was that anyone could become a creator. Tax law made that impossible at first: in Germany, earning this kind of revenue meant creators had to be registered as a business with a business tax number, and similar rules applied in other markets, like the UK. So the first version was open only to members with a registered business, and the application had to collect that business information up front. It narrowed the audience considerably, but it let us launch legally and learn before widening access.",
      },
      {
        heading: "Starting Small",
        body: "Paying people is high-stakes, so the first version was deliberately manual. Only established posters with a history of good deals were accepted: Platinum contributors who had been members for at least six months and followed the community guidelines. Applications were reviewed by hand, and payouts were handled manually at first, with automation planned once the programme proved itself.\n\nStatus also had to be earned continuously. Points expire after twelve months, so I designed a warning that tells creators they are about to lose their level and Creator status, and what to do to keep it. I explored a fixed message and a countdown showing exactly how many days are left.",
      },
      {
        heading: "Making Money Feel Rewarding",
        body: "Payouts, tax numbers and eligibility rules can make a feature feel like paperwork. To keep it feeling like a reward, I carried the custom Platinum app icon, already one of the perks of the top level, into the Creator entry points and submission cards on iOS, Android and web, so the programme read as an exclusive next step rather than a form. I reviewed the concepts in design critiques and with product and design leadership, and iterated with the engineers before handover.",
      },
      {
        heading: "Outcome",
        body: "The programme was released gradually, starting with 0.5% of members in Germany and the UK, with qualitative sessions planned alongside to see how creators used it before a wider rollout. It launched across iOS, Android and web, and it is still live across Atolls' communities, including hotukdeals.",
      },
    ],
  },
  {
    id: 5,
    title: "Native Referral Flow",
    company: "Marley Spoon",
    description:
      "Brought referrals into the iOS and Android apps: over 70% of all referrals moved to mobile, with engagement about 7.5x higher than desktop.",
    tags: ["Mobile", "Growth", "Referral"],
    thumbnail: {
      src: "/images/projects/project-4/thumb.png",
      alt: "Native Referral Flow - Marley Spoon",
      width: 1200,
      height: 800,
      background: "#F5F5F5",
    },
    overview:
      "Marley Spoon's most engaged customers lived in the app, but the referral programme only existed on desktop and in email. Sharing meant leaving the app, opening a browser and finding a separate page.",
    sections: [
      {
        heading: "The Design",
        body: "I designed a native flow built around one promise: invite three friends, get a free box. Entry points sat at the moments of highest engagement (after delivery, after checkout, and in account settings) and native share sheets handled sending. A sent-invites tracker showed each invite as Redeemed, Pending or Expired, so users could see how close they were to their reward. The app was designed on an iOS baseline, with Material guidelines guiding Android adaptations.",
      },
      {
        heading: "Results",
        body: "Within the first month the feature reached almost 90% of app users. Over 70% of all referrals came from mobile, engagement ran about 7.5x higher than desktop, and native referrals converted at almost 9%.",
      },
    ],
  },
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
        body: "I helped build the case for a full redesign rather than a patch. The argument rested on five pillars: analytics showing the mobile homepage converted better and lost fewer users, even though mobile was the smaller share of traffic; user research surfacing consistent pain points with the current page; a competitor benchmark; high-fidelity prototypes to make the vision tangible; and a tech debt assessment showing the outdated codebase was slowing down development and affecting loading times.\n\nThe stakeholders were convinced.",
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
        body: "Two brands, multiple platforms, and a colour system that had grown organically rather than intentionally. Every screen I delivered came in 12 versions: Marley Spoon and Dinnerly, each across mobile app, tablet portrait and landscape, desktop, web tablet and web app, all built on an 8px grid with a shared component library. The gap between web and mobile meant new features often looked inconsistent across surfaces, and developers worked from hardcoded HEX values rather than a shared token system.",
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
    title: "Skip & Churn Deflection",
    company: "Marley Spoon",
    description:
      "Found out why subscribers skipped and cancelled, then gave them a middle ground: 2% of users about to cancel reduced their order frequency instead.",
    tags: ["Retention", "Subscriptions", "Research", "Mobile", "Web"],
    thumbnail: {
      src: "/images/additional-work/work-3.png",
      alt: "Skip and Churn Deflection - Marley Spoon",
      width: 800,
      height: 600,
      background: "#F5F5F5",
    },
    overview:
      "Meal kits arrive every week unless a customer skips a delivery or cancels. In early 2023 skip rates rose noticeably, and reducing skips and churn became my team's top priority for the first half of the year. The goal was to bring skips down without pushing more people into cancelling, since the two rates move together.",
    sections: [
      {
        heading: "Understanding Why",
        body: "We didn't know why people skipped, so we asked. I designed a short skip-reasons survey for app and web, with automatic, animated transitions so answering took seconds. We A/B tested it on 10% of users to make sure it didn't increase skips or churn by itself, then expanded it to 50% in each market: enough for reliable data without asking everyone.\n\nBudget was the most common reason, and order flexibility came second. Frequency also showed up in cancellations, where 18% of churn was linked to it. Many people didn't want to leave; they just didn't want a box every week.",
      },
      {
        heading: "Choosing What to Build",
        body: "In a workshop with the team we turned the findings into options (fixed-length pauses, incentivised order streaks, rescheduling deliveries and flexible frequency) and weighed each by expected value and effort. Flexible frequency, letting customers switch to a box every 2, 3 or 4 weeks, answered a real need and protected revenue better than a pause, so it went first.\n\nI benchmarked beyond meal kits, looking at how other subscription services handle frequency, agreed acceptance criteria with the PM, and explored several directions from paper wireframes onwards, refining them in design critiques. Icons made the frequency options quick to understand.",
      },
      {
        heading: "Edge Cases and Delivery",
        body: "Before development I walked the engineers through the prototype and screens for every platform and breakpoint, and we settled the remaining edge cases together. I stayed close during the build through stand-ups and Jira, and ran design QA before release to catch any gaps between design and implementation.\n\nThe same work fed a new Manage Account page that gathered every option in one place: change frequency, pause, contact customer support, or cancel and delete the account. I also designed a ribbon banner showing incentives attached to an upcoming order, and a rescheduling feature for more control over delivery times.",
      },
      {
        heading: "Results",
        body: "Flexible frequency launched behind a feature flag to 10% of users, placed inside the cancellation flow where it mattered most. 2% of users who were about to cancel chose to reduce their frequency and stay instead. Because it worked, we rolled it out to everyone and added an entry point in account settings, where it remains part of the product.",
      },
    ],
  },
  {
    id: 4,
    title: "Insurance Manager Dashboard",
    company: "Friendsurance / Deutsche Bank",
    description:
      "Redesigned the Deutsche Bank insurance dashboard for higher Add Insurance conversion, and reshaped the insurance needs analysis results around a clear score.",
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
      {
        heading: "Insurance Needs Analysis Results",
        body: "The insurance manager also offered a needs analysis: a survey that tells users which insurance they should have. Its results came as one long feed sorted by internal logic, which felt overwhelming and gave people little reason to act.\n\nI redesigned the results page and the detail pages for each insurance category. Results were split into two groups: Must-Haves, a fixed standard recommended by the company's experts, and Other Insurances, personalised from the user's answers. A Must-Have Score rated the user's current coverage in a familiar, easy-to-read format and gave them a clear way to improve it by adding what was missing.\n\nOn the detail pages I cut text to a minimum, since users were already deep in a complex flow, and focused each page on one next step: add an existing contract, get a new insurance, or contact an advisor. These actions appeared as cards with matching icons, and the layout switched between two and three columns depending on how many applied to that user's result. Social proof stayed, because earlier testing showed it mattered to these users.",
      },
      {
        heading: "What Happened",
        body: "The redesign was finished and handed over, but it never shipped: Deutsche Bank ended its partnership with Friendsurance before release. It remains a good example of how I approach complex financial products: reduce the noise, give people one clear measure of where they stand, and make the next step obvious.",
      },
    ],
  },
];
