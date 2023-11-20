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

  const { title, publishedAt: publishedTime, summary: description, image, slug } = algorithm
  // TODO: 내 주소로 바꾸기
  const ogImage = image ? `https://leerob.io${image}` : `https://leerob.io/og?title=${title}`

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
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
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
      <h1 className='font-medium text-2xl tracking-tighter'>
        <Balancer>{algorithm.title}</Balancer>
      </h1>

      <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-3'>{formatDate(algorithm.publishedAt)}</p>

      <Mdx code={algorithm.body.code} />
    </section>
  )
}
