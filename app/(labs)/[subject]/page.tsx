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

	return (
		<>
			<Link href="/">&larr; back</Link>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
				{labs
					.sort((a: Lab, b: Lab) => {
						const getNumber = (title: string) => parseInt(title.split("Laboratory ")[1], 10)
						return getNumber(a.title) - getNumber(b.title)
					})
					.map((lab: Lab) => (
						<div key={lab._meta.path}>
							<Link href={`/${subject}/${lab._meta.path}`}>{lab.title}</Link>
						</div>
					))}
			</div>
		</>
	)
}
