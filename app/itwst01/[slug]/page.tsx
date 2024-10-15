import React from "react"
import { allItwst01s } from "content-collections"
import { MDXContent } from "@content-collections/mdx/react"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function Page({ params }: { params: { slug: string } }) {
	const itwst01 = allItwst01s.find((lab) => lab._meta.path === params.slug)

	console.log(params.slug)

	if (!itwst01) {
		return notFound()
	}

	return (
		<>
			<Link href="/itwst01">&larr; back</Link>
			<h2 className="text-lg tracking-tighter mb-6 font-semibold">{itwst01.title}</h2>
			<MDXContent code={itwst01.mdx} />
		</>
	)
}
