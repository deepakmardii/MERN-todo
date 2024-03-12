import { useState } from "react";
import login from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../services/authServices.js";
import { getErrorMessage } from "../../util/getError.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let data = {
        username,
        password,
      };
      const response = await AuthServices.loginUser(data);
      console.log(response.data);
      localStorage.setItem("todoAppUser", JSON.stringify(response.data));
      navigate("/to-do-list");
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log(getErrorMessage(err));
      setLoading(false);
    }
  };
  return (
    <div className="border-2 border-black">
      <div>
        <img src={login} alt="login" className="h-24 w-24" />
        <h4 className="font-bold uppercase">Login</h4>
      </div>
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        New user? <Link to="/register">Register</Link>
      </div>
      <button
        loading={loading}
        disabled={!username || !password}
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
