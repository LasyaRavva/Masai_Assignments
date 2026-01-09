import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white hover:bg-gray-800',
        outline: 'border border-gray-300 hover:bg-gray-50',
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-6',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

export function Button({ className, variant, size, ...props }) {
  return (
    <button className={twMerge(buttonVariants({ variant, size }), className)} {...props} />
  )
}
