import React from 'react';
import LoginBackground from './LoginBackground';
import LoginPanel from './LoginPanel';

function Login() {
  const background = require('./bg.jpg');
  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(245,246,247,0.5), rgba(245,246,247,0.5)), url(${background})`, 
      height: '100vh', 
      backgroundSize: 'cover',
    }}>
      <LoginBackground/>
      <LoginPanel/>
    </div>
  );
}

export default Login;
