import GoBack from '@/components/go-back'
import { Mdx } from '@/components/mdx'
import { formatDate } from '@/utils/format-date'
import { allAlgorithms } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const algorithm = allAlgorithms.find((post) => post.slug === params.slug)
  if (!algorithm) {
    return
  }

  const { title, publishedAt: publishedTime, summary: description, slug } = algorithm

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,

      url: `https://danpoj.pages.dev/algorithm/${slug}`,
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
  return allAlgorithms.map((algorithm) => ({
    slug: algorithm.slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const algorithm = allAlgorithms.find((post) => post.slug === params.slug)

  if (!algorithm) notFound()

  return (
    <section>
      <GoBack href='/algorithm'>돌아가기</GoBack>
      <h1 className='font-medium text-2xl tracking-tighter'>
        <Balancer>{algorithm.title}</Balancer>
      </h1>

      <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-3'>{formatDate(algorithm.publishedAt)}</p>

      <Mdx code={algorithm.body.code} />
    </section>
  )
}
