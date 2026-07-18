export const business = {
  contact: {
    email: "hello@imanabu.online",
    emailUrl: "mailto:hello@imanabu.online",
    facebookUrl: "https://www.facebook.com/imanabujp",
    messengerUrl: "https://m.me/imanabujp",
    messengerLabel: "Message us on Messenger",
    lineUrl: "https://line.me/ti/p/6TpVdhhEyL",
    lineLabel: "Chat with us on LINE",
  },
  socialMedia: [
    { name: "Instagram", status: "Coming Soon" },
    { name: "TikTok", status: "Coming Soon" },
    { name: "X (Twitter)", status: "Coming Soon" },
  ],
  images: {
    hero: {
      src: "/images/hero.png",
      alt: "A Japanese learner practicing conversation during an online lesson",
      width: 1672,
      height: 941,
    },
    teacher: {
      src: "/images/teacher.png",
      alt: "Teacher Hidemi, Japanese language instructor at iManabu",
      width: 1122,
      height: 1402,
    },
  },
} as const;
