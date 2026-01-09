import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Button } from './button'

export function Dialog({ open, onOpenChange, children }) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  )
}

export const DialogTrigger = DialogPrimitive.Trigger

export function DialogContent({ title, children, onClose }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40" />
      <DialogPrimitive.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
        {title && <DialogPrimitive.Title className="text-lg font-semibold mb-4">{title}</DialogPrimitive.Title>}
        <div>{children}</div>
        <div className="mt-4 flex justify-end gap-2">
          <DialogPrimitive.Close asChild>
            <Button variant="outline">Close</Button>
          </DialogPrimitive.Close>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}
