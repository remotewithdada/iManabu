export const business = {
  contact: {
    email: "contact@imanabu.online",
    emailUrl: "mailto:contact@imanabu.online",
    facebookUrl: "https://www.facebook.com/iManabu.online/",
    messengerUrl: "https://m.me/iManabu.online",
    messengerLabel: "Message iManabu on Messenger",
    lineUrl: "https://line.me/ti/p/6TpVdhhEyL",
    lineLabel: "Chat with iManabu on LINE",
  },
  socialMedia: [
    { name: "Instagram", status: "Coming Soon" },
    { name: "TikTok", status: "Coming Soon" },
    { name: "X (Twitter)", status: "Coming Soon" },
  ],
  images: {
    hero: {
      src: "/images/hero.png",
      alt: "A language learner practicing conversation during an online lesson",
      width: 1672,
      height: 941,
    },
    teacher: {
      src: "/images/teacher.png",
      alt: "Teacher Hidemi, Japanese and English teacher at iManabu",
      width: 1122,
      height: 1402,
    },
  },
} as const;
