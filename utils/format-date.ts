export function formatDate(date: string) {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}년 전`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}달 전`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}일 전`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('ko-kr', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return `${fullDate} (${formattedDate})`
}
