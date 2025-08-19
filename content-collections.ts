import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePresetMinify from "rehype-preset-minify"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import { rehypeCode, remarkStructure } from "fumadocs-core/mdx-plugins"

const createCollection = (name: string, directory: string, plugins = []) => {
  return defineCollection({
    name,
    directory,
    include: "**/*.mdx",
    schema: (z) => ({
      title: z.string(),
      description: z.string().optional(),
      draft: z.boolean().optional(),
      date: z.date().optional(),
    }),
    transform: async (document, context) => {
      const mdx = await compileMDX(context, document, {
        remarkPlugins: [remarkGfm, remarkStructure],
        rehypePlugins: [
          rehypeCode,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "prepend",
              properties: {
                className: ["anchor"],
                title: "Permalink to this heading",
              },
            },
          ],
          ...plugins,
          rehypePresetMinify,
        ],
      })
      return {
        ...document,
        mdx,
      }
    },
  })
}

const collectionConfigs = [
  ["itwst01", "contents/itwst01"],
  ["itwst02", "contents/itwst02"],
  ["itpf01", "contents/itpf01"],
  ["itpf02", "contents/itpf02"],
  ["cc104", "contents/cc104"],
  ["cc105", "contents/cc105"],
  ["ithci01", "contents/ithci01"],
  ["itipt01", "contents/itipt01"],
  ["itipt02", "contents/itipt02"],
]

const collections = collectionConfigs.map(([name, dir]) => createCollection(name, dir))

export default defineConfig({
  collections,
})
