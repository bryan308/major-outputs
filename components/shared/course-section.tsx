import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "@mynaui/icons-react"
import Link from "next/link"

interface CourseSectionProps {
	title: string
	teacher: string
	section: string
	laboratoriesLink: string
	laboratoriesDescription: string
	caseStudyLink: string
	caseStudyDescription: string
}

const CourseSection: React.FC<CourseSectionProps> = ({
	title,
	teacher,
	section,
	laboratoriesLink,
	laboratoriesDescription,
	caseStudyLink,
	caseStudyDescription,
}) => {
	return (
		<>
			<h2 className="text-lg tracking-tighter font-semibold">{title}</h2>
			<p className="mb-4">
				<span className="font-semibold">Teacher</span>: {teacher}
			</p>
			<p className="mb-4">
				<span className="font-semibold">Section</span>: {section}
			</p>
			{caseStudyLink ? (
				<Tabs defaultValue="laboratories">
					<TabsList>
						<TabsTrigger value="laboratories">laboratories</TabsTrigger>
						<TabsTrigger value="case-study">case study</TabsTrigger>
					</TabsList>
					<TabsContent value="laboratories">
						<div className="my-6">
							<Link href={laboratoriesLink}>
								laboratories
								<ArrowRight className="inline size-4" />
							</Link>
							<p>{laboratoriesDescription}</p>
						</div>
					</TabsContent>
					<TabsContent value="case-study">
						<div className="my-6">
							<Link
								href={caseStudyLink}
								target="_blank"
								rel="noreferrer"
							>
								{caseStudyLink}
							</Link>
							<p>{caseStudyDescription}</p>
						</div>
					</TabsContent>
				</Tabs>
			) : (
				<div className="my-6">
					<Link href={laboratoriesLink}>
						laboratories
						<ArrowRight className="inline size-4" />
					</Link>
					<p>{laboratoriesDescription}</p>
				</div>
			)}
			<hr className="my-10" />
		</>
	)
}

export default CourseSection
