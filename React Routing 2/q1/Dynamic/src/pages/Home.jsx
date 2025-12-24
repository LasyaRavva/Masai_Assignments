import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="page">
      <h1>Welcome to Home Page</h1>
      <p className="subtext">Dive into your todos after logging in.</p>
      <Link className="primary-link" to="/login">
        Go to Login
      </Link>
    </section>
  )
}

export default Home
