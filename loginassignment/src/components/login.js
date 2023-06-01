import React, { useState } from 'react';
import './login.css';
export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (email === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <div>Logged in successfully!</div>;
  }

  return (
    
    <div className="form">
      <div className="form-body">
        
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Log in</h2>
            <label htmlFor="email">Email:</label><br/>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label><br/>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div><br/>
          <button type="submit">Signin</button>
        </form>
      </div>
    </div>
  
    

  );
}
