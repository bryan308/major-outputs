import { allItwst01s } from "content-collections"
import Link from "next/link"

export default function Labs() {
	return (
		<>
			<Link href="/">&larr; back</Link>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
				{allItwst01s
					.sort((a, b) => {
						const getNumber = (title: string) => parseInt(title.split("Laboratory ")[1], 10)
						return getNumber(a.title) - getNumber(b.title)
					})
					.map((post) => (
						<div key={post._meta.path}>
							<Link href={`/itwst01/${post._meta.path}`}>{post.title}</Link>
						</div>
					))}
			</div>
		</>
	)
}
