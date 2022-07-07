import React from 'react'
import './App.css';
import { useState } from 'react';


function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='container'>
      <input
      type="text" 
      placeholder='Username' 
      value={username} 
      onChange={(e) => setUsername(e.target.value)} />

      <input 
      type="password"
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)} />

      <h2>{username}</h2>
      <h2>{showPassword ? password : '*'.repeat(password.length)}</h2>
      <button onClick={(e) => setShowPassword(!showPassword)}>Show/Hide Password</button>


    </div>
  );
}

export default App;
