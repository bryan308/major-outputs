import { FC } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const subjectFullNames: { [key: string]: string } = {
	"IT-WST01": "Web Systems and Technologies 1",
	"IT-WST02": "Web Systems and Technologies 2",
	"IT-PF01": "Object-Oriented Programming 1",
	"IT-PF02": "Object-Oriented Programming 2",
	"CC-105": "Applications Development and Emerging Technologies",
}

interface CourseSectionProps {
	subject: string
	teacher: string
	section: string
	laboratoriesLink: string
	caseStudyLink?: string
	year: string
	className?: string
}

const CourseSection: FC<CourseSectionProps> = ({
	subject,
	teacher,
	section,
	laboratoriesLink,
	caseStudyLink,
	year,
	className,
}) => {
	const fullSubjectName = subjectFullNames[subject] || subject
	return (
		<div className={cn("group p-8", className)}>
			<h2 className="flex justify-between items-center text-lg tracking-tighter font-semibold">
				{subject}
				<span
					aria-label="section"
					className="text-sm font-semibold mt-0 text-muted-foreground group-hover:text-foreground transition-all"
				>
					section: {section}
				</span>
			</h2>
			<p
				aria-label="subject"
				className="sr-only text-sm m-0 transition-all"
			>
				{fullSubjectName}
			</p>
			<p
				aria-label="academic year"
				className="text-sm m-0 text-muted-foreground group-hover:text-foreground transition-all"
			>
				{year}
			</p>
			<p
				aria-label="teacher"
				className="text-sm m-0 mb-4 text-muted-foreground group-hover:text-foreground transition-all"
			>
				{teacher}
			</p>
			{caseStudyLink ? (
				<>
					<Tabs defaultValue="laboratories">
						<ScrollArea>
							<TabsList className="mb-3 bg-transparent">
								<TabsTrigger
									value="laboratories"
									className="data-[state=active]:bg-muted data-[state=active]:shadow-none"
								>
									Lab
								</TabsTrigger>
								<TabsTrigger
									value="case-study"
									className="data-[state=active]:bg-muted data-[state=active]:shadow-none"
								>
									Case Study
								</TabsTrigger>
							</TabsList>
							<ScrollBar orientation="horizontal" />
						</ScrollArea>
						<TabsContent
							className="m-0"
							value="laboratories"
							asChild
						>
							<Link
								className="text-sm"
								href={laboratoriesLink}
							>
								laboratories
								<ArrowRight className="inline size-4" />
							</Link>
						</TabsContent>
						<TabsContent
							className="m-0"
							value="case-study"
							asChild
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
