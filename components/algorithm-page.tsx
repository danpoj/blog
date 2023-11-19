'use client'

import { Tier } from '@/types/types'
import clsx from 'clsx'
import { allAlgorithms } from 'contentlayer/generated'
import Link from 'next/link'
import { useState } from 'react'
import { BaekjoonTierBadge, BaekjoonTierBadgeButton, tiers } from './baekjoon'

export default function AlgorithmPage() {
  const [tier, setTier] = useState<Tier>('all')
  const [value, setValue] = useState('')

  const filteredAlgorithms =
    tier === 'all'
      ? allAlgorithms.filter((algorithm) => algorithm.title.toLowerCase().includes(value.toLowerCase()))
      : allAlgorithms.filter(
          (algorithm) => algorithm.tier === tier && algorithm.title.toLowerCase().includes(value.toLowerCase())
        )

  return (
    <div className='space-y-10'>
      <div className='space-y-4'>
        <div className='flex items-center gap-2'>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as Tier)}
            className='bg-slate-100 p-2 rounded text-sm'
          >
            {tiers.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <BaekjoonTierBadge
            key={tier}
            tier={tier}
            className={clsx('text-xs text-white rounded px-3 font-bold py-1 capitalize shadow hover:bg-opacity-100')}
          >
            {tier}
          </BaekjoonTierBadge>
        </div>
        {/* <div className='flex gap-1 flex-wrap'>
          {tiers.map((t) => (
            <BaekjoonTierBadgeButton
              key={t}
              tier={t}
              className={clsx(
                'text-xs text-white rounded px-3 font-bold py-1 capitalize shadow hover:bg-opacity-100',
                tier !== t && 'bg-opacity-40'
              )}
              onClick={() => setTier(t)}
            />
          ))}
        </div> */}
        <div className='relative h-10 border rounded max-w-[20rem]'>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type='text'
            className='w-full h-full pl-3'
            placeholder='검색'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5 absolute right-2 top-2 stroke-slate-400'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </div>
      </div>
      <div className='space-y-2 sm:space-y-0'>
        {filteredAlgorithms.length === 0 ? (
          <p className='text-sm'>검색 결과가 없습니다.</p>
        ) : (
          filteredAlgorithms
            .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
            .map((post) => (
              <Link
                key={post.slug}
                className='flex flex-col py-2 pl-2 rounded hover:bg-slate-100 transition-colors duration-100 h-full'
                href={`/algorithm/${post.slug}`}
              >
                <div className='w-full flex flex-col gap-2 sm:flex-row sm:items-center'>
                  <BaekjoonTierBadge
                    tier={post.tier}
                    className='text-xs text-white rounded px-1.5 font-bold py-0.5 capitalize shadow w-fit'
                  >
                    {post.tier.slice(0, 1)}
                  </BaekjoonTierBadge>
                  <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>{post.title}</p>
                </div>
              </Link>
            ))
        )}
      </div>
    </div>
  )
}
