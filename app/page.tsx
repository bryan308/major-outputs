import CourseSection from "@/components/shared/course-section"

export default function Home() {
	return (
		<>
			<div className="grid md:grid-cols-2 gap-6">
				<CourseSection
					title="IT-WST01 / AY 2023-2024"
					teacher="Rose Anne G. Cochanco"
					section="1E"
					laboratoriesLink="/itwst01"
					caseStudyLink="https://webwisee.vercel.app/"
				/>
				<CourseSection
					title="IT-WST02 / AY 2024-2025"
					teacher="Rose Anne G. Cochanco"
					section="2A"
					laboratoriesLink="/itwst02"
					caseStudyLink="https://rnlsevilla.vercel.app/"
				/>
				<CourseSection
					title="IT-PF01 / AY 2024-2025"
					teacher="Prince Mert Nicolas"
					section="2A"
					laboratoriesLink="/itpf01"
				/>
				<CourseSection
					title="IT-PF02 / 2025"
					teacher="Prince Mert Nicolas"
					section="2A"
					laboratoriesLink="/itpf02"
				/>
				<CourseSection
					title="CC-105 / 2025"
					teacher="Cris Norman Olipas"
					section="2A"
					laboratoriesLink="/cc105"
				/>
			</div>
		</>
	)
}
