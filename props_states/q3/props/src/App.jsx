import './App.css'
import MessageCard from './MessageCard'

function App() {
  const cards = [
    { title: 'Welcome', message: 'This is a reusable MessageCard component.' },
    { title: 'Reminder', message: 'Props let you pass unique content to each card.' },
    { title: 'Tip', message: 'You can render as many cards as you like by mapping over data.' },
    { title: 'Thanks', message: 'Here is a fourth card to show variety.' }
  ]

  return (
    <div className="app">
      <h1>Message Cards</h1>
      <p className="subtitle">Rendering reusable components with different props.</p>
      <div className="cards-grid">
        {cards.map((card, idx) => (
          <MessageCard key={idx} title={card.title} message={card.message} />
        ))}
      </div>
    </div>
  )
}

export default App
