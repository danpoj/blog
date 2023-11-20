import Image from 'next/image'

export default function Page() {
  return (
    <div className='space-y-4'>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>홈</h1>
      <h2 className='text-sm'>
        안녕하세요 👋 <br /> Web Front-End 개발자 장원석입니다
      </h2>
      <div className='flex flex-col text-sm'>
        <h3 className='uppercase mb-1'>contact</h3>
        <p>
          <span className='pr-2'>이메일:</span> danpoj123@gmail.com
        </p>
        <p>
          <span className='pr-2'>전화번호:</span> 010-2477-8664
        </p>
      </div>
      <div className='space-y-2'>
        <a
          href='https://github.com/danpoj'
          target='_blank'
          rel='noreferrer noopener'
          className='text-blue-700 underline underline-offset-4 block w-fit hover:opacity-80'
        >
          github
        </a>
        <a
          href='/resume/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-700 underline underline-offset-4 block w-fit hover:opacity-80'
        >
          resume
        </a>
      </div>

      <div className='aspect-video bg-gradient-to-r from from-black via-black/90 to-black/80 pt-4 pb-8 px-6 flex flex-col justify-between rounded-lg max-w-[36rem]'>
        <span className='text-8xl sm:text-9xl text-white font-bold'>D</span>
        <div className='flex items-center gap-4'>
          <Image
            unoptimized
            src='https://avatars.githubusercontent.com/u/88086373?v=4'
            alt='my profile avatar'
            width={60}
            height={60}
            className='rounded-lg'
          />
          <span className='text-white font-black text-2xl'>DanpoJ</span>
        </div>
      </div>
    </div>
  )
}
