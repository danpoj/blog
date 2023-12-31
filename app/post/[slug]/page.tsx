import GoBack from '@/components/go-back'
import { Mdx } from '@/components/mdx'
import { formatDate } from '@/utils/format-date'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const { title, publishedAt: publishedTime, summary: description, slug } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      // TODO: 내 주소로 바꾸기
      url: `https://leerob.io/blog/${slug}`,
      images: [
        {
          url: `https://danpoj.pages.dev/opengraph-image.png`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://danpoj.pages.dev/opengraph-image.png`],
    },
  }
}

export async function generateStaticParams({ params }: { params: { slug: string } }) {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) notFound()

  return (
    <section>
      <GoBack href='/post'>돌아가기</GoBack>

      <h1 className='font-medium text-2xl tracking-tighter'>
        <Balancer>{post.title}</Balancer>
      </h1>

      <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-3'>{formatDate(post.publishedAt)}</p>

      <Mdx code={post.body.code} />
    </section>
  )
}
