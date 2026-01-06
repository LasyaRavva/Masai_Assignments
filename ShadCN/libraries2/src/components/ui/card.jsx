import { cn } from '../../lib/utils.js'

const Card = ({ className, ...props }) => (
  <div
    className={cn('rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm', className)}
    {...props}
  />
)
Card.displayName = 'Card'

const CardHeader = ({ className, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
)
CardHeader.displayName = 'CardHeader'

const CardTitle = ({ className, ...props }) => (
  <h2 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
)
CardTitle.displayName = 'CardTitle'

const CardDescription = ({ className, ...props }) => (
  <p className={cn('text-sm text-slate-500', className)} {...props} />
)
CardDescription.displayName = 'CardDescription'

const CardContent = ({ className, ...props }) => <div className={cn('p-6 pt-0', className)} {...props} />
CardContent.displayName = 'CardContent'

const CardFooter = ({ className, ...props }) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
