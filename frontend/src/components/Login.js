import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
      toast.success("Login Successful");
    } catch (error) {
      console.error("Login error", error.response.data);
      console.log(error.response.data);
      // You might set an error state to display the error message in your UI
      // For example:
      toast.error("login failed");
    }
  };

  return (
    <div className="login_page">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="login_register">
            New User? <a href="./signup">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
