function UserInfo({ name, age }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  )
}

export default UserInfo
