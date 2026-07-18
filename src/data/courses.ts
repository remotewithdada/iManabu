export interface Course {
  name: string;
  description: string;
  price: string;
  duration: string;
  minimumStudents: string;
  notes: string;
  featured?: boolean;
}

// Update course details here; course and pricing sections share this source.
export const courses: Course[] = [
  {
    name: "Special Course",
    description: "Friendly, practical group lessons focused on useful Japanese for everyday situations.",
    price: "Around ₱150 per class",
    duration: "Schedule varies",
    minimumStudents: "Minimum group size to be confirmed",
    notes: "Final schedule and class availability are discussed during consultation.",
    featured: true,
  },
  {
    name: "Private Lessons",
    description: "One-to-one guidance shaped around your level, pronunciation, and personal learning goals.",
    price: "Contact us for current pricing",
    duration: "Flexible lesson duration",
    minimumStudents: "1 student",
    notes: "Lesson format and frequency are tailored during consultation.",
  },
];
