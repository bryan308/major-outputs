import React from "react"
import { allItwst01s } from "content-collections"
import { MDXContent } from "@content-collections/mdx/react"
import { notFound } from "next/navigation"
import Link from "next/link"

// fumadocs components
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock"
import { File, Folder, Files } from "fumadocs-ui/components/files"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"

export default async function Page({ params }: { params: { slug: string } }) {
	const itwst01 = allItwst01s.find((lab) => lab._meta.path === params.slug)

	console.log(params.slug)

	if (!itwst01) {
		return notFound()
	}

	return (
		<>
			<Link href="/itwst01">&larr; back</Link>
			<h2 className="text-lg tracking-tighter my-6 font-semibold">ITWST-01 / {itwst01.title}</h2>
			<MDXContent
				code={itwst01.mdx}
				components={{
					pre: ({
						// ref: _ref,
						...props
					}) => (
						<CodeBlock
							// keepBackground
							{...props}
						>
							<Pre>{props.children}</Pre>
						</CodeBlock>
					),
					Image: (props) => (
						<ImageZoom
							{...props}
							className="w-full max-w-2xl block mx-auto mt-4"
						/>
					),
					File,
					Folder,
					Files,
					Tab,
					Tabs,
				}}
			/>
			<div className="mb-10 lg:mb-20" />
		</>
	)
}
