import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "@mynaui/icons-react"
import { BookOpen, Laptop } from "lucide-react"
import Link from "next/link"

interface CourseSectionProps {
	title: string
	teacher: string
	section: string
	laboratoriesLink: string
	caseStudyLink?: string
}

const CourseSection: React.FC<CourseSectionProps> = ({
	title,
	teacher,
	section,
	laboratoriesLink,
	caseStudyLink,
}) => {
	return (
		<div className="p-4 border rounded-lg shadow">
			<h2 className="text-lg tracking-tighter font-semibold">{title}</h2>
			<p className="text-sm m-0">
				<span className="font-semibold">Teacher</span>: {teacher}
			</p>
			<p className="text-sm mt-0 mb-4">
				<span className="font-semibold">Section</span>: {section}
			</p>
			{caseStudyLink ? (
				<>
					<Tabs defaultValue="laboratories">
						<ScrollArea>
							<TabsList className="mb-3">
								<TabsTrigger value="laboratories">
									<Laptop
										className="-ms-0.5 me-1.5 opacity-60"
										size={16}
										strokeWidth={2}
										aria-hidden="true"
									/>
									Lab
								</TabsTrigger>
								<TabsTrigger
									value="case-study"
									className="group"
								>
									<BookOpen
										className="-ms-0.5 me-1.5 opacity-60"
										size={16}
										strokeWidth={2}
										aria-hidden="true"
									/>
									Case Study
								</TabsTrigger>
							</TabsList>
							<ScrollBar orientation="horizontal" />
						</ScrollArea>
						<TabsContent
							className="m-0"
							value="laboratories"
						>
							<Link
								className="text-sm"
								href={laboratoriesLink}
							>
								laboratories <ArrowRight className="inline size-4" />
							</Link>
						</TabsContent>
						<TabsContent
							className="m-0"
							value="case-study"
						>
							<Link
								href={caseStudyLink}
								target="_blank"
								rel="noreferrer"
								className="text-sm"
							>
								{caseStudyLink}
							</Link>
						</TabsContent>
					</Tabs>
				</>
			) : (
				<Link
					href={laboratoriesLink}
					className="text-sm"
				>
					laboratories
					<ArrowRight className="inline size-4" />
				</Link>
			)}
		</div>
	)
}

export default CourseSection
