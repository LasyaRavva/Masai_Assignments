import { Button } from './ui/button'

const filters = [
  { key: 'all', label: 'All Todos' },
  { key: 'completed', label: 'Completed Todos' },
  { key: 'pending', label: 'Pending Todos' },
]

export default function Navbar({ filter, onFilterChange, isAuthenticated, onAuthClick }) {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      <div className="text-xl font-semibold">Todos App</div>
      <div className="flex items-center gap-2">
        {filters.map((f) => (
          <Button
            key={f.key}
            variant={filter === f.key ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange(f.key)}
          >
            {f.label}
          </Button>
        ))}
      </div>
      <div>
        <Button onClick={onAuthClick}>{isAuthenticated ? 'Sign Out' : 'Sign In'}</Button>
      </div>
    </nav>
  )
}
