import { useState, useEffect } from 'react'

function UserData() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="container"><p className="loading">Loading...</p></div>
  if (error) return <div className="container"><p className="error">Error: {error}</p></div>

  return (
    <div className="container">
      <div className="user-card">
        <h2>User Details</h2>
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default UserData
