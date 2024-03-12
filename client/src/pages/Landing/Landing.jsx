import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"
import landing from '../../assets/landing.jpg'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 py-10">
        <div className="col-span-1">
          <h1 className="text-7xl font-bold">Schedule Your Daily tasks With <span className="text-blue-500">DoDo!</span></h1>
          <div className="p-5 flex gap-4">
            <Link to='/register' className="">Register</Link>
            <Link to='/login' className="">Login</Link>
          </div>
        </div>
        <div className="col-span-1">
          <img src={landing} alt="landing" />
        </div>
      </div>
    </div>
  )
}

export default Landing
