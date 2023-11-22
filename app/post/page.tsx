import { PostPage } from '@/components/post-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post',
  description: '블로그 모든 게시글',
}

export default function Page() {
  return (
    <section>
      <PostPage />
    </section>
  )
}
