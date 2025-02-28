import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="form-container">
        
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
         <div className="label-input">
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br></br>
         <button className="btn2" type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/Register">Register here</Link>
        </p>
        </div>
      </form>
    
    </div>
  );
};

export default Login;
