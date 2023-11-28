'use client'

import { formatDate } from '@/utils/format-date'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { useState } from 'react'

export function PostPage() {
  const [value, setValue] = useState('')

  const filteredPosts = allPosts.filter(
    (post) => post.article === 'published' && post.title.toLowerCase().includes(value.toLowerCase())
  )

  return (
    <div className='space-y-10'>
      <div className='space-y-4'>
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
        {filteredPosts.length === 0 ? (
          <p className='text-sm'>검색 결과가 없습니다.</p>
        ) : (
          filteredPosts
            .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
            .map((post) => (
              <Link
                key={post.path}
                className='flex flex-col py-2 pl-2 rounded hover:bg-slate-100 transition-colors duration-100 h-full'
                href={`/${post.path}`}
              >
                <div className='w-full flex flex-col gap-2 sm:flex-row sm:items-center'>
                  <p className='text-neutral-900 dark:text-neutral-100 tracking-tight text-lg'>{post.title}</p>
                </div>
                <span className='text-sm text-neutral-500 dark:text-neutral-200 tracking-tight'>
                  {formatDate(post.publishedAt)}
                </span>
              </Link>
            ))
        )}
      </div>
    </div>
  )
}
