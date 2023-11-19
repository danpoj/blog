export default function Page() {
  return (
    <div className='space-y-4'>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>Home</h1>
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
    </div>
  )
}
