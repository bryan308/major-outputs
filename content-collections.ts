import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"

import remarkGfm from "remark-gfm"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"
import rehypePresetMinify from "rehype-preset-minify"

const itwst01 = defineCollection({
	name: "itwst01",
	directory: "contents/itwst01",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
		summary: z.string().optional(),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: "wrap",
						properties: {
							className: ["anchor"],
							title: "Permalink to this heading",
						},
					},
				],
				rehypePrismPlus,
				rehypeKatex,
				rehypePresetMinify,
			],
		})
		return {
			...document,
			mdx,
		}
	},
})

const itwst02 = defineCollection({
	name: "itwst02",
	directory: "contents/itwst02",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
		summary: z.string().optional(),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document)
		return {
			...document,
			mdx,
		}
	},
})

export default defineConfig({
	collections: [itwst01, itwst02],
})
