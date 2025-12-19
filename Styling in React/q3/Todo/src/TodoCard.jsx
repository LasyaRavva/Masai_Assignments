function TodoCard({ userId, title, completed }) {
  return (
    <div style={{
      border: '1px solid #9f4242ff',
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '5px',
      backgroundColor: completed ? '#e8f5e9' : '#fff3e0',
      boxShadow: '0 2px 4px rgba(134, 34, 34, 0.1)',
    }}>
      <p style={{ margin: '5px 0', fontSize: '12px', color: '#813b3bff' }}>
        <strong>User ID:</strong> {userId}
      </p>
      <p style={{ margin: '5px 0', fontSize: '16px', fontWeight: 'bold' ,color: '#6b2d2dff'}}>
        {title}
      </p>
      <p style={{ margin: '5px 0', color: completed ? 'green' : 'red' }}>
        <strong>Status:</strong> {completed ? '✓ Completed' : '✗ Not Completed'}
      </p>
    </div>
  )
}

export default TodoCard
