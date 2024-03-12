import { useState } from 'react'
import register from '../../assets/login.png'
import { Link } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleSubmit = () => {
    console.log("register")
  }
  return (
    <div className='border-2 border-black'>
      <div>
        <img src={register} alt="register" className='h-24 w-24' />
        <h4 className='font-bold uppercase'>register</h4>
      </div>
      <div>
        <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        Exsisting user? <Link to="/login">Login</Link>
      </div>
      <button disabled={!username || !password} onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Register

