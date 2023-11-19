import AlgorithmPage from '@/components/algorithm-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algorithm',
  description: 'Baekjoon online judge algorithm solutions.',
}

export default function Page() {
  return (
    <section>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>Algorithm</h1>
      <AlgorithmPage />
    </section>
  )
}
