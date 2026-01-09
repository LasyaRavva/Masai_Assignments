import { Button } from './ui/button'
import { Dialog, DialogContent } from './ui/dialog'
import { Input } from './ui/input'
import { useState } from 'react'

export default function TodoDetail({ todo, onToggle, onDelete, onUpdate }) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(todo?.title ?? '')

  if (!todo) {
    return <div className="p-6">Select a todo from the sidebar</div>
  }

  const handleSave = () => {
    onUpdate(title)
    setOpen(false)
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{todo.title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(true)}>Edit</Button>
          <Button variant="outline" onClick={() => onToggle(!todo.completed)}>
            {todo.completed ? 'Mark Pending' : 'Mark Completed'}
          </Button>
          <Button variant="outline" onClick={onDelete}>Delete</Button>
        </div>
      </div>
      <div className="text-gray-600">Status: {todo.completed ? 'Completed' : 'Pending'}</div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent title="Update Todo">
          <div className="space-y-2">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Todo title" />
            <div className="flex justify-end gap-2">
              <Button onClick={handleSave}>Save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
