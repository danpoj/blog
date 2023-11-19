import { Tier } from '@/types/types'
import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export const tiers: Tier[] = ['all', 'bronze', 'silver', 'gold', 'platinum', 'diamond', 'ruby']

type Props = HTMLAttributes<HTMLButtonElement> & {
  tier: Tier
}

export function BaekjoonTierBadge({ tier, ...props }: Props) {
  return (
    <div
      className={clsx(
        props.className,
        tier === 'bronze'
          ? 'bg-baekjoon-bronze'
          : tier === 'silver'
          ? 'bg-baekjoon-silver'
          : tier === 'gold'
          ? 'bg-baekjoon-gold'
          : tier === 'platinum'
          ? 'bg-baekjoon-platinum'
          : tier === 'diamond'
          ? 'bg-baekjoon-diamond'
          : tier === 'ruby'
          ? 'bg-baekjoon-ruby'
          : 'bg-black'
      )}
    >
      {props.children}
    </div>
  )
}

export function BaekjoonTierBadgeButton({ tier, ...props }: Props) {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        props.className,
        tier === 'bronze'
          ? 'bg-baekjoon-bronze'
          : tier === 'silver'
          ? 'bg-baekjoon-silver'
          : tier === 'gold'
          ? 'bg-baekjoon-gold'
          : tier === 'platinum'
          ? 'bg-baekjoon-platinum'
          : tier === 'diamond'
          ? 'bg-baekjoon-diamond'
          : tier === 'ruby'
          ? 'bg-baekjoon-ruby'
          : 'bg-black'
      )}
    >
      {tier}
    </button>
  )
}
