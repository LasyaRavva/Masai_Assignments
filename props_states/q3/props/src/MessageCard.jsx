function MessageCard({ title, message }) {
  return (
    <div className="msg-card">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  )
}

export default MessageCard
