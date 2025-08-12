import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePresetMinify from "rehype-preset-minify"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

// import { rehypeCode } from "fumadocs-core/mdx-plugins"

const createCollection = (name: string, directory: string, plugins = []) => {
  return defineCollection({
    name,
    directory,
    include: "**/*.mdx",
    schema: (z) => ({
      title: z.string(),
      description: z.string().optional(),
      draft: z.boolean().optional(),
    }),
    transform: async (document, context) => {
      const mdx = await compileMDX(context, document, {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          // rehypeCode,
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

const itwst01 = createCollection("itwst01", "contents/itwst01")
const itwst02 = createCollection("itwst02", "contents/itwst02")
const itpf01 = createCollection("itpf01", "contents/itpf01")
const itpf02 = createCollection("itpf02", "contents/itpf02")
const cc104 = createCollection("cc104", "contents/cc104")
const cc105 = createCollection("cc105", "contents/cc105")
const ithci01 = createCollection("ithci01", "contents/ithci01")

export default defineConfig({
  collections: [itwst01, itwst02, itpf01, itpf02, cc104, cc105, ithci01],
})
