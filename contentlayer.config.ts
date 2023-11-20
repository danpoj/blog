import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const Algorithm = defineDocumentType(() => ({
  name: 'Algorithm',
  filePathPattern: `**/algorithm/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    tier: {
      type: 'enum',
      options: ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'ruby'],
      required: true,
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.slice(0, -4),
    },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/post/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    article: {
      type: 'enum',
      options: ['til', 'etc'],
      required: true,
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.slice(0, -4),
    },
  },
}))

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Algorithm, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
