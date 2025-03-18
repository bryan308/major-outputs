import React from "react"
import {
	allItwst01s,
	allItwst02s,
	allItpf01s,
	allItpf02s,
	allCc104s,
	allCc105s,
	allIthci01s,
} from "content-collections"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageProps } from "./[slug]/page"
import { Metadata } from "next"
import { Plus } from "lucide-react"

type Lab = {
	_meta: {
		path: string
	}
	title: string
	draft?: boolean
}

type SubjectData = {
	[key: string]: Lab[]
}

const subjectData: SubjectData = {
	itwst01: allItwst01s,
	itwst02: allItwst02s,
	itpf01: allItpf01s,
	itpf02: allItpf02s,
	cc104: allCc104s,
	cc105: allCc105s,
	ithci01: allIthci01s,
}

export default async function SubjectPage({ params }: PageProps) {
	const { subject } = await params
	const labs = subjectData[subject] as Lab[]

	if (!labs) {
		return notFound()
	}

	const filteredLabs = labs.filter((lab) => !lab.draft)

	const labCategories = {
		midtermLabs: filteredLabs.filter((lab) => lab._meta.path.startsWith("m-")),
		finalLabs: filteredLabs.filter((lab) => lab._meta.path.startsWith("f-")),
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
		<div className="relative border">
			<Plus className="absolute -top-[0.77rem] -right-[0.77rem] size-6 text-muted-foreground stroke-1 z-10" />
			<Plus className="absolute -top-[0.77rem] -left-[0.77rem] size-6 text-muted-foreground stroke-1 z-10" />
			<Plus className="absolute -bottom-[0.77rem] -left-[0.77rem] size-6 text-muted-foreground stroke-1 z-10" />
			<Plus className="absolute -bottom-[0.77rem] -right-[0.77rem] size-6 text-muted-foreground stroke-1 z-10" />
			<div className="h-8 md:h-10 w-full mb-4 border-b col-start-2 row-span-5 row-start-1 border-x bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,hsl(var(--border))_0,hsl(var(--border))_1px,transparent_0,transparent_50%)]" />
			<Link
				href="/"
				className="mx-auto block w-fit"
			>
				&larr; back
			</Link>
			<div className="h-8 md:h-10 w-full mb-4 mt-12 border-y col-start-2 row-span-5 row-start-1 border-x bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,hsl(var(--border))_0,hsl(var(--border))_1px,transparent_0,transparent_50%)]" />
			{Object.entries(labCategories).map(([category, labs]) => {
				const hasLabs = filteredLabs.length > 0
				return labs.length > 0 ? (
					<div
						key={category}
						className="mt-10"
					>
						<h2 className="text-center text-lg tracking-tighter font-semibold mb-6">
							{category === "midtermLabs" ? "Midterms" : "Finals"}
						</h2>
						<div className="text-center grid grid-cols-2 md:grid-cols-3 gap-4">
							{renderLabs(labs)}
						</div>
					</div>
				) : hasLabs ? null : (
					<div
						key={category}
						className="mt-10"
					>
						<h2 className="text-center text-lg tracking-tighter font-semibold mb-6">
							{category === "midtermLabs" ? "Midterms" : "Finals"}
						</h2>
						<div className="text-center text-sm text-destructive">
							No laboratory/case problems found.
						</div>
					</div>
				)
			})}
			<div className="h-8 md:h-10 w-full mt-12 border-t col-start-2 row-span-5 row-start-1 border-x bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,hsl(var(--border))_0,hsl(var(--border))_1px,transparent_0,transparent_50%)]" />
		</div>
	)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { subject } = await params
	const formattedSubject = subject.replace(/(it|cc)/, "$1-")

	return {
		title: `${formattedSubject.toUpperCase()}`,
	}
}
