import { twMerge } from 'tailwind-merge'

export function Input({ className, ...props }) {
  return (
    <input
      className={twMerge(
        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
