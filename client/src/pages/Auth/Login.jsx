import { useState } from 'react'
import login from '../../assets/login.png'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    console.log("login")
  }
  return (
    <div className='border-2 border-black'>
      <div>
        <img src={login} alt="login" className='h-24 w-24' />
        <h4 className='font-bold uppercase'>Login</h4>
      </div>
      <div>
        <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        New user? <Link to="/register">Register</Link>
      </div>
      <button disabled={!username || !password} onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
