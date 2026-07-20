export type CourseLanguage = "Japanese" | "English";

export interface Course {
  id: "japanese-group" | "japanese-private" | "english-private";
  language: CourseLanguage;
  name: string;
  format: "Group" | "Private";
  description: string;
  yenPrice: string;
  pesoPrice: string;
  priceQualifier?: string;
  topicLabel: "Topics" | "Suitable for";
  topics: string[];
  classSize: string;
  promotionalPrice?: string;
  featured?: boolean;
}

// Courses and pricing share this source so lesson names and prices stay consistent.
// `promotionalPrice` is intentionally available for future campaigns.
export const courses: Course[] = [
  {
    id: "japanese-group",
    language: "Japanese",
    name: "Japanese Group Classes",
    format: "Group",
    description:
      "Friendly, practical lessons for learners who want to build useful Japanese skills together.",
    yenPrice: "¥700",
    pesoPrice: "₱300",
    priceQualifier: "per student",
    topicLabel: "Topics",
    topics: ["Conversation", "Grammar", "Kanji", "Speaking", "Beginner"],
    classSize: "Small group",
    featured: true,
  },
  {
    id: "japanese-private",
    language: "Japanese",
    name: "Japanese Private Lessons",
    format: "Private",
    description:
      "One-on-one Japanese support shaped around your level, pace, and personal goals.",
    yenPrice: "¥2,000",
    pesoPrice: "₱800",
    priceQualifier: "per lesson",
    topicLabel: "Suitable for",
    topics: ["Conversational Japanese", "Business Japanese", "Everyday Japanese", "Japanese for Beginners"],
    classSize: "1 student",
  },
  {
    id: "english-private",
    language: "English",
    name: "English Private Lessons",
    format: "Private",
    description:
      "Personalized English lessons for Japanese and Filipino learners of different ages—always one-on-one.",
    yenPrice: "¥2,000",
    pesoPrice: "₱800",
    priceQualifier: "per lesson",
    topicLabel: "Topics",
    topics: [
      "English Conversation",
      "Children's English",
      "Japanese Adults",
      "Homework Support",
      "EIKEN Preparation",
      "Filipino-Japanese Children",
      "Filipino Children in Japan",
    ],
    classSize: "1 student",
  },
];
