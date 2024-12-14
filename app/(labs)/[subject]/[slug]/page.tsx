import React from "react"
import { allItwst01s, allItwst02s, allItpf01s } from "content-collections"
import { MDXContent } from "@content-collections/mdx/react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"
import FileCard from "@/components/shared/file-card"

// fumadocs components
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock"
import { File, Folder, Files } from "fumadocs-ui/components/files"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"

type Meta = {
	path: string
}

type Lab = {
	_meta: Meta
	title: string
	mdx: string
}

type SubjectKeys = "itwst01" | "itwst02" | "itpf01"

const subjectData: Record<SubjectKeys, Lab[]> = {
	itwst01: allItwst01s,
	itwst02: allItwst02s,
	itpf01: allItpf01s,
}

export interface PageProps {
	params: Promise<{
		subject: SubjectKeys
		slug: string
	}>
}

export default async function Page({ params }: PageProps) {
	const { subject, slug } = await params
	const labs = subjectData[subject]
	const labItem = labs.find((lab) => lab._meta.path === slug)

	if (!labItem) {
		return notFound()
	}

	return (
		<>
			<Link href={`/${subject}`}>&larr; back</Link>
			<h2 className="text-lg tracking-tighter my-6 font-semibold">
				{subject.toUpperCase()} / {labItem.title}
			</h2>
			<MDXContent
				code={labItem.mdx}
				components={{
					FileCard,
					File,
					Folder,
					Files,
					Tab,
					Tabs,
					pre: (props) => (
						<CodeBlock {...props}>
							<Pre>{props.children}</Pre>
						</CodeBlock>
					),
					Image: (props) => (
						<ImageZoom
							{...props}
							className="w-full block mx-auto mt-4 rounded-lg"
						/>
					),
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
	const params = []
	for (const subject in subjectData) {
		const labs = subjectData[subject as SubjectKeys]
		const slugs = labs.map((lab) => ({ subject, slug: lab._meta.path }))
		params.push(...slugs)
	}
	return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { subject, slug } = await params
	const labs = subjectData[subject]
	const page = labs.find((lab) => lab._meta.path === slug)

	return {
		title: `${page?.title} | ${subject.toUpperCase()}`,
		// Add additional metadata fields as needed
	}
}
