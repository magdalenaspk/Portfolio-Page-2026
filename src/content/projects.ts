import { Project } from "./types";

export const selectedProjects: Project[] = [
  {
    id: 7,
    slug: "growing-logged-in-users",
    status: "published",
    title: "Growing Logged-in Users",
    subtitle: "Reasons to Sign In, and a Vision for Membership",
    description:
      "Giving people a timely reason to log in, making the login itself easier, and connecting account benefits into a longer-term AutoScout24 Club vision.",
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
        heading: "The Problem",
        body: "Logged-in users behaved very differently. On web, their enquiry conversion rate was 75% higher than for logged-out users, they viewed 40% more vehicle detail pages per week, and they had a third more sessions coming from CRM channels. The company set an OKR to grow the share of logged-in users.\n\nYet people saw little reason to sign up. They used the platform infrequently, had privacy concerns, saw no clear benefit, and the site worked perfectly well without an account.\n\nA login behaviour deep dive by our Buyer Analytics team shaped the strategy. Most logins happened in a user's very first session, and logging in tended to mark the point where a buying journey was intensifying. But users who delayed logging in still browsed and enquired for about a week beforehand, so a hard login wall would have blocked real marketplace demand. The job was to make the value of logging in obvious at the moment people were ready for it, and to remove friction once they were.",
      },
      {
        heading: "Constraints",
        body: "No hard walls. Blocking logged-out users would cost leads, so every login moment had to be optional or tied to a clear, immediate benefit.\n\nTwo audiences, one screen. Dealers log in through the same entry point as private buyers, and they are a key business segment.\n\nFour platforms behaving differently. Apps were already far more logged-in than web, and mWeb was the largest, mostly logged-out surface.\n\nSecurity and identity rules. Authentication changes went through the Trust & Identity team, a mandatory click captcha sat in the flow, and long German compound words had to fit every layout across markets.",
      },
      {
        heading: "1. The First App Open",
        body: "The app's launch sequence had grown screen by screen, with no clear value proposition and no moment to register. Users slipped straight into an anonymous session.\n\nI rebuilt it as one unified, scalable sequence: tell users why before asking for anything, put registration early, and leave room to add steps later. I explored three directions. Static full-bleed images broke down across light and dark mode and varying text lengths in different languages. A feature walkthrough solved contrast but felt dated. Video handled both and gave the first open an emotional moment, so that's what we chose.\n\nPlatform conventions shaped the details. iOS only allows one system notification prompt, so the app explains the benefit first and shows Apple's prompt only after a yes. Registration always offers a clear way to continue without an account.\n\nThe new app onboarding was associated with a 25% increase in app logged-in users. Adding steps up front cost a slight dip in sessions, a trade-off we accepted.",
        image: {
          src: "/images/projects/project-6/detail-2.png",
          alt: "New app launch sequence with video and value-driven prompts",
          width: 1200,
          height: 800,
        },
        media: "onboarding-video",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/ob-1-welcome.png", alt: "Welcome screen with video header and market selection", caption: "Welcome: what the app does, market preselected" },
            { src: "/images/projects/project-7/screens/ob-2-market.png", alt: "Marketplace selection list", caption: "Market can be changed any time later" },
            { src: "/images/projects/project-7/screens/ob-3-notifications.png", alt: "Notifications value screen", caption: "The benefit of notifications, before any prompt" },
            { src: "/images/projects/project-7/screens/ob-4-system-prompt.png", alt: "iOS system notification prompt", caption: "iOS prompt only after a yes" },
            { src: "/images/projects/project-7/screens/ob-5-register.png", alt: "Register now screen with skip option", caption: "Register, with a clear way to skip" },
            { src: "/images/projects/project-7/screens/ob-6-home.png", alt: "App home screen", caption: "Straight into the app" },
          ],
        },
      },
      {
        heading: "2. Price History: Teaser or Direct Login?",
        body: "Price history shows how a car's price has changed since it was listed. For buyers it answers an important question: is this really a good deal? That made it one of the most valuable things we could offer in exchange for logging in.\n\nOn mobile it was already behind a login wall, and the wall caused no significant drop in leads. The next step was bringing it to web.\n\nMy first web version showed the entry point and went straight to login. It felt like the login was doing all the work before the value was clear, so I designed a teaser: the Price Insights dialog showed the price rating and asked users to log in to unlock the history. That made the flow heavier: entry point, teaser, login, then feature.\n\nWe tested both, and the direct, purpose-specific login performed better. The value was already obvious at the point of intent, and extra persuasion behaved like friction. That became the principle for later work: communicate the value at the point of intent, then keep authentication as direct as possible.\n\nThe price-history login was associated with a 3% increase in logged-in iOS users, and on web with 14.5% more logins and 24.6% more registrations.",
        gallery: {
          variant: "desktop",
          items: [
            { src: "/images/projects/project-7/screens/ph-teaser-desktop.png", alt: "Price Insights dialog with locked price history and an unlock button", caption: "Tested: a teaser dialog that unlocks the history after login" },
            { src: "/images/projects/project-7/screens/ph-direct-desktop.png", alt: "Dedicated login dialog titled See how this car is priced", caption: "Chosen: a direct login framed around the insight" },
          ],
        },
      },
      {
        heading: "The Price History Flow",
        body: "After login, users land back on the listing with the full insight open. I redesigned the view to do the maths for them: where the price sits against the market, the total price reduction, and every change shown in euros rather than percentages. Each price rating (below, at or above market, or no data) has its own state, and web, iOS and Android follow the same pattern.",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/ph-1-detail.png", alt: "Vehicle detail page with a good price rating", caption: "The price rating is visible to everyone" },
            { src: "/images/projects/project-7/screens/ph-2-login.png", alt: "Login screen titled See how this car is priced", caption: "Login framed around the insight" },
            { src: "/images/projects/project-7/screens/ph-3-listed.png", alt: "Price Insights with market position and listed price", caption: "Market position, unlocked" },
            { src: "/images/projects/project-7/screens/ph-4-history.png", alt: "Price Insights with full price history and total reduction", caption: "Full history, with the total reduction calculated" },
          ],
        },
      },
      {
        heading: "3. Popularity: A Reason to Log In",
        body: "In usability sessions, people actively tried to access listing popularity information and said it helped them make decisions. The feature showed listing views and interactions, including detail-page views, gallery swipes and adding a vehicle to Favourites.\n\nIt started with a fake-door test: a \"Popular\" label assigned at random to a small share of listings, with no logic behind it. The signal was strong enough to justify the real build, and the data team then defined what actually makes a listing popular.\n\nThe next step turned it into a login moment. Logged-out users see the numbers blurred, and showing a sign-in prompt when this information was gated created a relevant reason to log in at the moment of interest.\n\nThe feature was already live on web. The internal results presentation reported that 5% of login attempts were driven by popularity, while the feature accounted for 2% of total logged-in users. These are different denominators: the feature created login intent, but some users dropped out before completing login. That drop-off made the case for redesigning the login itself.",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/pop-0-label-list.png", alt: "Search results with a Sehr beliebt label on listings", caption: "The \"Popular\" label, first tested on random listings" },
            { src: "/images/projects/project-7/screens/pop-0-label-detail.png", alt: "Detail page with the popular label", caption: "The label on the detail page" },
            { src: "/images/projects/project-7/screens/pop-1-blurred.png", alt: "Popularity section with blurred views and favourites", caption: "Logged out: numbers blurred, with a reason to sign in" },
            { src: "/images/projects/project-7/screens/pop-2-legacy-login.png", alt: "Legacy login screen", caption: "The old login screen" },
            { src: "/images/projects/project-7/screens/pop-3-revealed.png", alt: "Popularity section showing interactions and favourites", caption: "Logged in: interactions and favourites revealed" },
          ],
        },
      },
      {
        heading: "4. Redesigning the Login",
        body: "The existing login screen felt outdated, its visual design had not kept up with the rest of the product, and its hierarchy did not follow established login patterns. I audited it against guidance from Nielsen Norman Group and Baymard Institute.\n\nThe redesign made the value of signing in clearer (track price drops, save Favourites, check if a price is fair), brought Google, Apple and Facebook options above the email form, established one primary action and widened the desktop modal for better readability, so long German words no longer break. I designed it for three contexts: a full page, a popup over the page the user came from, and mobile web.\n\nWe launched it in Austria first and monitored it for two weeks. Logins held up, dealer login rates didn't dip, and there were no security issues, so it was rolled out to all markets.",
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
            { src: "/images/projects/project-7/screens/login-fullpage.png", alt: "Full-page login with value proposition and social sign-in", caption: "Full page: room for imagery and a dealer card" },
            { src: "/images/projects/project-7/screens/login-popup.png", alt: "Login popup over the homepage", caption: "Popup: users keep their place on the page" },
          ],
        },
      },
      {
        heading: "Dealer Entry Point: The Trade-off",
        body: "The dealer login created a genuine trade-off. Its original full-width button sat near the top and interrupted the main consumer journey. Dealer-side stakeholders needed the entry point to remain visible, but most users were private buyers.\n\nI proposed a text link at the bottom; market managers pushed back to protect a key segment. The chosen direction moved dealer access lower and made it a secondary outlined button, with a dedicated dealer card on the full page where there's room for it: still discoverable for dealers, but less likely to distract buyers. Further testing of the text link was planned as a next step.",
        image: {
          src: "/images/projects/project-7/detail-2.png",
          alt: "Dealer entry point as a text link compared with a secondary outlined button",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "The Registration Flow",
        body: "On mobile web, the whole journey happens in a few steps. Social sign-in comes first. Email users get password rules checked as they type, so errors are prevented rather than reported. Consent and the captcha stay on the same screen, and users land back where they started with a short welcome message.",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/reg-1-start.png", alt: "Sign in or register screen", caption: "Social first, email second" },
            { src: "/images/projects/project-7/screens/reg-2-email.png", alt: "Email address entered", caption: "One field to start" },
            { src: "/images/projects/project-7/screens/reg-3-password.png", alt: "Create account with live password rules", caption: "Password rules checked as you type" },
            { src: "/images/projects/project-7/screens/reg-4-consent.png", alt: "Consent checkbox and captcha completed", caption: "Consent and captcha on one screen" },
            { src: "/images/projects/project-7/screens/reg-5-welcome.png", alt: "Homepage with a welcome message", caption: "Back where they started, signed in" },
          ],
        },
      },
      {
        heading: "Edge Cases & Recovery",
        body: "Every error tells users what went wrong and how to fix it, right where it happened. A wrong password puts recovery one tap away, and password reset uses a six-digit code instead of a link, so users never have to leave the flow. That code pattern became the starting point for the next step: removing passwords altogether.",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/err-email.png", alt: "Invalid email error", caption: "Invalid email" },
            { src: "/images/projects/project-7/screens/err-password.png", alt: "Password requirements not met", caption: "Password rules not met" },
            { src: "/images/projects/project-7/screens/err-signin.png", alt: "Wrong password with forgot password link", caption: "Wrong password, recovery one tap away" },
            { src: "/images/projects/project-7/screens/rec-code.png", alt: "Enter six-digit reset code", caption: "Six-digit reset code" },
            { src: "/images/projects/project-7/screens/err-code.png", alt: "Incomplete code error", caption: "Incomplete code" },
            { src: "/images/projects/project-7/screens/rec-new-password.png", alt: "Create a new password", caption: "New password, same live rules" },
          ],
        },
      },
      {
        heading: "Next Step: One-Time Codes",
        body: "After the rollout, the next source of friction was the password itself: creating one, meeting the rules, and forgetting it later. With Trust & Identity, I designed a planned next step that replaces passwords for email users with a six-digit code sent by email. The same flow handles both sign-in and registration, so users don't need to know whether they already have an account. The code expires after ten minutes, and the input gives clear feedback when it's incomplete.\n\nOther planned follow-ups included contextual login variants for different entry points and removing the labels from the social sign-in buttons.",
        gallery: {
          caption: "Planned next step: designed, not confirmed as shipped",
          items: [
            { src: "/images/projects/project-7/screens/otp-1-email.png", alt: "Sign in or register with an email address entered", caption: "One entry point for sign-in and registration" },
            { src: "/images/projects/project-7/screens/otp-2-new-account.png", alt: "New account screen with consent and continue", caption: "New users only confirm consent" },
            { src: "/images/projects/project-7/screens/otp-3-code.png", alt: "Enter the six-digit code", caption: "A six-digit code instead of a password" },
            { src: "/images/projects/project-7/screens/otp-4-filled.png", alt: "Code entered", caption: "Code entered" },
            { src: "/images/projects/project-7/screens/otp-5-error.png", alt: "Incomplete code error", caption: "Clear feedback when it's incomplete" },
            { src: "/images/projects/project-7/screens/reg-5-welcome.png", alt: "Homepage with a welcome message", caption: "Signed in, back where they started" },
          ],
        },
      },
      {
        heading: "5. Saved Search: From Soft Sign-up to One Tap",
        body: "Saving a search is a high-intent moment, so it became a testing ground. The flow went through several versions, each built on what the previous one taught us.\n\nV2 was a soft, email-first sign-up: users subscribed to alerts without feeling blocked by account creation. V3 removed the separate success step and let the login screen carry the confirmation, which only became possible with the new, customisable login dialog. V4 replaced the soft ending with a sign-in bottom sheet. We tested Apple only, Google only and both, because many iPhone users rely on Google as their main account. Even so, Apple alone performed best on iPhones, so the direction was one button per platform: Apple on iOS, Google on Android.\n\nThe hypothesis was that the lower friction of social login would outweigh the added requirement.",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/sase-v2-soft.png", alt: "Search saved dialog asking for an email address", caption: "V2: soft sign-up, email only" },
            { src: "/images/projects/project-7/screens/sase-v3-login.png", alt: "Login screen confirming matching vehicles will be sent by email", caption: "V3: the login screen is the confirmation" },
            { src: "/images/projects/project-7/screens/sase-v4-apple.png", alt: "Bottom sheet with Continue with Apple", caption: "V4 on iOS: Apple only" },
            { src: "/images/projects/project-7/screens/sase-v4-both.png", alt: "Bottom sheet with Apple and Google sign-in", caption: "V4 test: both, which lost to Apple only" },
          ],
        },
      },
      {
        heading: "Outcomes, Initiative by Initiative",
        body: "Each initiative was measured on its own, with its own platform and metric, so the results below shouldn't be added together or read as one login-redesign result.\n\nNew app onboarding: associated with a 25% increase in app logged-in users.\n\nPrice-history login: associated with 3% more logged-in iOS users, 14.5% more web logins and 24.6% more web registrations.\n\nPopularity: drove 5% of login attempts, with a reported 1% increase in registrations.\n\nLogin redesign: piloted in Austria with dealer login rates holding steady, then rolled out to all markets.",
      },
      {
        heading: "The Vision: AutoScout24 Club",
        body: "I developed the AutoScout24 Club vision to connect separate logged-in benefits into a coherent membership proposition. Rather than asking users to register for its own sake, the idea was to make an account feel more valuable through useful vehicle insights, convenience features, exclusive benefits and a more consistent member experience.\n\nThe concept explored price history, price evaluation, listing popularity, information such as how long a listing had been online, saved vehicles and search updates, own-car price insights, early access to new listings, exclusive dealer offers, and trust and membership signals such as a verified buyer profile and exclusive content.\n\nThe vision was intended to make the value exchange clearer: users would have practical reasons to maintain an account, while AutoScout24 could build a more continuous relationship with them. I left the company before I could confirm what happened to the concept afterward, so it is presented here as a vision, not a launched product.",
        image: {
          src: "/images/projects/project-7/detail-3.png",
          alt: "AutoScout24 Club landing page concept",
          width: 1200,
          height: 800,
        },
        imageCaption: "Vision — not confirmed as shipped",
      },
      {
        heading: "What I Learned",
        body: "Timing beats persuasion. When users already see the value, the most direct path to login works best.\n\nSmall experiments compound. None of these changes was dramatic on its own, but each one told us what to try next.\n\nThe right answer can differ per platform. App and web users logged in for different reasons, so a single shared solution would have under-served both.\n\nThe work connected immediate UX improvements with a broader product direction: give users a clear reason to sign in, make the step easier, and build toward an account experience that keeps delivering value over time.",
      },
    ],
  },
  {
    id: 1,
    slug: "favourites-redesign",
    status: "published",
    title: "Favourites Redesign",
    subtitle: "From a List of Links to a Working Space",
    description:
      "Made Favourites a working space for car buyers: contact from the card, page-level sorting and bulk actions, clearer states. +5.53% enquiries in the contact-CTA test.",
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
      "Favourites is where car shoppers keep track of vehicles they may want to come back to, and one of AutoScout24's most active screens. But the existing experience made important next steps harder than they needed to be: contacting a seller required opening a detail page, managing several saved vehicles was cumbersome, and sold listings could be difficult to distinguish from available ones. The redesign focused on making Favourites more useful as a working space for a buyer, not just a place to store vehicle links.",
    sections: [
      {
        heading: "My Role & Team",
        body: "I led the Favourites redesign, using user research and experiment results to prioritise improvements to the saved-vehicle experience across platforms. I worked with a PM, app and web engineers, a data analyst and UX Research, from Q1 to Q2 2025.",
      },
      {
        heading: "The Problem",
        body: "The screen was a passive list with no clear next step. Users couldn't contact a seller without opening the detail page, couldn't sort or remove several vehicles at once, and sold listings looked much like available ones. A screen sitting at an important decision point did little to move users forward.",
        image: {
          src: "/images/projects/project-1/detail-1.png",
          alt: "Original Favourites screen",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "Research",
        body: "I ran a survey with 1,142 respondents across Android and iOS to better understand how people used Favourites and what they needed from it. The research explored behaviours such as reviewing saved cars, comparing prices, checking for listing changes and understanding how long a vehicle had been online.\n\nThe findings helped focus the redesign on practical tasks: make seller contact easier, make saved listings easier to manage, and surface useful listing information without forcing users to open every detail page.",
      },
      {
        heading: "Constraints & Design Decisions",
        body: "Favourites cards needed to match the established search-result card. Search cards had already been refined through A/B testing, so reusing that pattern kept vehicle information and actions consistent across the journey. The main opportunity was not to invent a new card style, but to improve the controls and states around saved vehicles.\n\nThe card itself needed to support the next action. Adding a contact button let users reach the seller directly from Favourites instead of opening the detail page first. That was the biggest bet: it saves a click at the right moment, but could also bring lower-quality leads from quick taps, so we tested it rather than debated it.\n\nAt page level, users needed better ways to organise and manage saved vehicles: sorting by date, price, mileage and year; removing individual or multiple vehicles; and recovering from an accidental removal with undo. The recommender sits below the saved vehicles so it doesn't interrupt the primary task.",
        gallery: {
          variant: "cards",
          items: [
            { src: "/images/projects/project-1/screens/card-search.png", alt: "Search results card", caption: "Search results card: the established pattern" },
            { src: "/images/projects/project-1/screens/card-favourites.png", alt: "Favourites card with email and call buttons", caption: "Favourites card: same pattern, with contact on the card" },
          ],
        },
      },
      {
        heading: "Listing States",
        body: "The card needed to communicate more than vehicle details. Different states help users understand what kind of listing they're looking at and whether it is still available. The cards below are the iOS versions, all on the same structure.\n\nTwo states mattered most. A contacted car says when the user got in touch, so they don't contact the same seller twice. A car that is no longer available is greyed out with a one-tap delete, so it's clearly distinct from cars still on sale.\n\nImage size follows each platform's search card: small on iOS, large on mobile web.",
        gallery: {
          variant: "cards",
          items: [
            { src: "/images/projects/project-1/screens/card-max.png", alt: "Card with deal badges, price drop and financing", caption: "Super Deal with a price drop" },
            { src: "/images/projects/project-1/screens/card-contacted.png", alt: "Card marked as contacted with a date", caption: "Contacted, with the date" },
            { src: "/images/projects/project-1/screens/card-unavailable.png", alt: "Greyed-out card for a vehicle no longer available", caption: "No longer available, one-tap delete" },
            { src: "/images/projects/project-1/screens/card-private.png", alt: "Card for a private seller", caption: "Private seller" },
            { src: "/images/projects/project-1/screens/card-leasing.png", alt: "Leasing offer card with monthly price and terms", caption: "Leasing offer, monthly price first" },
            { src: "/images/projects/project-1/screens/card-sponsored.png", alt: "Sponsored listing card", caption: "Sponsored, clearly labelled" },
          ],
        },
      },
      {
        heading: "The Favourites Screen",
        body: "On iOS the page follows platform conventions: a native sort sheet with the options users asked for in the survey, removal confirmed with a snackbar that offers undo instead of a blocking dialog, and full dark mode support. Below the saved vehicles, a recommender of similar cars keeps discovery going without pulling users away from their Favourites.",
        gallery: {
          items: [
            { src: "/images/projects/project-1/screens/fav-list.png", alt: "Favourites list on iOS", caption: "Favourites on iOS" },
            { src: "/images/projects/project-1/screens/fav-sort.png", alt: "Sort bottom sheet", caption: "Page-level sorting" },
            { src: "/images/projects/project-1/screens/fav-removed-undo.png", alt: "Vehicle removed with an undo snackbar", caption: "Removed, with undo" },
            { src: "/images/projects/project-1/screens/fav-recommender.png", alt: "Similar vehicles recommended below the Favourites", caption: "Recommender below the Favourites" },
            { src: "/images/projects/project-1/screens/fav-list-dark.png", alt: "Favourites list in dark mode", caption: "Dark mode" },
          ],
        },
      },
      {
        heading: "Mobile Web & Empty State",
        body: "On mobile web the card leads with a large, swipeable photo, following the mobile web search card.\n\nThe empty state explains the value of saving vehicles and encourages users to save their first one, so the purpose of Favourites is clear before anything has been added. The message stays consistent across platforms while adapting to each layout.",
        gallery: {
          items: [
            { src: "/images/projects/project-1/screens/fav-mweb-list.png", alt: "Favourites on mobile web with a large photo card", caption: "Large photos on mobile web" },
            { src: "/images/projects/project-1/screens/fav-mweb-empty.png", alt: "Empty Favourites state with benefits and a search button", caption: "Empty state: why to save, and where to start" },
          ],
        },
      },
      {
        heading: "Desktop",
        body: "On desktop the same card spreads into a horizontal layout inside the account area, with the photo, price rating and both contact actions visible at once.",
        gallery: {
          variant: "desktop",
          items: [
            { src: "/images/projects/project-1/screens/fav-desktop.png", alt: "Favourites page on desktop web", caption: "Favourites on desktop" },
          ],
        },
      },
      {
        heading: "Outcome: +5.53% Enquiries",
        body: "The contact-CTA experiment, a 7-day Android test across all users and all markets, showed a +5.53% increase in enquiries. That result belongs to the contact button on the card; the experiment didn't isolate the other parts of the redesign.\n\nUsers were ready to act from Favourites; they just needed the path made easy.",
      },
      {
        heading: "Further Exploration",
        body: "Further ideas explored how Favourites could support the buying journey over time. These were explorations, separate from the contact-CTA result.\n\nPersonal dealer offers. A car in someone's Favourites is a strong buying signal, so we explored letting dealers send those users a personal offer, shown on the card as a collapsible panel with the date it arrived.\n\nA recommender on web, so similar cars appear below Favourites there too.\n\nEmail updates. A toggle at the top of Favourites would let users subscribe to updates on price drops, high demand and availability, confirmed with a snackbar and mirrored in their account notification settings.",
        gallery: {
          variant: "cards",
          size: "small",
          caption: "Exploration",
          items: [
            { src: "/images/projects/project-1/screens/offer-collapsed.png", alt: "Card with a collapsed personal dealer offer", caption: "Personal dealer offer, collapsed" },
            { src: "/images/projects/project-1/screens/offer-expanded.png", alt: "Card with an expanded personal dealer offer", caption: "Expanded, with the date it arrived" },
          ],
        },
      },
      {
        heading: "Email Updates",
        body: "One switch, with clear feedback both ways, and the same setting available in the account notification settings.",
        gallery: {
          caption: "Exploration",
          items: [
            { src: "/images/projects/project-1/screens/toggle-on.png", alt: "Favourites with the email updates toggle on and a confirmation snackbar", caption: "Subscribed, confirmed with a snackbar" },
            { src: "/images/projects/project-1/screens/toggle-off.png", alt: "Favourites with the email updates toggle off", caption: "Unsubscribed, with the same clarity" },
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
    subtitle: "Personalising the Front Door",
    description:
      "Experiments on which cars to recommend on the app home screen and how to browse them, including a familiar pattern that lost in its A/B test.",
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
      "AutoScout24's home screen highlighted the newest vehicles, but the selection was not tailored to individual users, and 43% of users said they couldn't find what they were looking for. The opportunity was to help people discover more relevant cars through recommendations shaped by their behaviour and interests.",
    sections: [
      {
        heading: "My Role & Team",
        body: "I worked with the app team across iOS and Android, a PM and four engineers, from Q4 2024 to Q3 2025. I designed every iteration and explored both sides of the experience: which vehicles to recommend, and how the interface should help users browse those recommendations.",
      },
      {
        heading: "Recommendation Pool & Feed Simplification",
        body: "One workstream explored reducing clutter in recommendation cards and increasing the number of vehicles visible in the feed. The proposal removed low-usage playlists and last-search listing cards that duplicated other routes into content, simplified each card to model, price and key facts, and increased the visible recommendation pool from 15 to 50 vehicles.\n\nThe hypothesis was that a cleaner feed with more relevant vehicles would create a more consistent discovery experience and encourage deeper browsing. The work was planned as phased experiments, with success evaluated against the team's habit metric: users reaching more than six detail-page views in their first week.\n\nA second planned phase explored adding variety to the feed by mixing higher- and lower-scoring recommendations and showing a broader range of vehicle visuals. This remained a hypothesis.",
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/hs-0-baseline.png", alt: "Original recommendations with long titles, badges and seller type", caption: "Before: long titles, badges and seller type on every card" },
            { src: "/images/projects/project-2/screens/hs-2-simplified.png", alt: "Simplified recommendation cards", caption: "Feed simplification: model, price and key facts, more vehicles" },
          ],
        },
      },
      {
        heading: "Navigation Experiments",
        body: "Next, we tested a Netflix-style concept: a vertical feed of horizontal rows, with recommendations grouped by type. In user testing participants found the categories intuitive, but it underperformed in the iOS A/B test, with a 20.9% decrease in home recommendation-card clicks and a 1.5% decrease in detail-page lead conversions.\n\nRather than force the pattern, I designed a tabbed layout that kept the categories but removed the horizontal scroll. The tabs approach was reported at +7% clicks and +12% overall engagement. A later iteration replaced the tabs with chips, so more recommendation types fit without crowding.\n\nThe grid also became an endless feed. A recommender has no natural end, so recommendations load in batches of 25: the first with the page, the next in the background as the user nears the end.\n\nThe learning was not that one familiar pattern always works better than another. The experience needed to fit the way people discover and compare cars, and recommender engagement needed to be evaluated separately from downstream seller interest. User testing tells you whether people understand a design, not always how they'll behave with it.",
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/hs-3-horizontal.png", alt: "Horizontal rows grouped by recommendation type", caption: "Netflix-style rows: −20.9% card clicks in the iOS A/B test" },
            { src: "/images/projects/project-2/screens/hs-4-tabs.png", alt: "Tabbed layout with recommendations and deals tabs", caption: "Tabs: +7% clicks, +12% overall engagement" },
            { src: "/images/projects/project-2/screens/hs-5-chips.png", alt: "Recommendation types as chips with load more", caption: "Chips: more recommendation types, no crowding" },
          ],
        },
      },
      {
        heading: "Beyond the Home Screen",
        body: "The same recommender also lived on the vehicle detail page, at the very bottom, below the seller details. I designed an experiment that moved it up, directly after the vehicle description, to catch people who were unsure about the car they were looking at.\n\nRecommender engagement stayed roughly the same, but engagement with everything below it dropped, including the seller details. A higher position didn't create new interest, it only moved attention around, so we rolled it back. It was a useful reminder to measure the whole page, not just the component being tested.",
        gallery: {
          variant: "cards",
          items: [
            { src: "/images/projects/project-2/screens/dp-before.png", alt: "Detail page with the recommender at the very bottom", caption: "Before: recommender at the very end" },
            { src: "/images/projects/project-2/screens/dp-after.png", alt: "Detail page with the recommender after the vehicle description", caption: "Experiment: right after the description, rolled back" },
          ],
        },
      },
      {
        heading: "Outcome",
        body: "The work explored how recommendation relevance, feed density and navigation interact. The experiments compared different ways of presenting cars and moving between categories, rather than assuming a familiar pattern would automatically improve discovery. Clicks, overall engagement, detail-page views and lead conversions were kept as separate measures.\n\nComparing recommendation types also showed a clear ranking: 'Based on your last view' and 'Reduced offers' performed best, followed by 'Based on your last search', which set the order of categories in the final design.",
        image: {
          src: "/images/projects/project-2/detail-3.png",
          alt: "Final recommendation layout with category chips",
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
    subtitle: "Making Room for Discounts",
    description:
      "Explored how to give Super Deals a place in a full bottom navigation, and validated three ways of merging Favourites and Saved Searches with users.",
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
      "AutoScout24's Super Deals offered discounted vehicles, listings priced at least 3.5% or €300 below market value, but they were not easy to discover in the app. There was evidence that users were interested in deals; the challenge was to give them a clearer entry point without overcrowding the existing navigation.",
    sections: [
      {
        heading: "The Opportunity",
        body: "Super Deals made up just 2% of detail page views but drove 13% of all web enquiries. On sister marketplace LeasingMarkt.de, deals generated 30% of revenue from only 2% of listings. Market research pointed the same way: most European consumers rank value for money as their top purchase criterion. Users were already looking for deals; the app wasn't showing them where.",
        image: {
          src: "/images/projects/project-3/detail-1.png",
          alt: "Super Deals opportunity data",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "My Role & Team",
        body: "I led product design for the Deals entry-point exploration in Q2 2025, working with product and engineering to assess navigation options, validate concepts with users, and explore alternative placements for Super Deals.",
      },
      {
        heading: "Constraint: Five Tabs, No Room",
        body: "The app already used all five bottom-navigation slots, a familiar pattern on iOS and Android. Adding a sixth tab was not an option.\n\nProfile could move into the header: an occasional task didn't need a permanent tab. To make room for Deals, I explored combining Favourites and Saved Searches under one \"Saved\" destination. Both are things users save for later: vehicles they want to revisit and searches they want to keep track of. The challenge was to preserve the mental model for both types of saved content while freeing a navigation slot for a new destination.",
        gallery: {
          items: [
            { src: "/images/projects/project-3/screens/deals-before.png", alt: "Home screen before, with five tabs and no deals", caption: "Before: five tabs, no route to deals" },
            { src: "/images/projects/project-3/screens/deals-list.png", alt: "Deals results list", caption: "Proposed Deals destination: a filtered list of Super Deals" },
          ],
        },
      },
      {
        heading: "Three Saved Concepts",
        body: "I prototyped three versions of the Saved destination. Bottom sheet: let users choose between Favourites and Saved Searches. Stacked sections: show saved vehicles and saved searches as two areas on the same screen. Filter tabs: let users switch between saved vehicles and saved searches within one destination.\n\nThese concepts explored trade-offs between visibility, navigation depth and the effort required to switch between saved content. An unmoderated prototype test with seven participants helped assess whether people understood the proposed navigation and where they clicked. It was concept validation, not a production experiment.\n\nSix of seven participants preferred the stacked sections: it gave the clearest overview and made combining the two feel logical. The bottom sheet felt too minimal and disconnected, and the filter tabs risked being missed. Participants also showed appetite for a Deals destination and expected deals to be personalised to their searches.",
        gallery: {
          caption: "Unmoderated prototype test: usability and concept validation",
          items: [
            { src: "/images/projects/project-3/screens/saved-v1-sheet.png", alt: "Saved as a bottom sheet with two links", caption: "Concept 1: bottom sheet" },
            { src: "/images/projects/project-3/screens/saved-v2-overview.png", alt: "Saved page showing Favourites and saved searches as stacked sections", caption: "Concept 2: stacked sections, preferred by 6 of 7" },
            { src: "/images/projects/project-3/screens/saved-v3-tabs.png", alt: "Saved page with two filter tabs", caption: "Concept 3: filter tabs" },
          ],
        },
      },
      {
        heading: "What Happened Next",
        body: "The proposed Deals bottom-navigation tab did not ship. Deals later appeared in the iOS home-screen recommender, where \"Reduced offers\" is one of the recommendation types, and on the web homepage, creating additional discovery surfaces without relying on the proposed navigation change.\n\nThese outcomes are separate. The prototype test doesn't establish that the bottom-navigation concept would have increased detail-page views or enquiries, and the later placements aren't evidence that the tab shipped.",
        gallery: {
          items: [
            { src: "/images/projects/project-3/screens/rec-reduced-offers.png", alt: "iOS home-screen recommendations with Reduced offers selected", caption: "Reduced offers in the iOS home-screen recommender" },
            { src: "/images/projects/project-3/screens/rec-superdeals-promo.png", alt: "Super Deals promotion on the app home screen", caption: "Super Deals promoted further down the app home screen" },
          ],
        },
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
