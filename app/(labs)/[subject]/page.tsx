import { allItwst01s, allItwst02s, allItpf01s } from "content-collections"
import Link from "next/link"
import { notFound } from "next/navigation"

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
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
	const { subject } = params
	const labs = subjectData[subject] as Lab[]

	if (!labs) {
		return notFound()
	}

	const midtermLabs = labs.filter((lab) => lab._meta.path.startsWith("m-"))
	const finalLabs = labs.filter((lab) => lab._meta.path.startsWith("f-"))

	const renderLabs = (labs: Lab[]) =>
		labs
			.sort((a: Lab, b: Lab) => {
				const getNumber = (title: string) => parseInt(title.split("Laboratory ")[1], 10)
				return getNumber(a.title) - getNumber(b.title)
			})
			.map((lab: Lab) => (
				<div key={lab._meta.path}>
					<Link href={`/${subject}/${lab._meta.path}`}>{lab.title}</Link>
				</div>
			))

	return (
		<>
			<Link href="/">&larr; back</Link>
			{midtermLabs.length > 0 && (
				<div className="mt-10">
					<h2>Midterms</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">{renderLabs(midtermLabs)}</div>
				</div>
			)}
			{finalLabs.length > 0 && (
				<div className="mt-10">
					<h2>Finals</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">{renderLabs(finalLabs)}</div>
				</div>
			)}
		</>
	)
}
