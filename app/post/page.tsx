import { PostPage } from '@/components/post-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post',
  description: '블로그 모든 게시글',
}

export default function Page() {
  return (
    <section>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>게시글</h1>
      <PostPage />
    </section>
  )
}
