import React from "react"
import { allItwst02s } from "content-collections"
import { MDXContent } from "@content-collections/mdx/react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"

// fumadocs components
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock"
import { File, Folder, Files } from "fumadocs-ui/components/files"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"

export default async function Page({ params }: { params: { slug: string } }) {
	const itwst02 = allItwst02s.find((lab) => lab._meta.path === params.slug)

	// console.log(params.slug)

	if (!itwst02) {
		return notFound()
	}

	return (
		<>
			<Link href="/itwst02">&larr; back</Link>
			<h2 className="text-lg tracking-tighter my-6 font-semibold">ITWST-02 / {itwst02.title}</h2>
			<MDXContent
				code={itwst02.mdx}
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
					hr: (props) => (
						<Separator
							{...props}
							className="my-4"
						/>
					),
				}}
			/>
			<div className="mb-10 lg:mb-20" />
		</>
	)
}

export const generateStaticParams = async () => {
	return allItwst02s.map((lab) => ({ slug: lab._meta.path }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
	const page = allItwst02s.find((lab) => lab._meta.path === params.slug)

	return {
		title: `${page?.title} | ITWST-02`,
		// description: page.data.description,
		// openGraph: {
		// 	title: page.data.title,
		// 	url: "https://ca-resources.vercel.app/guides",
		// 	description: page.data.description,
		// 	images: image,
		// 	siteName: "CA Resources | Guides",
		// },
		// twitter: {
		// 	card: "summary_large_image",
		// 	title: page.data.title,
		// 	description: page.data.description,
		// 	images: image,
		// },
	} satisfies Metadata
}
