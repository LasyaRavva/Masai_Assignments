export default function Sidebar({ todos, selectedId, onSelect }) {
  return (
    <aside className="w-72 border-r border-gray-200 bg-gray-50 p-4 overflow-y-auto">
      <ul className="space-y-2">
        {todos.map((t) => (
          <li key={t.id}>
            <button
              className={`w-full text-left rounded-md px-3 py-2 ${
                selectedId === t.id ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => onSelect(t.id)}
            >
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-gray-500">{t.completed ? 'Completed' : 'Pending'}</div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
