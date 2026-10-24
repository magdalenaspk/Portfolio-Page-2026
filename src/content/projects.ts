import { Project } from "./types";

export const selectedProjects: Project[] = [
  {
    id: 7,
    slug: "login-redesign",
    status: "published",
    title: "Login Redesign",
    subtitle: "Converting Intent into Identity",
    description:
      "Rebuilt AutoScout24's login around a clear value proposition and social-first hierarchy: the first step of a Club vision for logged-in users.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "Web, mWeb",
    tags: ["Growth", "Login & Registration", "Stakeholder Management", "Product Vision"],
    thumbnail: {
      src: "/images/projects/project-7/thumb.png",
      alt: "Login Redesign - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-7/hero.png",
      alt: "Redesigned AutoScout24 full-page login with social sign-in options",
      width: 1920,
      height: 840,
    },
    overview:
      "Most people use AutoScout24 like a one-off marketplace: they search, browse, and leave without ever logging in. Only 5.4% of users were logged in, and the company set an OKR to lift that by 50%, to 8.1%, by the end of 2026. The login screen is the exact moment where intent turns into identity, yet ours was doing little to earn that step. Fixing it was the foundation for everything else.",
    sections: [
      {
        heading: "Why Login Matters",
        body: "Logged-in users behave very differently. On web, their enquiry conversion rate was 75% higher than logged-out users, they viewed 40% more vehicle detail pages per week, and they had 33% more sessions coming from CRM channels. Logged-in users meant more personalisation, more return visits, and better leads for dealers.\n\nSo why weren't people registering? They saw no clear benefit, they used the platform infrequently, they had privacy concerns, and the site worked perfectly well without an account.\n\nA login behaviour deep dive with our Buyer Analytics team sharpened the picture. Most logins happened in a user's very first session, and logging in tended to mark a phase where the journey was already intensifying. At the same time, users who delayed logging in still browsed and made enquiries before they did. That ruled out an aggressive login wall. The job was to make the value of logging in obvious at the moment people were ready for it.",
      },
      {
        heading: "Fixing the Basics",
        body: "Earlier initiatives, including a new app onboarding and gating price history behind login, had already moved the numbers. But the login screen itself still looked outdated next to the rest of the product, and it broke established best practice.\n\nI audited it against guidance from Nielsen Norman Group and Baymard Institute, which comes down to four standards: reduce cognitive load at the point of entry; make social login prominent and place it before the email form; explain what users get by logging in; and give the screen one clear primary action. The old design failed on all four. Its value proposition used non-library styling, the hierarchy was email-first, social options sat below the form where they were easily ignored, and the modal was narrow even though desktop had plenty of room.\n\nThe redesign addressed each one. A clear \"why log in\" message now leads the screen: track price drops on cars you like, save and revisit favourites, check if a price is fair. Google, Apple, and Facebook sign-in sit front and centre, with email as the second option. The modal is wider, so long German words no longer break across lines. I designed it across three contexts: a full page, a popup, and mobile web.",
        image: {
          src: "/images/projects/project-7/detail-1.png",
          alt: "Legacy login modal compared with the redesigned login modal",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "The Dealer Button",
        body: "The legacy design placed a full-width dealer login button at the very top of the screen, directly below the value proposition. It was the first thing every user saw. But the overwhelming majority of our users are private buyers, not dealers. The button created a false fork: buyers had to consciously skip past something irrelevant before they could begin.\n\nMy redesign moved the dealer entry point to the bottom as a text link. Market managers and dealer-side stakeholders pushed back, which was understandable: dealers are a key business segment, and nobody wanted to make their path harder.\n\nAfter several rounds of discussion, we landed on a secondary outlined button at the bottom of the screen. Dealers are professionals who know they have a separate account and actively look for their entry point, so the button gives them a clear affordance without competing with the primary journey. We agreed to monitor dealer login rates closely and act if they dipped, and to later test the text link variant to see whether the button is needed at all.",
        image: {
          src: "/images/projects/project-7/detail-2.png",
          alt: "Dealer entry point as a text link compared with a secondary outlined button",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "The Bigger Picture: AutoScout24 Club",
        body: "The login redesign was step one of a broader vision I developed for logged-in users: the AutoScout24 Club. Automotive culture fits a club model naturally. Cars create identity and long-term relationships, and people enjoy belonging to brand ecosystems. Members are higher-intent users, easier to convert into leads, and their activity generates signals that improve the marketplace for everyone.\n\nThe vision reframes logging in as joining something, with clear membership benefits grouped into three pillars. Insights: price history, price evaluation scores, listing popularity, and a free basic vehicle history report. Exclusive access: early access to new listings, unlimited favourites and search updates, and price estimates for your own car. Trust and status: a verified buyer profile and exclusive content.\n\nI prototyped the Club landing page in Figma Make and presented the vision alongside the login designs, giving the team a clear direction for what logging in could become.",
        image: {
          src: "/images/projects/project-7/detail-3.png",
          alt: "AutoScout24 Club landing page concept",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Rollout & Next Steps",
        body: "The redesign launched first in Austria, with two weeks of monitoring login conversion, dealer login rates, and drop-off to set a baseline before rolling out to further markets.\n\nThe roadmap from there is about compounding small wins: testing icon-only social buttons, creating contextual login variants with purpose-specific messaging, replacing the mandatory click captcha with an invisible one, and introducing passwordless one-time-code login to lower the barrier to signing up even further.",
      },
    ],
  },
  {
    id: 6,
    slug: "app-onboarding-redesign",
    status: "published",
    title: "App Onboarding Redesign",
    subtitle: "Reframing Friction as Value",
    description:
      "Rebuilt the app launch sequence around value-driven video and a scalable structure, delivering +40% logged-in users and +20% push opt-in.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android",
    tags: ["Onboarding", "Growth", "Mobile", "A/B Testing"],
    thumbnail: {
      src: "/images/projects/project-6/thumb.png",
      alt: "App Onboarding Redesign - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-6/hero.png",
      alt: "App Onboarding Redesign hero - AutoScout24",
      width: 1920,
      height: 1080,
    },
    overview:
      "The AutoScout24 app's launch sequence had grown organically over time, with new screens bolted on whenever a need arose, none designed to work together. The result was a fragmented first impression that wasted the most valuable moment in the user journey: the very first open. Growing the registered user base was a core OKR, and the launch sequence was the most natural place to start.",
    sections: [
      {
        heading: "The Problem",
        body: "The existing flow felt patchy and unintentional. There was no unified structure, no clear value proposition at the moment of launch, and no early prompt for users to register or log in. Users who opened the app for the first time slipped straight into an anonymous session, and staying logged-out became the path of least resistance.\n\nThe data told a different story about what we stood to gain: logged-in users perform significantly better on the actions that matter most, including favouriting vehicles, contacting sellers, and returning to previously viewed listings. More registered users meant more of those behaviours, at scale. We just hadn't given them a reason to register at the right moment.",
        image: {
          src: "/images/projects/project-6/detail-1.png",
          alt: "Original app launch sequence - fragmented flow",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Redesigning the First Impression",
        body: "The goal was specific: get users to register or log in, and to opt in to push notifications. Both actions had outsized downstream impact on engagement and retention, but neither was being asked for at the right moment. I designed a new launch sequence built around four principles: a unified flow to replace the patchwork experience; value-driven communication at every step (telling users why we're asking for something before asking); an early registration moment built into the sequence itself; and a scalable structure that could absorb future steps without breaking the experience.\n\nBefore landing on video, two other directions were explored. The first used static full-bleed images with text below: visually clean, but unworkable at scale. Maintaining readable contrast across light and dark mode, combined with varying text lengths across AutoScout24's markets and languages, made it too fragile. The second direction explicitly showcased app features: screens demonstrating how to favourite a vehicle, save a search, and so on. It solved the contrast problem but felt dated. Modern onboarding earns trust by showing the product in context, not by announcing what it contains before a user has touched it.\n\nVideo solved the scalability problem and added something neither static approach could: an emotional moment at the very start of the experience. A scenic drive with a car on an open road was a deliberate choice. The goal was not to describe the app but to get users excited about the road ahead, to make them feel the possibility before asking anything of them. The registration prompt and push opt-in followed from that foundation, each paired with a clear reason to say yes.",
        image: {
          src: "/images/projects/project-6/detail-2.png",
          alt: "New app launch sequence - unified flow with value-driven prompts",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Results",
        body: "We launched on iOS in Q1 2026 and ran an A/B test against the existing flow. The results validated the core hypothesis: the problem was never that users didn't want to register: we'd never given them a compelling enough reason to, at the right moment.\n\n+40% increase in logged-in user rate. +20% increase in push notification opt-in. Sessions saw a small negative impact, an expected and acceptable trade-off for adding steps at the start of the journey. Detail page views and enquiries, the metrics that matter most, were unaffected.\n\nThe Android rollout followed, with a tailored variation planned for AutoTrader Canada, AutoScout24's sister brand, adapting the sequence to a new market while carrying the core design principles forward.",
      },
    ],
  },
  {
    id: 2,
    slug: "homescreen-recommendations",
    status: "published",
    title: "Homescreen Recommendations",
    subtitle: "Personalizing the Front Door",
    description:
      "A disciplined sequence of A/B experiments turned a generic homepage into a personalised entry point, achieving ~48% more recommendation clicks.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android, Web",
    tags: ["Personalization", "A/B Testing", "UX Strategy", "Data-informed"],
    thumbnail: {
      src: "/images/projects/project-2/thumb.png",
      alt: "Homescreen Recommendations - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-2/hero.png",
      alt: "Homescreen Recommendations hero - AutoScout24",
      width: 1920,
      height: 1080,
    },
    overview:
      "AutoScout24's homepage felt more like a blog than a marketplace: generic, undifferentiated, and disconnected from what individual users actually wanted. We were also behind: a personalized recommender is standard on competing marketplaces. We had the algorithm infrastructure ready to generate multiple recommendation types based on recently viewed vehicles, saved listings, search history, and price drops, but no homepage experience making use of it. With 43% of users saying they couldn't find what they were looking for, the opportunity was clear.",
    sections: [
      {
        heading: "Incremental Experimentation",
        body: "We approached this through a disciplined sequence of A/B experiments, each building on the last. First, we removed noise: playlists and redundant cards that cluttered the page without adding value. Then we expanded the recommendation pool from 15 to 50 vehicles and decluttered the recommendation cards themselves, simplifying the information displayed so more recommendations fit in the viewport at once.\n\nEach change was validated independently. Expanding the pool drove a ~48% jump in recommendation clicks. Simplifying the card design added another ~17%.",
        image: {
          src: "/images/projects/project-2/detail-4.png",
          alt: "Recommendation card before and after declutter - simplified layout showing model, price, and key attributes",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "A Calculated Pivot",
        body: "Encouraged by early results, we pushed further and tested a horizontal scroll layout with categorized recommendation types. The design held up well in user testing: participants found the categorization intuitive and navigation natural. But when we ran the live A/B test, the data told a different story: a ~21% drop in recommendation clicks. User testing and real-world behavior diverged.\n\nRather than forcing the pattern, we treated this as a signal. We pivoted to a tabbed vertical layout that preserved the recommendation categories without the horizontal scroll friction.",
        image: {
          src: "/images/projects/project-2/detail-2.png",
          alt: "Horizontal scroll vs tabbed vertical layout variants",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Results",
        body: "The incremental approach paid off. The ~48% increase in recommendation clicks came from a sequence of validated changes, not a single big redesign.\n\nAnalyzing engagement across recommendation types revealed a clear ranking: 'Based on your last view' and 'Reduced offer' drove the highest click rates, followed closely by 'Based on your last search'. This directly informed how we prioritized and ordered recommendation types in the final experience.\n\nThe project also reinforced a key lesson: user testing validates comprehension and usability, but it doesn't always predict live A/B performance. Both signals matter, and they can point in different directions.",
        image: {
          src: "/images/projects/project-2/detail-3.png",
          alt: "Final recommendation layout and results",
          width: 1200,
          height: 800,
        },
      },
    ],
  },
  {
    id: 1,
    slug: "favourites-redesign",
    status: "published",
    title: "Favourites Redesign",
    subtitle: "Turning a Dead End Into a Decision Hub",
    description:
      "Turned the most-visited screen on AutoScout24 from a dead end into a conversion surface, delivering ~5.5% more enquiries.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android, Web",
    tags: ["UX Design", "A/B Testing", "User Research", "Cross-platform"],
    thumbnail: {
      src: "/images/projects/project-1/thumb.png",
      alt: "Favourites Redesign - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-1/hero.png",
      alt: "Favourites Redesign hero - AutoScout24",
      width: 1920,
      height: 1080,
    },
    overview:
      "Favourites was one of AutoScout24's top five most-visited screens. Users returned to it regularly as they worked through the car-buying journey, treating it as a personal shortlist: a place to gather vehicles they were seriously considering, track prices, and eventually decide who to contact. Despite that high intent, the screen had not been redesigned in years and gave users almost no tools to act.",
    sections: [
      {
        heading: "The Challenge",
        body: "The existing experience was a passive list with no hierarchy and no clear path forward. There was no way to understand at a glance whether a price was competitive, no visual structure to guide attention, and no direct way to contact a seller without leaving the screen entirely. Users could not sort their saved vehicles, could not remove them in bulk, and had no recommendations when listings became unavailable. A screen sitting at a critical decision point in the user journey was doing almost nothing to move users forward.",
        image: {
          src: "/images/projects/project-1/detail-1.png",
          alt: "Original Favourites screen",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Research & Discovery",
        body: "I ran a large-scale user survey across the German and Austrian markets (1,142 respondents on iOS and Android) to understand how people actually use their watchlist. The findings were clear: users treat Favourites as a shortlist to narrow down their choices. Price is the primary factor they track, they check back regularly for updates, and they want to know how long a car has been listed.\n\nArmed with these insights, I mapped the existing experience against what users actually needed and identified over a dozen improvement opportunities.",
      },
      {
        heading: "Design Approach",
        body: "I redesigned the vehicle card from the ground up, starting with information hierarchy. Price became the most prominent element on the card, paired with a clear indicator showing whether the asking price is competitive. The most relevant vehicle attributes were surfaced as scannable pills, replacing a dense block of text. Non-essential information was removed to reduce visual noise.\n\nThe card design did not exist in isolation. We deliberately aligned it with the search result cards used across web, iOS, and Android, so the experience feels consistent wherever a user encounters a vehicle. The attribute pills follow the same recognisable pattern. But Favourites could go further. On a search result card, the goal is to move users to the detail page, where they make an enquiry. On Favourites, the contact button is already on the card, so there is no reason to hold back. We added a swipeable image gallery directly on the Favourites card, letting users browse a vehicle's photos without leaving their shortlist. Same design language as search, but richer in action.\n\nThe most impactful addition was a direct contact button on each card. Favourites is the screen where users gather vehicles they are seriously considering, often side by side. Adding a contact CTA there saves a click and brings the most important action in the buying journey to exactly the right moment, rather than asking users to navigate deeper into a listing first.\n\nBeyond the card, we added sorting by date added, price, mileage, and year. Users can remove vehicles individually or in bulk. At the bottom of the screen, a recommender surfaces vehicles similar to what the user has already saved, keeping discovery alive without pulling them away from their shortlist.",
        image: {
          src: "/images/projects/project-1/detail-2.png",
          alt: "Favourites redesign showing new card design with contact CTA and price indicator",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Results",
        body: "We ran an A/B test with the new card design and contact CTAs. The result: a ~5.5% increase in enquiries, validating the hypothesis that Favourites could become an active conversion surface rather than a passive list. The data confirmed that adding contact buttons directly to the cards was the right call: users were ready to act from the shortlist, they just needed the path made easy.",
      },
    ],
  },
  {
    id: 3,
    slug: "deals-entry-point",
    status: "published",
    title: "Deals Entry Point",
    subtitle: "Making Discounts a First-Class Feature",
    description:
      "Gave a 3x-converting listing type its own entry point: 50% more deals page views and 10% more leads.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android",
    tags: ["Product Strategy", "Navigation Design", "Usability Testing", "Growth"],
    thumbnail: {
      src: "/images/projects/project-3/thumb.png",
      alt: "Deals Entry Point - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-3/hero.png",
      alt: "Deals Entry Point hero - AutoScout24",
      width: 1920,
      height: 1080,
    },
    overview:
      "Price is the single most important factor for AutoScout24 users when buying a car. Super Deals, listings priced at least 3.5% or €300 below market value, convert at 3x the rate of regular listings. Users love a good deal. The problem was that deals were nearly impossible to find: buried in the catalogue with no dedicated entry point and no presence in the navigation.",
    sections: [
      {
        heading: "The Opportunity",
        body: "The internal data made the case quickly. Super Deals made up just 2% of detail page views but drove 13% of all web enquiries. On LeasingMarkt.de, a sister marketplace, deals generated 30% of revenue from only 2% of listings. Users who found deals converted at a dramatically higher rate. The opportunity was to stop treating deals as a side effect and start giving them the prominence they deserved, both in the recommender and in the bottom navigation.",
        image: {
          src: "/images/projects/project-3/detail-1.png",
          alt: "Super Deals opportunity data",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Building the Business Case",
        body: "I combined internal data with market research: 59% of European consumers rank good value for money as their top purchase criterion; 60% say a discount can seal the decision on an undecided purchase; and 67% of mobile users are more likely to engage with brands offering in-app deals. The data pointed in one direction: give users easier access to the deals they are already looking for.",
      },
      {
        heading: "Navigation Redesign",
        body: "The design challenge was a hard constraint: mobile navigation best practice limits bottom tabs to five items, and AutoScout24 already had five. Adding Deals meant making space, not just adding a tab.\n\nThe solution was a two-part restructure. Profile was moved out of the bottom navigation and into the header: an occasional task did not need a permanent tab. More significantly, Favourites and Saved Searches were consolidated into a single Saved tab, freeing up the slot Deals needed.\n\nMerging two features into one tab introduced its own design problem: how do you present two content types clearly without losing either? I prototyped three versions and ran an unmoderated usability test with seven participants. Version 1 used a bottom slider to reveal the two categories without showing content upfront. Version 2 displayed both on a single screen with vehicle thumbnails for an immediate overview. Version 3 used a tab-based layout with separate pages for each content type. Six out of seven participants preferred Version 2. It gave the clearest picture at a glance, made the combination of favourites and saved searches feel logical rather than confusing, and struck the right balance between information and simplicity. Version 1 felt too minimal and disconnected; Version 3's tabs looked too similar to filter controls and risked being overlooked.\n\nThe testing also confirmed genuine appetite for the Deals tab, while surfacing that users expected the content to be personalised to their search history. That finding went straight into the roadmap.",
        image: {
          src: "/images/projects/project-3/detail-3.jpg",
          alt: "Three versions of the Saved tab tested in usability research",
          width: 1512,
          height: 756,
        },
      },
      {
        heading: "Results & Roadmap",
        body: "In an initial iOS test, 15% of visitors accessed Deals through the new bottom-navigation entry point. Deals detail page views increased by 50% and Super Deal leads rose by 10%.\n\nThe entry point was the foundation for a larger vision: a dedicated Deals hub where all deal types live in one place. The roadmap included personalized deal alerts triggered when a saved search or favourited vehicle drops to Super Deal price, multiple deal categories beyond Super Deals (price drops, exclusive dealer offers, time-limited promotions), and deal badges surfaced directly in the Favourites screen so users never miss when a saved vehicle becomes a bargain.\n\nOn the CRM side, the plan included targeted push notifications and re-engagement emails for deal-prone users, creating a closed loop between discovery, saving, and action.\n\nThe concept was validated and the roadmap was ready. The full Deals hub was not built: the project was deprioritised by management before the next phase could begin. The entry point remains live.",
      },
    ],
  },
  {
    id: 4,
    slug: "native-referral-flow",
    status: "published",
    title: "Native Referral Flow",
    subtitle: "Turning Users into a Growth Channel",
    description:
      "7.5x more referral engagement than desktop and conversion rates approaching 9%, reaching ~90% of mobile users in month one.",
    company: "Marley Spoon",
    role: "Product Designer",
    platform: "iOS, Android",
    tags: ["Mobile", "Growth", "iOS", "Android", "Referral"],
    thumbnail: {
      src: "/images/projects/project-4/thumb.png",
      alt: "Native Referral Flow - Marley Spoon",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-4/hero.png",
      alt: "Native Referral Flow hero - Marley Spoon",
      width: 1920,
      height: 1080,
    },
    overview:
      "At Marley Spoon, the most engaged users were on the app. They ordered weekly, tracked deliveries, and lived inside iOS and Android. Yet the referral program existed only on desktop and in email, leaving the most active segment of the user base with no native way to share. Designing that mobile experience from scratch was one of my first major projects at the company.",
    sections: [
      {
        heading: "The Challenge",
        body: "The problem was not that users did not want to refer friends. It was that the flow made it unnecessarily hard. Sharing required switching out of the app entirely, opening a browser, and navigating a separate page. On mobile, that kind of friction kills intent before it becomes action.\n\nThe brief was to build something truly native: easy, immediately clear, and available right where the user already was, under their thumb. And the reward had to land instantly. Invite three friends who place an order and you get a free box. That is a compelling hook for a meal-kit subscriber, but only if it is communicated upfront and unmistakably.",
        image: {
          src: "/images/projects/project-4/detail-1.png",
          alt: "Native Referral Flow - discovery and challenge",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Discovery",
        body: "I started with competitor analysis to understand the patterns and conventions users would already recognise, then dug into internal desktop referral data to map what was working and size the mobile opportunity.\n\nFrom this, I defined the user flow and the two core additions the feature needed: a new menu entry point to make the referral program permanently discoverable from anywhere in the app, and a sent invites overview so users could track the status of every referral they had made.",
      },
      {
        heading: "Design",
        body: "The flow was built around a single promise: invite three friends, get a free box. No noise, no hedging. The reward was front and centre on every screen.\n\nEntry points were placed at the moments of highest engagement: post-delivery, post-checkout, and in account settings, catching users right after a positive experience with the product. Native share sheets handled the sending, making sharing feel instant and familiar. Zero manual link-copying.\n\nThe app was custom rather than fully native, designed on an iOS baseline. Where Android required platform-specific treatment, Material Design guidelines served as the reference for adapting components accordingly, without maintaining a separate Android Figma file. Informed adaptation over duplication.\n\nA sent invites tracker gave users real visibility into every referral they had made. Each invite shows its status at a glance: Redeemed (the friend signed up and placed an order, discount earned), Pending (invite sent, waiting for action), or Expired (the link was never used). No digging, no ambiguity. Users could see exactly where they stood and how close they were to earning that free box, which gave them a reason to come back and a nudge to send more.",
        image: {
          src: "/images/projects/project-4/detail-3.png",
          alt: "Sent invites tracker showing Redeemed, Pending, and Expired statuses",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Results",
        body: "In the first month after rollout, the feature reached almost 90% of iOS and Android users. The results confirmed that context and friction, not interest, had been the barrier all along.\n\nApp referrals quickly outpaced the desktop program: over 70% of all referrals sent came from mobile, with engagement running approximately 7.5x higher than the existing desktop channel. Conversion rates for native referrals reached almost 9%.",
      },
    ],
  },
];

// Workshops and talks hosted, ordered by impact. Shown in their own section on the homepage
export const workshops: Project[] = [
  {
    id: 5,
    slug: "ai-powered-prototyping",
    status: "published",
    title: "AI-Powered Prototyping",
    subtitle: "Designing at the Speed of Ideas",
    description:
      "Built a fully interactive prototype using only prompts and presented the methods at UX Camp 2025 and AutoScout24.",
    company: "UX Camp Berlin · AutoScout24",
    role: "Speaker & Workshop Facilitator",
    platform: "Figma Make, AI tools, prompting",
    tags: ["AI Tools", "Prototyping", "Workshop", "Thought Leadership"],
    thumbnail: {
      src: "/images/projects/project-5/thumb.png",
      alt: "AI-Powered Prototyping - Workshop",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-5/hero.png",
      alt: "AI-Powered Prototyping hero",
      width: 1920,
      height: 1080,
    },
    overview:
      "Traditional design workflows move through a long chain: idea → wireframes → high-fidelity mockups → prototype → handoff → development. Each step adds time and friction. I wanted to explore whether AI tools (specifically Figma's Make feature) could compress the ideation-to-prototype phase dramatically.",
    sections: [
      {
        heading: "The Experiment",
        body: "Using only prompts, I built a fully interactive car marketplace prototype. No static mockups first, no manual stitching of frames: just structured prompting and iterative refinement with the AI tool.\n\nHitting walls was part of the process. The vehicle listing cards were a recurring challenge: the AI kept generating inconsistent card heights and poor information hierarchy, with price buried below secondary attributes. Describing the problem in text produced partial fixes that broke something else. The more effective approach was to screenshot the broken state, annotate what was wrong, and feed it back visually so the AI could see the gap rather than interpret a description of it. For more persistent issues, adding inline comments directly in Lovable gave the AI contextual guidance attached to specific components. When that still wasn't enough, opening the generated code and making targeted edits directly was the fastest path to a precise fix. Knowing which level to work at, and when to go deeper, turned out to be as important as knowing how to prompt.",
        image: {
          src: "/images/projects/project-5/detail-1.png",
          alt: "AI-generated car marketplace prototype built in Figma Make",
          width: 1456,
          height: 816,
        },
      },
      {
        heading: "Three Prompting Strategies",
        body: "I developed and shared three prompting strategies:\n\n1. Descriptive text: writing detailed specifications of what each component should look like and how it should behave\n\n2. Visual references: feeding the AI screenshots from Figma, Mobbin, and live websites as starting points\n\n3. LLM collaboration: using language models to generate content structure and copy before bringing it into the design tool",
      },
      {
        heading: "Outcomes",
        body: "Creating an interactive prototype can be faster than stitching static mockups: treat the AI as a co-creator, break the project into atomic steps, and iterate in tight loops. The debugging toolkit matters as much as the prompting one.\n\nAs one of the earliest adopters of Figma Make at AutoScout24, I became a go-to resource for the team, running informal sessions, sharing prompting strategies, and helping colleagues get unblocked when the tool behaved unexpectedly.\n\nI shared these methods at UX Camp (October 2025) and at an internal UX All Hands (August 2025): how to structure prompts, how to use visual references effectively, and when to step into the code rather than keep prompting around a problem.",
        presentation: "/images/projects/project-5/presentation.pdf",
      },
    ],
  },
  {
    id: 8,
    slug: "broadcasting-your-design",
    status: "published",
    title: "Broadcasting Your Design",
    subtitle: "Teaching Designers to Present Like a Newsroom",
    description:
      "A UX Camp workshop that turns presenting into a newsroom: four roles, two frameworks, and a live 60-second broadcast to practise them.",
    company: "UX Camp Berlin",
    role: "Speaker & Workshop Facilitator",
    platform: "Storytelling, presenting, design reviews",
    tags: ["Workshop", "Storytelling", "Presentation Skills", "Facilitation"],
    thumbnail: {
      src: "/images/projects/project-8/thumb.png",
      alt: "Broadcasting Your Design - UX Camp workshop",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-8/hero.png",
      alt: "Retro TV showing a breaking news broadcast",
      width: 1920,
      height: 840,
    },
    overview:
      "Good design work only has impact when people understand it. Many designers do strong work and then lose the room in a design review: too much text on the slides, a Figma file nobody can follow, or a story that never quite lands. I built this workshop around a simple idea: every great news broadcast has four roles, and every designer who presents plays all four. I ran it at UX Camp Berlin in July 2026.",
    sections: [
      {
        heading: "Four Roles, One Presenter",
        body: "The Producer builds the story before the slides: answering why, what, how, and what's next, using AI as a thinking partner to shape the narrative, and keeping slides simple and visual. The Anchor keeps everyone on the same page: signposting where the talk is going, guiding the pace, and letting personality come through.\n\nThe Reporter takes the audience into the story by leaving the slides and walking through the real product in Figma, explaining why decisions were made, not just what was designed. The Weatherman makes complexity easy: everyday language instead of jargon, concrete examples, and one idea per slide.\n\nEach role came with core tips for everyone and level-up tips for more confident presenters, so the session worked for juniors and seniors in the same room.",
        image: {
          src: "/images/projects/project-8/detail-1.png",
          alt: "Workshop slide introducing the four broadcast roles: Producer, Anchor, Reporter, Weatherman",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Two Frameworks to Take Home",
        body: "I wanted people to leave with something they could use in their very next review. For building the story, I adapted the STAR method (Situation, Task, Action, Result) into a presentation structure: here's today's story, here's why it matters, here's what we did, here's what happened.\n\nFor walking through Figma, which is where many presentations fall apart, I created the FIELD framework: Frame the context, Identify the route, Eliminate clutter, Lead the audience, and Deliver the takeaway. It turns a wandering file tour into a guided walkthrough that ends on a decision.",
        image: {
          src: "/images/projects/project-8/detail-2.png",
          alt: "FIELD framework slide: Frame, Identify, Eliminate, Lead, Deliver",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "The UX Newsroom",
        body: "The second half was hands-on. Participants became the editorial team behind the evening news. Each team received a UX project based on a real case, a partially completed design story, and a broadcast worksheet. They had 10 minutes to prepare and 60 seconds to go live, with one person stepping up as the Anchor to present.\n\nThe debrief brought it back to everyday work: were the stories easy to follow, could people picture the Figma walkthrough, what proof made the update convincing, and which techniques they would use in their next design review.",
        image: {
          src: "/images/projects/project-8/detail-3.png",
          alt: "Workshop exercise slide: The UX Newsroom, 10 minutes to prepare, 60 seconds live",
          width: 1200,
          height: 800,
        },
        presentation: "/images/projects/project-8/presentation.pdf",
      },
    ],
  },
  {
    id: 9,
    slug: "code-basics-for-designers",
    status: "published",
    title: "Code Basics for Designers",
    subtitle: "How Figma Decisions Become Frontend Rules",
    description:
      "An internal session teaching designers how Figma maps to HTML, CSS, tokens and component props, for cleaner handoff and better AI-generated code.",
    company: "AutoScout24 UX All Hands",
    role: "Speaker",
    platform: "HTML, CSS, design tokens, handoff",
    tags: ["Workshop", "Design-to-Code", "Handoff", "Design Systems"],
    thumbnail: {
      src: "/images/projects/project-9/thumb.png",
      alt: "Code Basics for Designers - internal session",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #eefff0 0%, #c8f53a 100%)",
    },
    heroImage: {
      src: "/images/projects/project-9/hero.png",
      alt: "Laptop and slides from the Code Basics for Designers session",
      width: 1920,
      height: 840,
    },
    overview:
      "Designers and engineers describe the same interface in different languages. Designers talk about frames, Auto Layout and variants; engineers talk about containers, Flexbox and props. With AI tools now generating code straight from design files, that gap matters more than ever. I put together this session for the UX team to show how the decisions we already make in Figma become frontend rules.",
    sections: [
      {
        heading: "From Pixels to Structure",
        body: "I started with how far design tools have come. Paint-era interfaces were a single flat bitmap that captured the look but not the logic. Photoshop added layers: editable order, but still no idea of the product's structure. Figma frames finally nest the way code does: a screen contains sections, and sections contain components.\n\nThat set up the core idea of the session: structure on the left, style on the right. The layers panel tells engineers what the interface is, which is HTML. The design properties panel tells them how it should look and respond, which is CSS. Handoff is simply structure plus presentation.",
        image: {
          src: "/images/projects/project-9/detail-1.png",
          alt: "Slide comparing the Figma layers panel to HTML and the design properties panel to CSS",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "One Card, Five Steps",
        body: "Rather than teaching code in the abstract, I built a single pricing card and translated it step by step. Frames become containers. Auto Layout becomes Flexbox, with direction, gap, padding and stretch carrying over directly. Styles become CSS properties. Variables become design tokens and CSS variables. Component variants become the props engineers use to reuse the component.\n\nA small cheat sheet tied it together, mapping each Figma term to its frontend twin and the designer intuition behind it: a translation guide, not a perfect dictionary.",
        image: {
          src: "/images/projects/project-9/detail-2.png",
          alt: "Slide mapping Figma structure to a pricing card and its CSS",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Before Handoff",
        body: "The session closed with a checklist designers can use on every file: define the structure (what are the containers?), the layout (how should it respond?), the tokens (which values are reusable?), the states (what can change or fail?), and the components (which pieces should be reused?).\n\nThe message for working with AI was simple: a well-structured Figma component with sensible Auto Layout, variants, variables and naming gives AI tools clues about what the code should be. Messy Figma leads to messy AI-generated code. I finished with a live demo inspecting the card in Figma alongside its code.",
        image: {
          src: "/images/projects/project-9/detail-3.png",
          alt: "Slide listing five things to define before handoff",
          width: 1200,
          height: 800,
        },
        presentation: "/images/projects/project-9/presentation.pdf",
      },
    ],
  },
];
