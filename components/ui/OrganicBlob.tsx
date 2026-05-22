import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

const SHAPES: Record<string, string> = {
  a: '42% 58% 63% 37% / 41% 44% 56% 59%',
  b: '63% 37% 41% 59% / 43% 62% 38% 57%',
  c: '38% 62% 56% 44% / 54% 38% 62% 46%',
  d: '50% 50% 33% 67% / 55% 48% 52% 45%',
  e: '67% 33% 47% 53% / 37% 56% 44% 63%',
}

const COLORS: Record<string, string> = {
  jade: 'rgba(45, 106, 94, 1)',
  terra: 'rgba(212, 133, 107, 1)',
  sable: 'rgba(234, 224, 212, 1)',
}

interface OrganicBlobProps {
  shape?: keyof typeof SHAPES
  color?: keyof typeof COLORS
  opacity?: number
  spin?: boolean
  float?: boolean
  className?: string
  style?: CSSProperties
}

export function OrganicBlob({
  shape = 'a',
  color = 'jade',
  opacity = 0.06,
  spin = false,
  float = true,
  className,
  style,
}: OrganicBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute',
        float && !spin && 'animate-blob-float',
        spin && 'animate-spin-slow',
        className
      )}
      style={{
        borderRadius: SHAPES[shape],
        background: COLORS[color],
        opacity,
        filter: 'blur(2px)',
        ...style,
      }}
    />
  )
}
