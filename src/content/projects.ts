import { Project } from "./types";

// "[verify: …]" marks figures and facts still to confirm before submitting.

export const selectedProjects: Project[] = [
  {
    id: 7,
    slug: "growing-logged-in-users",
    status: "published",
    title: "Growing Logged-in Users",
    subtitle: "Five Experiments, One OKR",
    description:
      "A year-long programme to turn anonymous browsers into members, from the first app open to the login screen itself. One experiment nearly doubled the login rate.",
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
      "Most people use AutoScout24 like a one-off marketplace: they search, browse and leave without ever logging in. Logged-in users enquire more, come back more and give dealers better leads, so the company set an OKR to grow the share of logged-in users by 50% by the end of 2026. I designed most of the experiments behind that goal, across apps and web, over [verify: timeframe, e.g. mid-2025 to autumn 2026].",
    sections: [
      {
        heading: "The Problem",
        body: "Logged-in users behaved very differently. On web, their enquiry conversion rate was 75% higher than for logged-out users, they viewed 40% more vehicle detail pages per week, and they had a third more sessions coming from CRM channels.\n\nYet people saw little reason to sign up. They used the platform infrequently, had privacy concerns, saw no clear benefit, and the site worked perfectly well without an account.\n\nA login behaviour deep dive by our Buyer Analytics team shaped the strategy. Most logins happened in a user's very first session, and logging in tended to mark the point where a buying journey was intensifying. But users who delayed logging in still browsed and enquired for about a week beforehand. A hard login wall would have blocked real marketplace demand. The job was to make the value of logging in obvious at the moment people were ready for it, and to remove every bit of friction once they were.",
      },
      {
        heading: "My Role & Team",
        body: "[verify: who was on the team, e.g. PM, engineers per platform, Buyer Analytics, Trust & Identity, and how the work was split.]\n\nI owned the end-to-end design of every experiment in this case study: framing the hypotheses with the PM, designing all states across iOS, Android, web and mWeb, preparing test variants, and presenting results and next steps to the wider design and product organisation at UX All Hands.",
      },
      {
        heading: "Constraints",
        body: "No hard walls. The analytics showed that blocking logged-out users would cost leads, so every login moment had to be optional or tied to a clear, immediate benefit.\n\nTwo audiences, one screen. Dealers log in through the same entry point as private buyers, and they are a key business segment. Anything that made their path harder needed sign-off from market managers.\n\nFour platforms behaving differently. Apps were already far more logged-in than web, and mWeb was the largest, mostly logged-out surface. One pattern rarely fitted all four.\n\nSecurity and identity rules. Authentication changes went through the Trust & Identity team, a mandatory click captcha sat in the flow, and long German compound words had to fit every layout across markets.",
      },
      {
        heading: "1. The First App Open",
        body: "The app's launch sequence had grown screen by screen, with no clear value proposition and no moment to register. Users slipped straight into an anonymous session.\n\nI rebuilt it as one unified, scalable sequence: tell users why before asking for anything, put registration early, and leave room to add steps later. I explored three directions. Static full-bleed images broke down across light and dark mode and varying text lengths in different languages. A feature walkthrough solved contrast but felt dated. Video handled both and gave the first open an emotional moment, so that's what we chose.\n\nPlatform conventions shaped the details. iOS only allows one system notification prompt, so the app explains the benefit first and shows Apple's prompt only after a yes. Registration always offers a clear way to continue without an account.\n\nWe A/B tested it on iOS in Q1 2026. Logged-in users on iOS grew by 40%, and push opt-in rose by about 20%. Sessions dipped slightly, an accepted trade-off for adding steps up front, while detail page views and enquiries were unaffected. Android followed.",
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
        body: "Price history was already behind a login wall on mobile, and the wall caused no significant drop in leads. The next step was bringing it to web.\n\nMy first web version showed the entry point and went straight to login. It felt like the login was doing all the work before the value was clear, so I designed a teaser: the Price Insights dialog showed the price rating and asked users to log in to unlock the history. That made the flow heavier: entry point, teaser, login, then feature.\n\nWe tested both. Users who went straight to a dedicated, purpose-specific login were about 16% more likely to log in than those who saw the teaser. The value was already obvious at the point of intent, and extra persuasion behaved like friction.\n\nThat result became the principle for every later experiment: communicate the value at the point of intent, then keep authentication as direct as possible.",
        gallery: {
          variant: "desktop",
          items: [
            { src: "/images/projects/project-7/screens/ph-teaser-desktop.png", alt: "Price Insights dialog with locked price history and an unlock button", caption: "Tested: a teaser dialog that unlocks the history after login" },
            { src: "/images/projects/project-7/screens/ph-direct-desktop.png", alt: "Dedicated login dialog titled See how this car is priced", caption: "Shipped: a direct login framed around the insight, about 16% more logins" },
          ],
        },
      },
      {
        heading: "The Shipped Flow",
        body: "After login, users land back on the listing with the full insight open. I redesigned the view to do the maths for them: where the price sits against the market, the total price reduction, and every change shown in euros rather than percentages. Each price rating (below, at or above market, or no data) has its own state. I then aligned web, iOS and Android on this one pattern. [verify: headline outcome, e.g. web logins and registrations]",
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
        heading: "3. Popularity: Finding the Leak",
        body: "Showing how many people viewed and saved a listing gives buyers social proof, and blurring it for logged-out users creates a natural reason to sign in. Before building anything, we ran a fake-door test: logged-out users saw blurred views and favourites, and tapping them showed a short work-in-progress message. [verify: what the fake-door test showed] Usability sessions confirmed people actively looked for this information.\n\nOnce live on web, it drove 5% of all login attempts. But the data also showed a gap: only 2% of logged-in users came through it, so a meaningful share of people who started to log in never finished. The feature worked; the old login screen was losing them. That finding made the case for redesigning the login itself.",
        image: {
          src: "/images/projects/project-7/screens/pop-fakedoor.png",
          alt: "Fake-door test dialog on the vehicle detail page",
          width: 1440,
          height: 1024,
        },
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/pop-1-blurred.png", alt: "Popularity section with blurred views and favourites", caption: "Logged out: numbers blurred, with a reason to sign in" },
            { src: "/images/projects/project-7/screens/pop-2-legacy-login.png", alt: "Legacy login screen", caption: "The old login screen, where users dropped off" },
            { src: "/images/projects/project-7/screens/pop-3-revealed.png", alt: "Popularity section showing interactions and favourites", caption: "Logged in: interactions and favourites revealed" },
          ],
        },
      },
      {
        heading: "4. Fixing the Login Screen",
        body: "I audited the login screen against guidance from Nielsen Norman Group and Baymard Institute. It failed all four standards: reduce cognitive load at the point of entry, make social login prominent and place it before the email form, explain what users get by logging in, and give the screen one clear primary action.\n\nThe redesign leads with why to log in (track price drops, save favourites, check if a price is fair), puts Google, Apple and Facebook sign-in first, and makes email the second option. The modal is wider so long German words no longer break. I designed it for three contexts: a full page, a popup over the page the user came from, and mobile web. It launched first in Austria. [verify: rollout status and result]",
        image: {
          src: "/images/projects/project-7/detail-1.png",
          alt: "Legacy login modal compared with the redesigned login modal",
          width: 1200,
          height: 800,
        },
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
        body: "The legacy screen put a full-width dealer button at the very top, so every private buyer had to skip past it. I proposed a text link at the bottom; market managers pushed back to protect a key segment.\n\nWe settled on a secondary outlined button at the bottom of the popup and mobile screens, and a dedicated dealer card on the full page, where there's room for it. Dealers know they have a separate account and look for it, so it stays findable without competing with the main journey. We agreed to monitor dealer login rates and keep the text link as a follow-up test.",
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
        body: "Every error tells users what went wrong and how to fix it, right where it happened. A wrong password puts recovery one tap away, and password reset uses a six-digit code instead of a link, so users never have to leave the flow.",
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
        heading: "5. Saved Search: From Soft Sign-up to One Tap",
        body: "Saving a search is a high-intent moment, so it became our testing ground. The flow went through several versions, each built on what the previous one taught us.\n\nV2 was a soft, email-first sign-up: users subscribed to alerts without feeling blocked by account creation. I explored a one-time code to turn that email into an account without any password, which needed sign-off from Trust & Identity. V3 removed the separate success step and let the login screen carry the confirmation, which only became possible with the new, customisable login dialog. V4 replaced the soft ending with a mandatory sign-in bottom sheet. We tested Apple only, Google only and both, because many iPhone users rely on Google as their main account. [verify: which variant won]\n\nThe hypothesis was that the lower friction of social login would outweigh the added requirement. It did: the login rate in the flow rose from 17% to 32%, an increase of about 90%, and logged-in users grew by about 2% across all platforms.",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/sase-v2-soft.png", alt: "Search saved dialog asking for an email address", caption: "V2: soft sign-up, email only" },
            { src: "/images/projects/project-7/screens/sase-v3-login.png", alt: "Login screen confirming matching vehicles will be sent by email", caption: "V3: the login screen is the confirmation" },
            { src: "/images/projects/project-7/screens/sase-v4-apple.png", alt: "Bottom sheet with Continue with Apple", caption: "V4 test: Apple only" },
            { src: "/images/projects/project-7/screens/sase-v4-both.png", alt: "Bottom sheet with Apple and Google sign-in", caption: "V4 test: Apple and Google" },
          ],
        },
      },
      {
        heading: "Outcome",
        body: "Each experiment moved the number on its own: 40% more logged-in iOS users from the new app launch sequence, about 16% more logins from direct login on price history, 5% of login attempts from popularity, and a near doubling of the login rate in saved search.\n\nTogether they shifted how the company approached login: from a wall to a series of well-timed, low-friction invitations. [verify: overall progress against the OKR, e.g. share of weekly active users logged in]",
      },
      {
        heading: "Where It Was Heading",
        body: "The work pointed towards a bigger idea I developed for the team: the AutoScout24 Club. Instead of asking users to log in, invite them to join, with member benefits such as price insights, early access to new listings and a verified buyer profile. It stayed a vision rather than a shipped product, but it gave the roadmap a clear direction: make logging in feel like joining something worth belonging to.",
        image: {
          src: "/images/projects/project-7/detail-3.png",
          alt: "AutoScout24 Club landing page concept",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "What I Learned",
        body: "Timing beats persuasion. When users already see the value, the fastest path to login converts best.\n\nSmall experiments compound. None of these changes was dramatic on its own, but each one told us what to try next.\n\nThe right answer can differ per platform. App and web users logged in for different reasons, so a single shared solution would have under-served both.",
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
      "Turned one of AutoScout24's most-visited screens from a passive list into a conversion surface, delivering ~5.5% more enquiries.",
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
      "Favourites was one of AutoScout24's five most-visited screens. Users came back to it again and again as a personal shortlist, yet it hadn't been redesigned in years and gave them almost no way to act. The goal: turn the screen where buyers make their decision into one that helps them make it.",
    sections: [
      {
        heading: "The Problem",
        body: "The screen was a passive list with no hierarchy and no clear next step. Users couldn't tell at a glance whether a price was competitive, couldn't contact a seller without leaving the list, couldn't sort or remove vehicles in bulk, and hit a dead end when a listing was sold. A screen sitting at the most important decision point did almost nothing to move users forward.",
        image: {
          src: "/images/projects/project-1/screens/card-before.png",
          alt: "The previous Favourites card on mobile web",
          width: 351,
          height: 659,
        },
      },
      {
        heading: "My Role & Team",
        body: "[verify: team, timeframe and platforms shipped.]\n\nI led the project from research to release: I ran the user survey, mapped the opportunities, designed the new card and screen across iOS, Android and web, and worked with engineering on the A/B test.",
      },
      {
        heading: "Research",
        body: "I ran a survey across the German and Austrian markets with 1,142 respondents on iOS and Android. Users treat Favourites as a shortlist to narrow down their choices. Price is the main thing they track, they check back regularly for updates, and they want to know how long a car has been listed. Mapping these needs against the existing screen surfaced over a dozen improvement opportunities.",
      },
      {
        heading: "Constraints",
        body: "The vehicle card had to stay consistent with the search result cards used across web, iOS and Android, built from the existing design system. A completely new card would have broken recognition and doubled maintenance.\n\nThe question was how far Favourites could depart from search while still feeling like the same product.",
      },
      {
        heading: "Decisions & Trade-offs",
        body: "Same language, richer actions. I kept the search card's structure and attribute pills, but made price the most prominent element, paired with an indicator showing whether it's a good deal. On search, a card's job is to get users to the detail page. On Favourites, users have already chosen, so the card could go further: a swipeable gallery and a direct contact button, right on the shortlist.\n\nThe contact button was the biggest bet. Putting the main buying action on the card saves a click at exactly the right moment, but it also risked lower-quality leads from quick taps. We chose to test it rather than debate it.\n\nAround the card, I added sorting by date added, price, mileage and year, single and bulk removal, and a recommender of similar vehicles at the end of the list.",
        image: {
          src: "/images/projects/project-1/detail-2.png",
          alt: "Favourites redesign showing new card design with contact CTA and price indicator",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "One Card, Every Listing",
        body: "A shortlist mixes very different listings, so the card had to hold all of them without breaking. I designed a full set of variants on the same structure: deals with a struck-through price, cars the user has already contacted, listings that are no longer available, private sellers, leasing offers and sponsored placements.\n\nThe two states that mattered most were the ones the old screen ignored. A contacted car now says when the user got in touch, so they don't contact the same seller twice. A sold car is greyed out with a one-tap delete, instead of silently cluttering the list.",
        gallery: {
          items: [
            { src: "/images/projects/project-1/screens/card-max.png", alt: "Card with deal badges, price drop and financing", caption: "Super Deal with a price drop" },
            { src: "/images/projects/project-1/screens/card-contacted.png", alt: "Card marked as contacted with a date", caption: "Already contacted, with the date" },
            { src: "/images/projects/project-1/screens/card-unavailable.png", alt: "Greyed-out card for a vehicle no longer available", caption: "No longer available, one-tap delete" },
            { src: "/images/projects/project-1/screens/card-private.png", alt: "Card for a private seller", caption: "Private seller" },
            { src: "/images/projects/project-1/screens/card-leasing.png", alt: "Leasing offer card with monthly price and terms", caption: "Leasing offer, monthly price first" },
            { src: "/images/projects/project-1/screens/card-sponsored.png", alt: "Sponsored listing card", caption: "Sponsored, clearly labelled" },
          ],
        },
      },
      {
        heading: "The Shipped Screens",
        body: "On iOS the list follows platform conventions: a native sort sheet with options users asked for in the survey, removal confirmed with a snackbar that offers undo instead of a blocking dialog, and full dark mode support. When the list ends, a recommender of similar cars keeps discovery going without pulling users away from their shortlist. [verify: empty state design]",
        gallery: {
          items: [
            { src: "/images/projects/project-1/screens/fav-list.png", alt: "Favourites list on iOS", caption: "The shortlist" },
            { src: "/images/projects/project-1/screens/fav-sort.png", alt: "Sort bottom sheet", caption: "Sort by what matters to you" },
            { src: "/images/projects/project-1/screens/fav-removed-undo.png", alt: "Vehicle removed with an undo snackbar", caption: "Remove, with undo" },
            { src: "/images/projects/project-1/screens/fav-recommender.png", alt: "Similar vehicles recommended below the list", caption: "Similar cars when the list ends" },
            { src: "/images/projects/project-1/screens/fav-list-dark.png", alt: "Favourites list in dark mode", caption: "Dark mode" },
          ],
        },
      },
      {
        heading: "Web",
        body: "On desktop the same card spreads into a horizontal layout inside the account area, with the photo, price rating and both contact actions visible at once.",
        gallery: {
          variant: "desktop",
          items: [
            { src: "/images/projects/project-1/screens/fav-desktop.png", alt: "Favourites page on desktop web", caption: "Favourites on desktop" },
          ],
        },
      },
      {
        heading: "Outcome",
        body: "The A/B test with the new card and contact buttons increased enquiries by ~5.5%. Users were ready to act from their shortlist; they just needed the path made easy. [verify: test length, platforms and any secondary metrics]",
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
      "Gave a 3x-converting listing type its own place in a full bottom navigation: 50% more deals page views and 10% more leads.",
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
      "Price is the most important factor for AutoScout24 users. Super Deals, listings priced at least 3.5% or €300 below market value, convert at three times the rate of regular listings. But they were nearly impossible to find: buried in the catalogue, with no entry point in the navigation.",
    sections: [
      {
        heading: "The Problem",
        body: "Super Deals made up just 2% of detail page views but drove 13% of all web enquiries. On sister marketplace LeasingMarkt.de, deals generated 30% of revenue from only 2% of listings. Market research pointed the same way: most European consumers rank value for money as their top purchase criterion, and a discount often seals an undecided purchase. Users were already looking for deals; we weren't showing them where.",
        image: {
          src: "/images/projects/project-3/detail-1.png",
          alt: "Super Deals opportunity data",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "My Role & Team",
        body: "[verify: team and timeframe.]\n\nI built the business case, designed the navigation restructure, prototyped the variants, and ran the usability test.",
      },
      {
        heading: "Constraint: Five Tabs, No Room",
        body: "Platform conventions on iOS and Android limit bottom navigation to five tabs, and AutoScout24 already had five. Adding Deals meant making space, not just adding a tab.\n\nProfile moved into the header: an occasional task didn't need a permanent tab. Favourites and Saved Searches were merged into one Saved tab, which freed the slot for Deals. But merging two features raised a new problem: how do you show two content types clearly without losing either?",
        gallery: {
          items: [
            { src: "/images/projects/project-3/screens/deals-before.png", alt: "Home screen before, with five tabs and no deals", caption: "Before: five tabs, no way to deals" },
            { src: "/images/projects/project-3/screens/deals-after-dark.png", alt: "Home screen with Deals tab and Deals and discounts recommendations", caption: "After: Deals in the tab bar and on home" },
            { src: "/images/projects/project-3/screens/deals-list.png", alt: "Deals results list", caption: "A filtered list of Super Deals" },
          ],
        },
      },
      {
        heading: "Three Versions, One Test",
        body: "I prototyped three versions of the Saved tab and ran an unmoderated usability test with seven participants. Version 1 used a bottom slider to choose a category without showing content upfront. Version 2 showed both on one screen with vehicle thumbnails. Version 3 used tabs with a separate page for each.\n\nSix of seven participants preferred Version 2. It gave the clearest overview and made combining favourites and saved searches feel logical. Version 1 felt too minimal and disconnected, and Version 3's tabs looked too much like filter controls and risked being missed. We chose Version 2.\n\nThe test also confirmed real appetite for a Deals tab, and showed users expected deals to be personalised to their searches. That finding went straight into the roadmap.",
        gallery: {
          items: [
            { src: "/images/projects/project-3/screens/saved-v1-sheet.png", alt: "Saved as a bottom sheet with two links", caption: "Version 1: a bottom sheet" },
            { src: "/images/projects/project-3/screens/saved-v2-overview.png", alt: "Saved page showing favourites and saved searches together", caption: "Version 2: one overview, chosen by 6 of 7" },
            { src: "/images/projects/project-3/screens/saved-v3-tabs.png", alt: "Saved page with two tabs", caption: "Version 3: tabs that read as filters" },
          ],
        },
      },
      {
        heading: "Outcome",
        body: "In the first iOS test, 15% of visitors used the new Deals tab. Deals detail page views rose by 50% and Super Deal leads by 10%.\n\nThe entry point was meant to be the first step towards a full Deals hub, with personalised deal alerts and deal badges in Favourites. That next phase was deprioritised by management before it started. The entry point remains live. [verify: still live today]",
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
      "A sequence of A/B experiments turned a generic homepage into a personalised entry point, including a pivot when live data contradicted user testing.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android, Web",
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
      "AutoScout24's homepage felt more like a blog than a marketplace, and 43% of users said they couldn't find what they were looking for. A personalised recommender is standard on competing marketplaces, and we already had the algorithms. What we lacked was a homepage that used them.",
    sections: [
      {
        heading: "My Role & Team",
        body: "[verify: team, e.g. the Audience team in the Growth squad, and timeframe.]\n\nI designed every iteration across iOS, Android and web and worked with the PM and engineers on each test.",
      },
      {
        heading: "Small Steps, Each One Tested",
        body: "Rather than one big redesign, we ran a sequence of A/B tests. First we removed noise: playlists and redundant cards that took space without adding value. Then we expanded the recommendation pool from 15 to 50 vehicles, which drove a ~48% jump in recommendation clicks. Simplifying the card itself, showing only model, price and key attributes so more fit on screen, added another ~17%.",
        image: {
          src: "/images/projects/project-2/detail-4.png",
          alt: "Recommendation card before and after simplification",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "When Testing and Data Disagreed",
        body: "Next, we tested a horizontal scroll with recommendations grouped by type. In user testing it did well: participants found the categories intuitive. In the live A/B test, recommendation clicks dropped by ~21%.\n\nRather than force the pattern, we treated it as a signal. I designed a tabbed vertical layout that kept the categories but removed the horizontal scroll. The lesson stuck: user testing tells you whether people understand a design, but not always how they'll behave with it.",
      },
      {
        heading: "Iterations",
        body: "Each version answered a question the previous one raised. A simpler two-column grid let more cars fit on screen. Horizontal rows grouped by type were clear in testing but lost clicks live. Two tabs kept the grid and added deals as their own category. The final iteration replaced the tabs with chips, so more recommendation types fit without crowding, and the most clicked types come first. [verify: which iterations shipped on iOS and Android]",
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/hs-2-simplified.png", alt: "Two-column recommendation grid", caption: "Simplified two-column grid" },
            { src: "/images/projects/project-2/screens/hs-3-horizontal.png", alt: "Horizontal rows grouped by recommendation type", caption: "Horizontal rows: ~21% fewer clicks" },
            { src: "/images/projects/project-2/screens/hs-4-tabs.png", alt: "Tabbed layout, recommended for you", caption: "Tabs: recommended for you" },
            { src: "/images/projects/project-2/screens/hs-4-tabs-deals.png", alt: "Tabbed layout, deals and discounts", caption: "Tabs: deals and discounts" },
            { src: "/images/projects/project-2/screens/hs-5-chips.png", alt: "Recommendation types as chips with load more", caption: "Chips, ordered by performance" },
          ],
        },
      },
      {
        heading: "Beyond the Homepage",
        body: "The same recommender also lived on the vehicle detail page, where it sat at the very bottom, below the seller details. I designed an experiment that moved it up, directly after the vehicle description, to catch people who were unsure about the car they were looking at. [verify: result and whether it shipped]",
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/dp-before.png", alt: "Detail page with the recommender at the very bottom", caption: "Before: recommender at the very end" },
            { src: "/images/projects/project-2/screens/dp-after.png", alt: "Detail page with the recommender after the vehicle description", caption: "Experiment: right after the description" },
          ],
        },
      },
      {
        heading: "Outcome",
        body: "Expanding the pool and simplifying the cards each produced a measurable uplift in recommendation clicks. [verify: overall uplift from the final shipped version]\n\nComparing recommendation types also showed a clear ranking: 'Based on your last view' and 'Reduced offers' performed best, followed by 'Based on your last search'. That decided the order of categories in the final design.",
        image: {
          src: "/images/projects/project-2/detail-3.png",
          alt: "Final recommendation layout",
          width: 1200,
          height: 800,
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
