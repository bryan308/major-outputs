import { Plus } from "lucide-react"

import CourseSection from "@/components/shared/course-section"

const courseSections = [
  {
    subject: "IT-WST01",
    year: "2023-2024 2nd sem",
    teacher: "Rose Anne G. Cochanco",
    section: "1E",
    laboratoriesLink: "/itwst01",
    caseStudyLink: "https://webwisee.vercel.app/",
    className: "border-b md:border-r",
  },
  {
    subject: "IT-WST02",
    year: "2024-2025 1st sem",
    teacher: "Rose Anne G. Cochanco",
    section: "2A",
    laboratoriesLink: "/itwst02",
    caseStudyLink: "https://rnlsevilla.vercel.app/",
    className: "border-b lg:border-r",
  },
  {
    subject: "IT-PF01",
    year: "2024-2025 1st sem",
    teacher: "Prince Mert Nicolas",
    section: "2A",
    laboratoriesLink: "/itpf01",
    className: "border-b md:border-r lg:border-r-0",
  },
  {
    subject: "IT-PF02",
    year: "2024-2025 2nd sem",
    teacher: "Prince Mert Nicolas",
    section: "2A",
    laboratoriesLink: "/itpf02",
    className: "border-b lg:border-b lg:border-r",
  },
  {
    subject: "IT-HCI01",
    year: "2024-2025 2nd sem",
    teacher: "Marcelino Collado Jr.",
    section: "2A",
    laboratoriesLink: "/ithci01",
    className: "md:border-r border-b md:border-b",
  },
  {
    subject: "CC-104",
    year: "2024-2025 2nd sem",
    teacher: "Apple Oliveros",
    section: "2A",
    laboratoriesLink: "/cc104",
    className: "border-b",
  },
  {
    subject: "CC-105",
    year: "2024-2025 2nd sem",
    teacher: "Cris Norman Olipas",
    section: "2A",
    laboratoriesLink: "/cc105",
    className: "border-b md:border-b-0 md:border-r",
  },
  {
    subject: "IT-IPT01",
    year: "2025-2026 1st sem",
    teacher: "Melgine Bauat",
    section: "3C",
    laboratoriesLink: "/itipt01",
    className: "lg:border-r",
  },
]

export default function Home() {
  return (
    <div className="relative grid md:grid-cols-2 lg:grid-cols-3 border p-4">
      <Plus className="absolute -top-[0.77rem] -right-[0.77rem] size-6 text-muted-foreground stroke-1 z-10" />
      <Plus className="absolute -top-[0.77rem] -left-[0.77rem] size-6 text-muted-foreground stroke-1 z-10" />
      <Plus className="absolute -bottom-[0.77rem] -left-[0.77rem] size-6 text-muted-foreground stroke-1 z-10" />
      <Plus className="absolute -bottom-[0.77rem] -right-[0.77rem] size-6 text-muted-foreground stroke-1 z-10" />
      {courseSections.map((course) => (
        <CourseSection
          key={course.subject}
          subject={course.subject}
          year={`A.Y. ${course.year}`}
          teacher={course.teacher}
          section={course.section}
          laboratoriesLink={course.laboratoriesLink}
          caseStudyLink={course.caseStudyLink}
          className={course.className}
        />
      ))}
    </div>
  )
}
