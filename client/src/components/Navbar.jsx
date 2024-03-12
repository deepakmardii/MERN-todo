import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { getUserDetails } from "../util/getUser";
import avatar from "../assets/login.png";

const Navbar = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
  }, []);

  const handleLogout = () => {
    //console.log("logout");
    localStorage.removeItem("todoAppUser");
    navigate("/login");
  };

  return (
    <header>
      <nav className="flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="h-20 w-20" />
          <h4>DoDo</h4>
        </div>
        <div>
          <ul className="flex gap-4 p-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user && (
              <li>
                <Link to="/to-do-list">My Tasks</Link>
              </li>
            )}
            {user ? (
              <>
                <div className="flex gap-4">
                  <img src={avatar} alt="avatar" className="h-6 w-6" />
                  <span>
                    {user?.firstName
                      ? `Hello, ${user?.firstName} ${user?.lastName}`
                      : user?.username}
                  </span>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
