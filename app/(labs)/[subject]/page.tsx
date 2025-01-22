import React from "react"
import { allItwst01s, allItwst02s, allItpf01s, allItpf02s, allCc105s } from "content-collections"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageProps } from "./[slug]/page"
import { Metadata } from "next"

type Lab = {
	_meta: {
		path: string
	}
	title: string
}

type SubjectData = {
	[key: string]: Lab[]
}

const subjectData: SubjectData = {
	itwst01: allItwst01s,
	itwst02: allItwst02s,
	itpf01: allItpf01s,
	itpf02: allItpf02s,
	cc105: allCc105s,
}

export default async function SubjectPage({ params }: PageProps) {
	const { subject } = await params
	const labs = subjectData[subject] as Lab[]

	if (!labs) {
		return notFound()
	}

	const labCategories = {
		midtermLabs: labs.filter((lab) => lab._meta.path.startsWith("m-")),
		finalLabs: labs.filter((lab) => lab._meta.path.startsWith("f-")),
	}

	const renderLabs = (labs: Lab[]) =>
		labs
			.sort((a: Lab, b: Lab) => {
				const getNumber = (title: string) => parseInt(title.split("Laboratory ")[1], 10)
				return getNumber(a.title) - getNumber(b.title)
			})
			.map((lab: Lab) => (
				<React.Fragment key={lab._meta.path}>
					<Link href={`/${subject}/${lab._meta.path}`}>{lab.title}</Link>
				</React.Fragment>
			))

	return (
		<>
			<Link
				href="/"
				className="mx-auto block w-fit"
			>
				&larr; back
			</Link>
			{Object.entries(labCategories).map(
				([category, labs]) =>
					labs.length > 0 && (
						<div
							key={category}
							className="p-4 mt-10 mb-4"
						>
							<h2 className="text-center text-lg tracking-tighter font-semibold mb-6">
								{category === "midtermLabs" ? "Midterms" : "Finals"}
							</h2>
							<div className="text-center grid grid-cols-2 md:grid-cols-3 gap-4">
								{renderLabs(labs)}
							</div>
						</div>
					)
			)}
		</>
	)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { subject } = await params
	const formattedSubject = subject.replace(/(it|cc)/, "$1-")

	return {
		title: `${formattedSubject.toUpperCase()}`,
	}
}
