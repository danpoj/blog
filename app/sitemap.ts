import { allPosts, allAlgorithms } from 'contentlayer/generated'

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `https://danpoj.pages.dev/post/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const algorithms = allAlgorithms.map((algorithm) => ({
    url: `https://danpoj.pages.dev/algorithm/${algorithm.slug}`,
    lastModified: algorithm.publishedAt,
  }))

  const routes = ['', '/post', '/algorithm'].map((route) => ({
    url: `https://danpoj.pages.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts, ...algorithms]
}
