import { PostPage } from '@/components/post-page'
import { formatDate } from '@/utils/format-date'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Algorithm',
  description: 'Baekjoon online judge algorithm solutions.',
}

export default function Page() {
  return (
    <section>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>Post</h1>
      <PostPage />
    </section>
  )
}
