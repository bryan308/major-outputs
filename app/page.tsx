import CourseSection from "@/components/shared/course-section"

export default function Home() {
	return (
		<>
			<CourseSection
				title="ITWST-01 / AY 2023-2024"
				teacher="Rose Anne G. Cochanco"
				section="1E"
				laboratoriesLink="/itwst01"
				laboratoriesDescription="A collection of projects and assignments from my 1st year, 2nd semester, applying and building upon my foundational web development skills."
				caseStudyLink="https://webwisee.vercel.app/"
				caseStudyDescription="Educational Website where you can start learning basic Web Development."
			/>
			<CourseSection
				title="ITWST-02 / AY 2024-2025"
				teacher="Rose Anne G. Cochanco"
				section="2A"
				laboratoriesLink="/itwst02"
				laboratoriesDescription="A series of laboratories from my 2nd year, 1st semester, highlighting the continued development of my web expertise and new challenges tackled."
				caseStudyLink="https://rnlsevilla.vercel.app/"
				caseStudyDescription="A personal website displaying background, skills, and contact details."
			/>
			<CourseSection
				title="ITPF-01 / AY 2024-2025"
				teacher="Prince Mert Nicolas"
				section="2A"
				laboratoriesLink="/itpf01"
				laboratoriesDescription="A collection of case problems from my 2nd year, 1st semester, using java programming language."
				caseStudyLink=""
				caseStudyDescription=""
			/>
			<CourseSection
				title="ITPF-02 / 2025"
				teacher="Prince Mert Nicolas"
				section="2A"
				laboratoriesLink="/itpf02"
				laboratoriesDescription="A collection of case problems from my 2nd year, 2nd semester, using java programming language."
				caseStudyLink=""
				caseStudyDescription=""
			/>
			<CourseSection
				title="CC-105 / 2025"
				teacher="Cris Norman Olipas"
				section="2A"
				laboratoriesLink="/cc105"
				laboratoriesDescription=""
				caseStudyLink=""
				caseStudyDescription=""
			/>
		</>
	)
}
