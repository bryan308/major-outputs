import { allItwst01s } from "content-collections"
import Link from "next/link"

export default function Labs() {
	return (
		<>
			<Link href="/">&larr; back</Link>
			<ul>
				{allItwst01s.map((post) => (
					<li key={post._meta.path}>
						<Link href={`/itwst01/${post._meta.path}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
