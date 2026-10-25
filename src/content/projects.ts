import { Project } from "./types";

export const selectedProjects: Project[] = [
  {
    id: 7,
    slug: "growing-logged-in-users",
    status: "published",
    title: "Growing Logged-in Users",
    subtitle: "Login Moments and the AutoScout24 Club Vision",
    description:
      "Giving users a timely reason to log in, improving the login experience itself, and a longer-term vision for an AutoScout24 Club.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android, Web, mWeb",
    tags: ["Growth", "Login & Registration", "A/B Testing", "Cross-platform"],
    thumbnail: {
      src: "/images/projects/project-7/thumb.png",
      alt: "Growing Logged-in Users - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #f9f9fa 0%, #e2e4e8 100%)",
    },
    heroImage: {
      src: "/images/projects/project-7/hero.png",
      alt: "Redesigned AutoScout24 login with social sign-in options",
      width: 1920,
      height: 840,
    },
    overview:
      "AutoScout24 users could search for cars, browse listings and contact sellers without logging in. That made the marketplace easy to use, but it also meant many people had few reasons to create an account or return regularly. Account features such as saved searches, price history and listing popularity offered opportunities to make signing in more useful. I worked on several points in that journey: giving users a timely reason to log in, improving the login experience itself, and exploring how individual benefits could connect into a more coherent long-term proposition.",
    sections: [
      {
        heading: "My Role & Team",
        body: "I was the product designer working across three teams, each with a product manager and three to four engineers. I designed the experiences and presented the work at a company-wide all-hands.",
      },
      {
        heading: "Popularity Feature",
        body: "In usability sessions, people actively tried to access listing popularity information and said it helped them make decisions. The feature showed listing views and interactions, including detail-page views, gallery swipes and adding a vehicle to Favourites. Showing a sign-in prompt when this information was gated created a relevant reason to log in at the moment of interest.\n\nThe feature was already live on web. The internal results presentation reported that 5% of login attempts were driven by popularity, while the feature accounted for 2% of total logged-in users. These are different denominators: the feature created login intent, but some users dropped out before completing login.",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/pop-1-blurred.png", alt: "Popularity section gated for logged-out users with a sign-in prompt", caption: "Logged out: popularity gated, with a sign-in prompt" },
            { src: "/images/projects/project-7/screens/pop-2-legacy-login.png", alt: "Legacy login screen", caption: "The existing login screen" },
            { src: "/images/projects/project-7/screens/pop-3-revealed.png", alt: "Popularity section showing views and interactions", caption: "Logged in: views and interactions shown" },
          ],
        },
      },
      {
        heading: "Login Redesign",
        body: "The existing login screen felt outdated, its visual design had not kept up with the rest of the product, and its hierarchy did not follow established login patterns.\n\nThe redesign made the value of signing in clearer, brought Google, Apple and Facebook options above the email form, established one primary action and widened the desktop modal for better readability.",
        image: {
          src: "/images/projects/project-7/detail-1.png",
          alt: "Legacy login modal compared with the redesigned login modal",
          width: 1200,
          height: 800,
        },
        imageCaption: "Legacy / Update",
        gallery: {
          variant: "desktop",
          items: [
            { src: "/images/projects/project-7/screens/login-fullpage.png", alt: "Full-page login with social sign-in above the email form", caption: "Full-page login" },
            { src: "/images/projects/project-7/screens/login-popup.png", alt: "Login popup with social sign-in above the email form", caption: "Login popup" },
          ],
        },
      },
      {
        heading: "Dealer Login: The Trade-off",
        body: "The dealer login created a genuine trade-off. Its original full-width button sat near the top and interrupted the main consumer journey. Dealer-side stakeholders needed the entry point to remain visible, but most users were private buyers.\n\nThe chosen direction moved dealer access lower and made it a secondary outlined button: still discoverable for dealers, but less likely to distract buyers.",
        image: {
          src: "/images/projects/project-7/detail-2.png",
          alt: "Dealer entry point as a text link compared with a secondary outlined button",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Planned Next Steps",
        body: "Follow-up ideas were planned as next steps: contextual login variants, removing the labels from the social sign-in buttons, one-time-code (OTP) login, and further testing of the dealer button.",
      },
      {
        heading: "Separate Initiatives and Outcomes",
        body: "Each initiative was measured separately, on its own platform and metric, so these results are not one overall login-redesign result.\n\nNew app onboarding: associated with +25% app logged-in users.\n\nPrice-history login: associated with +3% logged-in iOS users, +14.5% web logins and +24.6% web registrations.\n\nPopularity: associated with 5% of login attempts and a reported +1% increase in registrations.",
      },
      {
        heading: "AutoScout24 Club: The Vision",
        body: "I developed the AutoScout24 Club vision to connect separate logged-in benefits into a coherent membership proposition. Rather than asking users to register for its own sake, the idea was to make an account feel more valuable through useful vehicle insights, convenience features, exclusive benefits and a more consistent member experience.\n\nThe concept explored price history, price evaluation, listing popularity, information such as how long a listing had been online, saved vehicles and search updates, own-car price insights, early access to new listings, exclusive dealer offers, and trust and membership signals such as a verified buyer profile and exclusive content.\n\nThe vision was intended to make the value exchange clearer: users would have practical reasons to maintain an account, while AutoScout24 could build a more continuous relationship with them. I left the company before I could confirm what happened to the concept afterward, so it is a vision, not a launched product.",
        image: {
          src: "/images/projects/project-7/detail-3.png",
          alt: "AutoScout24 Club landing page concept",
          width: 1200,
          height: 800,
        },
        imageCaption: "Vision — not confirmed as shipped",
      },
      {
        heading: "In Summary",
        body: "The work connected immediate UX improvements with a broader product direction: give users a clear reason to sign in, make the step easier, and build toward an account experience that keeps delivering value over time.",
      },
    ],
  },
  {
    id: 1,
    slug: "favourites-redesign",
    status: "published",
    title: "Favourites Redesign",
    subtitle: "A Working Space for Buyers",
    description:
      "Making Favourites a working space for car buyers, not just a place to store vehicle links. +5.53% enquiries in the contact-CTA experiment.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android, Web",
    tags: ["UX Design", "A/B Testing", "User Research", "Cross-platform"],
    thumbnail: {
      src: "/images/projects/project-1/thumb.png",
      alt: "Favourites Redesign - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #f9f9fa 0%, #e2e4e8 100%)",
    },
    heroImage: {
      src: "/images/projects/project-1/hero.png",
      alt: "Favourites Redesign hero - AutoScout24",
      width: 1920,
      height: 1080,
    },
    overview:
      "Favourites is where car shoppers keep track of vehicles they may want to come back to. But the existing experience made important next steps harder than they needed to be: contacting a seller required opening a detail page, managing several saved vehicles was cumbersome, and sold listings could be difficult to distinguish from available ones. The redesign focused on making Favourites more useful as a working space for a buyer, not just a place to store vehicle links.",
    sections: [
      {
        heading: "My Role & Team",
        body: "I led the Favourites redesign, using user research and experiment results to prioritise improvements to the saved-vehicle experience across platforms.",
      },
      {
        heading: "Research",
        body: "I ran a survey with 1,142 respondents across Android and iOS to better understand how people used Favourites and what they needed from it. The research explored behaviours such as reviewing saved cars, comparing prices, checking for listing changes and understanding how long a vehicle had been online.\n\nThe findings helped focus the redesign on practical tasks: make seller contact easier, make saved listings easier to manage, and surface useful listing information without forcing users to open every detail page.",
        image: {
          src: "/images/projects/project-1/detail-1.png",
          alt: "Favourites before the redesign",
          width: 1200,
          height: 800,
        },
        imageCaption: "Before",
      },
      {
        heading: "Constraints",
        body: "Favourites cards needed to match the established search-result card. Search cards had already been refined through A/B testing, so reusing that pattern kept vehicle information and actions consistent across the journey. The main opportunity was not to invent a new card style, but to improve the controls and states around saved vehicles.",
        gallery: {
          variant: "cards",
          items: [
            { src: "/images/projects/project-1/screens/card-search.png", alt: "Search-result card", caption: "Search-result card" },
            { src: "/images/projects/project-1/screens/card-favourites.png", alt: "Favourites card with contact buttons", caption: "Favourites card, with a contact button" },
          ],
        },
      },
      {
        heading: "Design Decisions",
        body: "At page level, users needed better ways to organise and manage saved vehicles: sorting by date, price, mileage and year; removing individual or multiple vehicles; and recovering from an accidental removal. Sold listings also needed a clearer state so users could distinguish them from cars still available.\n\nThe card itself needed to support the next action. Adding a contact button let users reach the seller directly from Favourites instead of opening the detail page first. An undo option after removal reduced the cost of a mistake, while the recommender sat below the saved vehicles so it did not interrupt the primary task.",
        gallery: {
          items: [
            { src: "/images/projects/project-1/screens/fav-list.png", alt: "Favourites page", caption: "Favourites" },
            { src: "/images/projects/project-1/screens/fav-sort.png", alt: "Page-level sorting options", caption: "Page-level sorting" },
            { src: "/images/projects/project-1/screens/fav-removed-undo.png", alt: "Vehicle removed with an undo option", caption: "Removal, with undo" },
            { src: "/images/projects/project-1/screens/fav-recommender.png", alt: "Recommender below the saved vehicles", caption: "Recommender below Favourites" },
          ],
        },
      },
      {
        heading: "Listing States",
        body: "The card needed to communicate more than vehicle details. Different states helped users understand whether a listing was still available, had been sold, or what kind of listing it was.",
        gallery: {
          variant: "cards",
          items: [
            { src: "/images/projects/project-1/screens/card-max.png", alt: "Card with deal badge and price drop", caption: "Super Deal, price drop" },
            { src: "/images/projects/project-1/screens/card-contacted.png", alt: "Card marked as contacted", caption: "Contacted" },
            { src: "/images/projects/project-1/screens/card-unavailable.png", alt: "Greyed-out card for a vehicle no longer available", caption: "No longer available" },
            { src: "/images/projects/project-1/screens/card-private.png", alt: "Card for a private seller", caption: "Private seller" },
            { src: "/images/projects/project-1/screens/card-leasing.png", alt: "Leasing offer card", caption: "Leasing offer" },
            { src: "/images/projects/project-1/screens/card-sponsored.png", alt: "Sponsored listing card", caption: "Sponsored" },
          ],
        },
      },
      {
        heading: "Empty State",
        body: "The mobile-web empty state explained the value of saving vehicles and encouraged users to save their first one. It shows how the experience communicates the purpose of Favourites before a user has added any vehicles. The message stays consistent across platforms while adapting to each layout.",
        gallery: {
          items: [
            { src: "/images/projects/project-1/screens/fav-mweb-empty.png", alt: "Empty Favourites state on mobile web", caption: "Mobile-web empty state" },
          ],
        },
      },
      {
        heading: "Outcome: +5.53% Enquiries",
        body: "The source deck reports a +5.53% increase in enquiries in the contact-CTA experiment, a 7-day Android test across all users and all markets. The result belongs to the contact CTA; the experiment did not isolate the other parts of the redesign.",
      },
      {
        heading: "Further Exploration",
        body: "Further ideas explored how Favourites could support the buying journey over time, including email updates and more personalised dealer and buyer recommendations. These were explorations, separate from the contact-CTA result.",
        gallery: {
          variant: "cards",
          caption: "Exploration",
          items: [
            { src: "/images/projects/project-1/screens/offer-expanded.png", alt: "Card with a personal dealer offer", caption: "Personalised dealer offer" },
            { src: "/images/projects/project-1/screens/toggle-on.png", alt: "Favourites with an email updates toggle", caption: "Email updates" },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    slug: "homescreen-recommendations",
    status: "published",
    title: "Homescreen Recommendations",
    subtitle: "Personalising the Home Screen",
    description:
      "Helping people discover more relevant cars on the app home screen: which vehicles to recommend, and how to browse them.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android",
    tags: ["Personalisation", "A/B Testing", "Experimentation", "Data-informed"],
    thumbnail: {
      src: "/images/projects/project-2/thumb.png",
      alt: "Homescreen Recommendations - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #f9f9fa 0%, #e2e4e8 100%)",
    },
    heroImage: {
      src: "/images/projects/project-2/hero.png",
      alt: "Homescreen Recommendations hero - AutoScout24",
      width: 1920,
      height: 1080,
    },
    overview:
      "AutoScout24's home screen highlighted the newest vehicles, but the selection was not tailored to individual users. The opportunity was to help people discover more relevant cars through recommendations shaped by their behaviour and interests.",
    sections: [
      {
        heading: "My Role & Team",
        body: "I worked with the app team across iOS and Android to explore both sides of the experience: which vehicles to recommend, and how the interface should help users browse those recommendations.",
      },
      {
        heading: "Recommendation Pool & Feed Simplification",
        body: "One workstream explored reducing clutter in recommendation cards and increasing the number of vehicles visible in the feed. The proposal removed low-usage playlists and last-search listing cards that duplicated other routes into content, while increasing the visible recommendation pool from 15 to 50 vehicles.\n\nThe hypothesis was that a cleaner feed with more relevant vehicles would create a more consistent discovery experience and encourage deeper browsing. The work was planned as phased experiments, with success evaluated against the team's habit metric: users reaching more than six detail-page views in their first week.",
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/hs-0-baseline.png", alt: "Recommendation cards before simplification", caption: "Before" },
            { src: "/images/projects/project-2/screens/hs-2-simplified.png", alt: "Simplified recommendation cards", caption: "Feed simplification, more vehicles" },
          ],
        },
      },
      {
        heading: "Variety in Recommendations",
        body: "A second planned phase explored adding variety to the feed by mixing higher- and lower-scoring recommendations and showing a broader range of vehicle visuals. This remained a hypothesis.",
      },
      {
        heading: "Navigation Experiments",
        body: "A Netflix-style vertical-feed concept underperformed in the iOS A/B test, with a 20.9% decrease in home recommendation-card clicks and a 1.5% decrease in detail-page lead conversions.\n\nLater tabs and chips explorations offered another way to navigate category-based recommendations. The tabs approach was reported at +7% clicks and +12% overall engagement.\n\nThe learning was not that one familiar pattern always works better than another. The experience needed to fit the way people discover and compare cars, and recommender engagement needed to be evaluated separately from downstream seller interest.",
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/hs-3-horizontal.png", alt: "Netflix-style rows grouped by recommendation type", caption: "Netflix-style navigation" },
            { src: "/images/projects/project-2/screens/hs-4-tabs.png", alt: "Recommendations organised in tabs", caption: "Tabs" },
            { src: "/images/projects/project-2/screens/hs-5-chips.png", alt: "Recommendation types as chips", caption: "Chips" },
          ],
        },
      },
      {
        heading: "Outcome",
        body: "The work explored how recommendation relevance, feed density and navigation interact. The experiments compared different ways of presenting cars and moving between categories, rather than assuming a familiar pattern would automatically improve discovery. Clicks, overall engagement, detail-page views and lead conversions were kept as separate measures.",
        image: {
          src: "/images/projects/project-2/detail-3.png",
          alt: "Home-screen recommendations with category chips",
          width: 1200,
          height: 800,
        },
      },
    ],
  },
  {
    id: 3,
    slug: "deals-entry-point",
    status: "published",
    title: "Deals Entry Point",
    subtitle: "A Clearer Entry Point for Super Deals",
    description:
      "Exploring a clearer entry point for Super Deals without overcrowding a full bottom navigation. The Deals tab was explored, not shipped.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android",
    tags: ["Product Strategy", "Navigation Design", "Usability Testing", "Growth"],
    thumbnail: {
      src: "/images/projects/project-3/thumb.png",
      alt: "Deals Entry Point - AutoScout24",
      width: 1200,
      height: 800,
      background: "linear-gradient(135deg, #f9f9fa 0%, #e2e4e8 100%)",
    },
    heroImage: {
      src: "/images/projects/project-3/hero.png",
      alt: "Deals Entry Point hero - AutoScout24",
      width: 1920,
      height: 1080,
    },
    overview:
      "AutoScout24's Super Deals offered discounted vehicles, but they were not easy to discover in the app. There was evidence that users were interested in deals; the challenge was to give them a clearer entry point without overcrowding the existing navigation.",
    sections: [
      {
        heading: "My Role & Team",
        body: "I led product design for the Deals entry-point exploration, working with product and engineering to assess navigation options, validate concepts with users, and explore alternative placements for Super Deals.",
      },
      {
        heading: "Constraint and Decision",
        body: "The app already used all five bottom-navigation slots, a familiar pattern on iOS and Android. Adding a sixth tab was not an option. To make room for Deals, I explored combining Favourites and Saved Searches under one \"Saved\" destination. Both are things users save for later: vehicles they want to revisit and searches they want to keep track of.\n\nThe challenge was to preserve the mental model for both types of saved content while freeing a navigation slot for a new destination.",
        gallery: {
          items: [
            { src: "/images/projects/project-3/screens/deals-before.png", alt: "App with all five bottom-navigation slots in use", caption: "All five bottom-navigation slots in use" },
            { src: "/images/projects/project-3/screens/deals-list.png", alt: "Proposed Deals destination with Super Deals", caption: "Proposed Deals destination" },
          ],
        },
      },
      {
        heading: "Three Saved Concepts",
        body: "Bottom sheet: let users choose between Favourites and Saved Searches.\n\nStacked sections: show saved vehicles and saved searches as two areas on the same screen.\n\nFilter tabs: let users switch between saved vehicles and saved searches within one destination.\n\nThese concepts explored trade-offs between visibility, navigation depth and the effort required to switch between saved content. The unmoderated prototype test helped assess whether people understood the proposed navigation and where they clicked. It was concept validation, not a production experiment.",
        gallery: {
          caption: "Unmoderated prototype test: usability / concept validation",
          items: [
            { src: "/images/projects/project-3/screens/saved-v1-sheet.png", alt: "Saved as a bottom sheet", caption: "Bottom sheet" },
            { src: "/images/projects/project-3/screens/saved-v2-overview.png", alt: "Saved vehicles and saved searches as stacked sections", caption: "Stacked sections" },
            { src: "/images/projects/project-3/screens/saved-v3-tabs.png", alt: "Saved with filter tabs", caption: "Filter tabs" },
          ],
        },
      },
      {
        heading: "What Happened Next",
        body: "The proposed Deals bottom-navigation tab did not ship. Deals later appeared in the iOS home-screen recommender and on the web homepage, creating additional discovery surfaces without relying on the proposed navigation change.\n\nThese outcomes are distinct. The prototype test does not establish that the bottom-navigation concept increased detail-page views or enquiries, and the later placements are not proof that the tab shipped.",
        image: {
          src: "/images/projects/project-3/detail-1.png",
          alt: "iOS home-screen recommender with Reduced offers selected",
          width: 1200,
          height: 800,
        },
        imageCaption: "Deals in the iOS home-screen recommender",
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
    company: "UX Camp Berlin 2025",
    role: "Speaker & Workshop Facilitator",
    platform: "Figma Make, AI tools, prompting",
    tags: ["AI Tools", "Prototyping", "Workshop", "Thought Leadership"],
    thumbnail: {
      src: "/images/projects/project-5/thumb.png",
      alt: "AI-Powered Prototyping - Workshop",
      width: 1200,
      height: 800,
      background: "#f3f3f3",
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
    company: "UX Camp Berlin 2026",
    role: "Speaker & Workshop Facilitator",
    platform: "Storytelling, presenting, design reviews",
    tags: ["Workshop", "Storytelling", "Presentation Skills", "Facilitation"],
    thumbnail: {
      src: "/images/projects/project-8/thumb.png",
      alt: "Broadcasting Your Design - UX Camp workshop",
      width: 1200,
      height: 800,
      background: "#f3f3f3",
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
      "A UX Camp session teaching designers how Figma maps to HTML, CSS, tokens and component props, for cleaner handoff and better AI-generated code.",
    company: "UX Camp Berlin 2026",
    role: "Speaker",
    platform: "HTML, CSS, design tokens, handoff",
    tags: ["Workshop", "Design-to-Code", "Handoff", "Design Systems"],
    thumbnail: {
      src: "/images/projects/project-9/thumb.png",
      alt: "Code Basics for Designers - UX Camp session",
      width: 1200,
      height: 800,
      background: "#f3f3f3",
    },
    heroImage: {
      src: "/images/projects/project-9/hero.png",
      alt: "Laptop and slides from the Code Basics for Designers session",
      width: 1920,
      height: 840,
    },
    overview:
      "Designers and engineers describe the same interface in different languages. Designers talk about frames, Auto Layout and variants; engineers talk about containers, Flexbox and props. With AI tools now generating code straight from design files, that gap matters more than ever. I put together this session for UX Camp 2026 to show designers how the decisions they already make in Figma become frontend rules.",
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
