import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <header>
      <nav className='flex justify-between'>
        <div className='flex'>
          <img src={logo} alt="logo" className='h-20 w-20' />
          <h4>DoDo</h4>
        </div>
        <div>
          <ul className='flex gap-4 p-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
