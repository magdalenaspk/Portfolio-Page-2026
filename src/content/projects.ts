import { Project } from "./types";

const allSelectedProjects: Project[] = [
  {
    id: 7,
    slug: "growing-logged-in-users",
    status: "published",
    title: "Growing Logged-in Users",
    subtitle: "Timely Reasons to Log In",
    description:
      "Giving users a timely reason to log in, improving the login experience itself, and a longer-term vision for an AutoScout24 Club.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android, Web, mWeb",
    timeframe: "Q2 2025 – Q3 2026",
    team: "3 product teams, each a PM and 3–4 engineers",
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
      "AutoScout24 users could search for cars, browse listings and contact sellers without logging in. That made the marketplace easy to use, but it also meant many users had few reasons to create an account or return regularly. Account features such as saved searches, price history and listing popularity offered opportunities to make signing in more useful. I worked on several points in that journey: giving users a timely reason to log in, improving the login experience itself, and exploring how individual benefits could connect into a more coherent long-term proposition.",
    sections: [
      {
        heading: "My Role",
        body: "I was the product designer across all three teams: I designed the experiences end to end and presented the work at a company-wide all-hands.",
      },
      {
        heading: "The Problem",
        body: "Logged-in users behaved very differently from logged-out users, yet users saw little reason to sign up: they used the platform infrequently, had privacy concerns, saw no clear benefit, and the site worked perfectly well without an account. The company set an OKR to grow the share of logged-in users.",
        stats: [
          { value: "75%", label: "higher enquiry conversion rate", context: "Logged-in users · web" },
          { value: "40%", label: "more vehicle detail pages viewed per week", context: "Logged-in users · web" },
          { value: "33%", label: "more sessions from CRM channels", context: "Logged-in users · web" },
        ],
      },
      {
        heading: "Constraints",
        body: "Every login moment had to work within four constraints.",
        points: [
          { icon: "x", title: "No hard walls", body: "Blocking logged-out users would cost leads, so every login moment had to be optional or tied to a clear, immediate benefit." },
          { icon: "users", title: "Two audiences, one screen", body: "Dealers log in through the same entry point as private buyers, and they are a key business segment." },
          { icon: "phone", title: "Four platforms, behaving differently", body: "Apps were already far more logged-in than web, and mWeb was the largest, mostly logged-out surface." },
          { icon: "shield", title: "Security and identity rules", body: "Changes went through Trust & Identity, a mandatory captcha sat in the flow, and long German words had to fit every layout." },
        ],
      },
      {
        heading: "1. The First App Open",
        body: "The app's launch sequence had grown screen by screen, with no clear value proposition and no moment to register, so users slipped straight into an anonymous session. I rebuilt it as one scalable sequence: tell users why before asking for anything, put registration early, and leave room to add steps later.",
        points: [
          { icon: "grid", title: "Static full-bleed images", body: "Broke down across light and dark mode and varying text lengths.", tag: "Ruled out" },
          { icon: "layers", title: "Feature walkthrough", body: "Solved contrast, but felt dated.", tag: "Ruled out" },
          { icon: "sparkle", title: "Video", body: "Handled both, and gave the first open an emotional moment.", tag: "Chosen" },
        ],
        afterPoints: "iOS allows one notification prompt, so the app explains the benefit first and shows Apple's prompt only after a yes, and registration can always be skipped. In the iOS A/B test (Q1 2026), sessions dipped slightly, an accepted trade-off, while detail page views and enquiries were unaffected. Android followed.",
        stats: [
          { value: "+40%", label: "logged-in iOS users within three weeks of release", context: "iOS A/B test" },
          { value: "+20%", label: "push notification opt-in", context: "iOS A/B test" },
        ],
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
        body: "Price history answers a key buyer question: is this really a good deal? In the apps it already sat behind a login wall with no significant drop in leads, so the next step was web. I tested two ways in:",
        points: [
          { icon: "eye", title: "Teaser first", body: "Show the price rating, then ask users to log in to unlock the history.", tag: "Tested" },
          { icon: "key", title: "Direct login", body: "Go straight to a login framed around the insight.", tag: "Winner" },
        ],
        afterPoints: "The value was already obvious at the point of intent, so extra persuasion behaved like friction. That became the principle for everything that followed.",
        stats: [
          { value: "+16%", label: "more likely to log in with direct login than with the teaser", context: "A/B test · web" },
        ],
        galleryAt: "afterBody",
        gallery: {
          variant: "desktop",
          items: [
            { src: "/images/projects/project-7/screens/ph-teaser-desktop.png", alt: "Price Insights dialog with locked price history and an unlock button", caption: "Tested: a teaser that unlocks the history after login" },
            { src: "/images/projects/project-7/screens/ph-direct-desktop.png", alt: "Dedicated login dialog titled See how this car is priced", caption: "Winner: a direct login framed around the insight" },
          ],
        },
      },
      {
        heading: "3. Popularity: From Fake Door to Login Moment",
        body: "Does social proof make users more likely to enquire? We validated that before building it, then turned it into a reason to log in.",
        points: [
          { icon: "beaker", title: "Fake-door test", body: "A \"Popular\" label shown on around 5% of listings, before investing in the data." },
          { icon: "chat", title: "Usability test evidence", body: "Users actively looked for popularity information and said it helped them decide." },
          { icon: "eye", title: "Gated for logged-out users", body: "Views, gallery swipes and Favourites adds are blurred behind a sign-in prompt, at the moment of interest." },
        ],
        afterPoints: "Once live on web, popularity drove 5% of login attempts, but some users dropped out before finishing login. That drop-off made the case for redesigning the login itself.",
        stats: [
          { value: "+2%", label: "conversion on labelled listings", context: "Fake-door test" },
          { value: "5%", label: "of login attempts driven by popularity", context: "Live on web" },
        ],
        galleryAt: "beforeStats",
        gallery: {
          items: [
            { src: "/images/projects/project-7/screens/pop-0-label-list.png", alt: "Search results with a Sehr beliebt label on listings", caption: "The \"Popular\" label, first tested as a fake door" },
            { src: "/images/projects/project-7/screens/pop-0-label-detail.png", alt: "Detail page with the popular label", caption: "The label on the detail page" },
            { src: "/images/projects/project-7/screens/pop-1-blurred.png", alt: "Popularity section with blurred views and favourites", caption: "Logged out: numbers blurred, with a reason to sign in" },
            { src: "/images/projects/project-7/screens/pop-2-legacy-login.png", alt: "Legacy login screen", caption: "The old login screen" },
            { src: "/images/projects/project-7/screens/pop-3-revealed.png", alt: "Popularity section showing interactions and favourites", caption: "Logged in: interactions and favourites revealed" },
          ],
        },
      },
      {
        heading: "4. Fixing the Login Screen",
        body: "The existing login screen felt outdated and its hierarchy didn't follow established login patterns. I redesigned it following four standards from Nielsen Norman Group:",
        points: [
          { icon: "layers", title: "Reduce cognitive load at the point of entry" },
          { icon: "users", title: "Make social login prominent, before the email form" },
          { icon: "sparkle", title: "Explain what users get by logging in" },
          { icon: "cursor", title: "Give the screen one clear primary action" },
        ],
        afterPoints: "The redesign leads with why to log in (track price drops, save Favourites, check if a price is fair), puts Google, Apple and Facebook above email, and widens the desktop modal so long German words don't break. It works in three contexts: full page, popup and mobile web.\n\nWe launched it in Austria first and monitored it for two weeks. Logins rose slightly, dealer login rates didn't dip and there were no security issues, so it was rolled out to all markets.",
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
        body: "The legacy screen put a full-width dealer button at the very top, so every private buyer had to skip past it.",
        points: [
          { icon: "users", title: "Private buyers", body: "Most users. The dealer button interrupted their journey." },
          { icon: "shield", title: "Dealers", body: "A key segment. Market managers needed the entry point to stay visible." },
        ],
        afterPoints: "I proposed a text link at the bottom; market managers pushed back. We settled on a secondary outlined button on the popup and mobile screens, plus a dedicated dealer card on the full page. Dealers look for their separate account, so it stays findable without competing with the main journey. We agreed to monitor dealer login rates and keep the text link as a follow-up test.",
        image: {
          src: "/images/projects/project-7/detail-2.png",
          alt: "Dealer entry point as a text link compared with a secondary outlined button",
          width: 1200,
          height: 800,
        },
      },
      {
        heading: "The Registration Flow",
        body: "The whole journey takes several steps; the screens below are from mobile web. Social sign-in comes first. Email users get password rules checked as they type, so errors are prevented rather than reported. Consent and captcha share one screen, and users land back where they started.",
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
        body: "Every error says what went wrong and how to fix it, right where it happened. A wrong password puts recovery one tap away, and password reset uses a six-digit code instead of a link, so users never leave the flow. That code pattern became the basis for removing passwords altogether.",
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
        heading: "5. From Passwords to One-Time Codes",
        body: "After the rollout, the next source of friction was the password itself. With Trust & Identity, we replaced passwords for email users with a six-digit code sent by email. The one-time code flow is what's live today.",
        points: [
          { icon: "key", title: "No password", body: "Nothing to create, meet rules for, or forget." },
          { icon: "layers", title: "One flow", body: "Sign-in and registration together, so users don't need to know if they have an account." },
        ],
        gallery: {
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
        heading: "Outcome",
        body: "Each experiment moved its own number, measured on its own platform and metric, and together they made a significant difference. The bigger change was in approach: from a login wall to a series of well-timed, low-friction invitations.",
        stats: [
          { value: "~40%", label: "growth in the share of logged-in users", context: "All initiatives together" },
        ],
      },
      {
        heading: "AutoScout24 Club: The Vision",
        body: "I developed the AutoScout24 Club vision to connect separate logged-in benefits into a coherent membership proposition. Rather than asking users to register for its own sake, the idea was to make an account feel more valuable through useful vehicle insights, convenience features, exclusive benefits and a more consistent member experience.",
        points: [
          { icon: "chart", title: "Vehicle insights", body: "Price history, price evaluation, listing popularity, how long a listing has been online" },
          { icon: "bolt", title: "Convenience", body: "Saved vehicles and search updates, own-car price insights" },
          { icon: "gift", title: "Exclusive benefits", body: "Early access to new listings, exclusive dealer offers" },
          { icon: "shield", title: "Trust & membership", body: "A verified buyer profile, exclusive content" },
        ],
        image: {
          src: "/images/projects/project-7/detail-3.png",
          alt: "AutoScout24 Club landing page concept",
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
    subtitle: "A Working Space for Buyers",
    description:
      "Made Favourites a working space for car buyers: contact from the card, page-level sorting and bulk actions, clearer states. ~5.5% more enquiries.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android, Web",
    timeframe: "Q1 – Q2 2025",
    team: "PM, 9 engineers, data analyst, UX Research",
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
      "Favourites is where car shoppers keep track of vehicles they may want to come back to. It was one of AutoScout24's key engagement screens, the third most active in the apps and on web after search results and vehicle detail pages, yet it hadn't been redesigned in years. Contacting a seller required opening a detail page, managing several saved vehicles was cumbersome, and sold listings could be difficult to distinguish from available ones. The redesign made Favourites a working space for a buyer, not just a place to store vehicle links.",
    sections: [
      {
        heading: "My Role",
        body: "I led the Favourites redesign, using user research and experiment results to prioritise improvements to the saved-vehicle experience across platforms.",
      },
      {
        heading: "Research",
        body: "I ran a survey across the German and Austrian markets, on Android and iOS, to understand how users used Favourites and what they needed from it.",
        points: [
          { icon: "chart", title: "Price is what they track most", body: "Users compare prices across their saved cars." },
          { icon: "eye", title: "They check back regularly", body: "Looking for listing changes and updates." },
          { icon: "sort", title: "They want listing age", body: "How long a vehicle has been online." },
        ],
        afterPoints: "Mapping these needs against the existing screen surfaced improvement opportunities and focused the redesign on practical tasks: make seller contact easier, make saved listings easier to manage, and surface useful information without opening every detail page.",
        stats: [
          { value: "1,142", label: "survey respondents, DE and AT, Android and iOS" },
        ],
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
        body: "Favourites cards needed to match the established search-result card. Search cards had already been refined through A/B testing, so reusing that pattern kept vehicle information and actions consistent across the journey.\n\nBut the two cards have different jobs. On search, a card's job is to get users to the detail page. On Favourites, users have already chosen, so the card could go further and let them act.",
        gallery: {
          variant: "cards",
          items: [
            { src: "/images/projects/project-1/screens/card-search.png", alt: "Search-result card", caption: "Search card: gets users to the detail page" },
            { src: "/images/projects/project-1/screens/card-favourites.png", alt: "Favourites card with contact buttons", caption: "Favourites card: same pattern, lets users act" },
          ],
        },
      },
      {
        heading: "Design Decisions",
        body: "At page level, users needed better ways to organise and manage saved vehicles, and the card itself needed to support the next action.",
        points: [
          { icon: "chat", title: "Contact from the card", body: "The biggest bet: it saves a click at the right moment, but risked lower-quality leads from quick taps. We tested it rather than debated it." },
          { icon: "chart", title: "Price first", body: "Price is the most prominent element, paired with an indicator showing whether it's a good deal, plus a swipeable gallery on the card." },
          { icon: "sort", title: "Sorting", body: "By date, price, mileage and year, in a native sort sheet." },
          { icon: "trash", title: "Single and bulk removal", body: "Remove individual or multiple vehicles." },
          { icon: "undo", title: "Undo, not a blocking dialog", body: "A snackbar confirms removal and offers undo." },
          { icon: "grid", title: "Recommender below", body: "Similar cars appear underneath the saved vehicles, so discovery continues without interrupting the primary task." },
        ],
        afterPoints: "On iOS the screen follows platform conventions, including full dark mode support.",
        gallery: {
          items: [
            { src: "/images/projects/project-1/screens/fav-list.png", alt: "Favourites page on iOS", caption: "Favourites on iOS" },
            { src: "/images/projects/project-1/screens/fav-sort.png", alt: "Native sort sheet", caption: "Native sort sheet" },
            { src: "/images/projects/project-1/screens/fav-removed-undo.png", alt: "Vehicle removed with an undo snackbar", caption: "Removed, with undo" },
            { src: "/images/projects/project-1/screens/fav-one-card-recommender.png", alt: "One saved vehicle with similar cars recommended underneath", caption: "Recommender below the saved cars" },
            { src: "/images/projects/project-1/screens/fav-list-dark.png", alt: "Favourites in dark mode", caption: "Dark mode" },
          ],
        },
      },
      {
        heading: "Listing States",
        body: "The card needed to communicate more than vehicle details. Different states help users understand whether a listing is still available, has been sold, or what kind of listing it is.\n\nThe edge cases mattered most. A contacted car says when the user got in touch, so they don't contact the same seller twice. A car that is no longer available is greyed out with a one-tap delete, instead of silently cluttering the list.",
        gallery: {
          variant: "cards",
          items: [
            { src: "/images/projects/project-1/screens/card-max.png", alt: "Card with deal badge and price drop", caption: "Super Deal, price drop" },
            { src: "/images/projects/project-1/screens/card-contacted.png", alt: "Card marked as contacted", caption: "Contacted, with the date" },
            { src: "/images/projects/project-1/screens/card-unavailable.png", alt: "Greyed-out card for a vehicle no longer available", caption: "No longer available, one-tap delete" },
            { src: "/images/projects/project-1/screens/card-private.png", alt: "Card for a private seller", caption: "Private seller" },
            { src: "/images/projects/project-1/screens/card-leasing.png", alt: "Leasing offer card", caption: "Leasing offer" },
            { src: "/images/projects/project-1/screens/card-sponsored.png", alt: "Sponsored listing card", caption: "Sponsored" },
          ],
        },
      },
      {
        heading: "Mobile Web & Empty State",
        body: "On mobile web the card leads with a large, swipeable photo, following the mobile web search card.\n\nThe empty state explains the value of saving vehicles and encourages users to save their first one, so the purpose of Favourites is clear before anything has been added.",
        gallery: {
          items: [
            { src: "/images/projects/project-1/screens/fav-mweb-list.png", alt: "Favourites on mobile web with a large photo card", caption: "Large, swipeable photos" },
            { src: "/images/projects/project-1/screens/fav-mweb-empty.png", alt: "Empty Favourites state on mobile web", caption: "Empty state: why to save, and where to start" },
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
        heading: "Outcome",
        body: "The A/B test with the new card and contact buttons increased enquiries across all platforms combined. Enquiries are the metric that matters most on a marketplace, because they turn browsing into leads for dealers.",
        stats: [{ value: "+5.5%", label: "enquiries", context: "A/B test · all platforms combined" }],
        afterPoints: "Users were ready to act from Favourites; they just needed the path made easy. And they did.",
      },
      {
        heading: "After Launch: Three More Iterations",
        body: "The redesign was a foundation, not a finish line. Over the following months I designed three more releases for web, each building on the new card.",
        points: [
          { icon: "gift", title: "Personal dealer offers", body: "A car in Favourites is a strong buying signal, so dealers can send those users a personal offer. It appears on the card as a collapsible panel with the date it arrived." },
          { icon: "grid", title: "A recommender on web", body: "Like on iOS, similar cars appear below the list, so Favourites keeps feeding discovery." },
          { icon: "mail", title: "Email updates", body: "Users valued emails about their saved cars, with strong open rates. A toggle subscribes them to price drops, high demand and availability, mirrored in account settings. It also grew email subscribers." },
        ],
        gallery: {
          variant: "cards",
          itemWidth: 200,
          items: [
            { src: "/images/projects/project-1/screens/offer-collapsed.png", alt: "Card with a collapsed personal dealer offer", caption: "Dealer offer, collapsed" },
            { src: "/images/projects/project-1/screens/offer-expanded.png", alt: "Card with an expanded personal dealer offer", caption: "Dealer offer, expanded with its date" },
            { src: "/images/projects/project-1/screens/toggle-on.png", alt: "Favourites with the email updates toggle on and a confirmation snackbar", caption: "Email updates on, confirmed" },
            { src: "/images/projects/project-1/screens/toggle-off.png", alt: "Favourites with the email updates toggle off", caption: "Email updates off" },
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
      "Helping users discover more relevant cars on the app home screen: which vehicles to recommend, and how to browse them.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android",
    timeframe: "Q4 2024 – Q3 2025",
    team: "PM, 4 engineers (iOS and Android)",
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
      "AutoScout24's home screen didn't feel like a marketplace. It highlighted the newest vehicles, but the selection wasn't tailored to individual users, and 43% of users said they couldn't find what they were looking for. A personalised recommender is standard on competing marketplaces, and we already had the algorithms. The opportunity was to help users discover more relevant cars through recommendations shaped by their behaviour and interests.",
    sections: [
      {
        heading: "My Role",
        body: "I designed every iteration across iOS and Android, exploring both sides of the experience: which vehicles to recommend, and how the interface should help users browse those recommendations.",
      },
      {
        heading: "More Vehicles, Less Clutter",
        body: "I explored reducing clutter in recommendation cards and increasing the number of vehicles visible in the feed, one A/B test at a time.",
        points: [
          { icon: "grid", title: "More vehicles, step by step", body: "The visible pool grew from 15 to 50 recommendations, and later had no fixed limit." },
          { icon: "bolt", title: "Loaded gradually", body: "Recommendations load in batches of 25: the first with the screen, the next in the background as users near the end." },
          { icon: "layers", title: "Simpler cards", body: "Only model, price and key facts, so more cars fit on screen." },
        ],
        stats: [
          { value: "+48%", label: "recommendation clicks", context: "Pool 15 → 50" },
          { value: "+17%", label: "recommendation clicks", context: "Card simplification" },
        ],
        afterPoints: "Success was evaluated against the team's habit metric: users reaching more than six detail-page views in their first week.",
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/hs-0-baseline.png", alt: "Original recommendations with long titles, badges and seller type", caption: "Before: long titles, badges and seller type" },
            { src: "/images/projects/project-2/screens/hs-2-simplified.png", alt: "Simplified recommendation cards", caption: "After: model, price and key facts, ~17% more clicks" },
          ],
        },
      },
      {
        heading: "When Testing and Live Data Disagreed",
        body: "Next, I tested a Netflix-style concept: a vertical feed of horizontal rows, with recommendations grouped by type. In user testing it did well, and participants found the categories intuitive. In the live iOS A/B test, it underperformed.",
        stats: [
          { value: "−20.9%", label: "home recommendation-card clicks", context: "Netflix-style · iOS A/B" },
          { value: "−1.5%", label: "detail-page lead conversions", context: "Netflix-style · iOS A/B" },
        ],
        afterPoints: "Rather than force the pattern, I treated it as a signal. The lesson stuck: user testing tells you whether users understand a design, but not always how they'll behave with it.",
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/hs-3-horizontal.png", alt: "Horizontal rows grouped by recommendation type", caption: "Netflix-style rows: clear in testing, fewer clicks live" },
          ],
        },
      },
      {
        heading: "From Tabs to Chips",
        body: "I designed a tabbed layout that kept the categories but removed the horizontal scroll. The final iteration replaced the tabs with chips, so more recommendation types fit without crowding, with the most-clicked types first. The chips are what's live today. Recommender engagement was evaluated separately from downstream seller interest.",
        stats: [
          { value: "+7%", label: "clicks (reported)", context: "Tabs" },
          { value: "+12%", label: "overall engagement (reported)", context: "Tabs" },
        ],
        gallery: {
          items: [
            { src: "/images/projects/project-2/screens/hs-4-tabs.png", alt: "Recommendations organised in tabs", caption: "Tabs" },
            { src: "/images/projects/project-2/screens/hs-5-chips.png", alt: "Recommendation types as chips", caption: "Live: chips, most-clicked types first" },
          ],
        },
      },
      {
        heading: "Outcome",
        body: "The work explored how recommendation relevance, feed density and navigation interact, comparing different ways of presenting cars and moving between categories rather than assuming a familiar pattern would improve discovery. Clicks, overall engagement, detail-page views and lead conversions were kept as separate measures.\n\nComparing recommendation types also showed a clear ranking: 'Based on your last view' and 'Reduced offers' performed best, followed by 'Based on your last search'. That decided the order of categories in the final design.",
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
    hidden: true,
    status: "published",
    title: "Deals Entry Point",
    subtitle: "A Clearer Entry Point for Super Deals",
    description:
      "Exploring a clearer entry point for Super Deals without overcrowding a full bottom navigation. The Deals tab was explored, not shipped.",
    company: "AutoScout24",
    role: "Product Designer",
    platform: "iOS, Android",
    timeframe: "Q2 2025",
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
      "AutoScout24's Super Deals are listings priced at least 3.5% or €300 below market value, and they convert at three times the rate of regular listings. But they were not easy to discover in the app. There was evidence that users were interested in deals; the challenge was to give them a clearer entry point without overcrowding the existing navigation.",
    sections: [
      {
        heading: "My Role & Team",
        body: "I led product design for the Deals entry-point exploration, working with product and engineering to assess navigation options, validate concepts with users, and explore alternative placements for Super Deals.",
      },
      {
        heading: "The Opportunity",
        body: "Price is the most important factor for AutoScout24 users, and market research pointed the same way: most European consumers rank value for money as their top purchase criterion. Users were already looking for deals; the app wasn't showing them where.",
        stats: [
          { value: "3×", label: "conversion rate of Super Deals vs regular listings" },
          { value: "13%", label: "of web enquiries from Super Deals, only 2% of detail-page views" },
          { value: "30%", label: "of LeasingMarkt.de revenue from deals, only 2% of listings", context: "Sister marketplace" },
        ],
      },
      {
        heading: "Constraint and Decision",
        body: "The app already used all five bottom-navigation slots, a familiar pattern on iOS and Android. Adding a sixth tab was not an option.",
        stats: [{ value: "5 / 5", label: "bottom-navigation slots already in use" }],
        afterPoints: "To make room for Deals, I explored combining Favourites and Saved Searches under one \"Saved\" destination. Both are things users save for later: vehicles they want to revisit and searches they want to keep track of.\n\nThe challenge was to preserve the mental model for both types of saved content while freeing a navigation slot for a new destination.",
        gallery: {
          items: [
            { src: "/images/projects/project-3/screens/deals-before.png", alt: "App with all five bottom-navigation slots in use", caption: "All five bottom-navigation slots in use" },
            { src: "/images/projects/project-3/screens/deals-list.png", alt: "Proposed Deals destination with Super Deals", caption: "Proposed Deals destination" },
          ],
        },
      },
      {
        heading: "Three Saved Concepts",
        body: "I explored three ways of combining saved vehicles and saved searches in one destination.",
        points: [
          { icon: "sheet", title: "Bottom sheet", body: "Let users choose between Favourites and Saved Searches." },
          { icon: "stack", title: "Stacked sections", body: "Show saved vehicles and saved searches as two areas on the same screen." },
          { icon: "tabs", title: "Filter tabs", body: "Let users switch between saved vehicles and saved searches within one destination." },
        ],
        afterPoints: "These concepts explored trade-offs between visibility, navigation depth and the effort required to switch between saved content. An unmoderated prototype test with seven participants assessed whether users understood the proposed navigation and where they clicked. It was concept validation, not a production experiment.\n\nStacked sections gave the clearest overview and made combining the two feel logical. The bottom sheet felt too minimal and disconnected, and the filter tabs looked too much like filter controls and risked being missed. The test also showed appetite for a Deals tab, and that users expected deals to be personalised to their searches, a finding that went straight into the roadmap.",
        stats: [
          { value: "6 of 7", label: "participants preferred stacked sections", context: "Unmoderated prototype test" },
        ],
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
        body: "Deals found other discovery surfaces without relying on the proposed navigation change.",
        points: [
          { icon: "x", title: "Deals bottom-navigation tab", tag: "Dropped" },
          { icon: "phone", title: "Deals in the iOS home-screen recommender", tag: "Live" },
          { icon: "globe", title: "Deals on the web homepage", tag: "Live" },
        ],
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

// Cases marked hidden stay in the file but are left off this branch.
export const selectedProjects = allSelectedProjects.filter((p) => !p.hidden);

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
