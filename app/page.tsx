import Image from 'next/image'

export default function Page() {
  return (
    <div className='space-y-4'>
      <div className='aspect-video bg-gradient-to-r from from-black via-black/90 to-black/80 pt-4 pb-8 px-6 flex flex-col justify-between rounded-lg max-w-[28rem]'>
        <div className='text-white tracking-tight space-y-2'>
          <p>danpoj123@gmail.com</p>
          <div className='flex gap-2'>
            <a
              href='https://github.com/danpoj'
              target='_blank'
              rel='noreferrer noopener'
              className='underline underline-offset-4 block w-fit hover:opacity-80'
            >
              github
            </a>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Image
            unoptimized
            src='https://avatars.githubusercontent.com/u/88086373?v=4'
            alt='my profile avatar'
            width={60}
            height={60}
            className='rounded-lg'
          />
          <span className='text-white font-bold tracking-tighter text-2xl'>DanpoJ</span>
        </div>
      </div>
    </div>
  )
}
