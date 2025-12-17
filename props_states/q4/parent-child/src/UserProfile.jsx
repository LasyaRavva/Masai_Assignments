import UserInfo from './UserInfo'

function UserProfile() {
  const user = { name: 'Lasya Ravva', age: 20 }

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <UserInfo name={user.name} age={user.age} />
    </div>
  )
}

export default UserProfile
