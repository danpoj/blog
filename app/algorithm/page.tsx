import AlgorithmPage from '@/components/algorithm-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algorithm',
  description: '백준 알고리즘 자바스크립트 문제 풀이 (Baekjoon online judge algorithm javascript solutions)',
}

export default function Page() {
  return (
    <section>
      <AlgorithmPage />
    </section>
  )
}
