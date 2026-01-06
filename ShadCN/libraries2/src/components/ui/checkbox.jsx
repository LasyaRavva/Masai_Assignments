import { forwardRef } from 'react'
import { cn } from '../../lib/utils.js'

const Checkbox = forwardRef(({ className, ...props }, ref) => (
  <input
    type="checkbox"
    className={cn(
      'h-4 w-4 rounded border border-primary ring-offset-background cursor-pointer accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    ref={ref}
    {...props}
  />
))
Checkbox.displayName = 'Checkbox'

export { Checkbox }
