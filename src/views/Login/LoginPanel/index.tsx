import React from 'react';
import Introduction from './Introduction';
import LoginForm from './LoginForm';

function LoginPanel() {
  const signal = require('./signal.png');
  return (
    <div className='w-full relative' style={{height: '560px', top: '50%', transform: 'translateY(-50%)'}}>
      <img src={signal} className='absolute mix-blend-soft-light' style={{zIndex: 10, left: '35%', top: '-6vh', width: '120px'}}/>
      <div 
        className='relative'
        style={{
          height: '560px', width: '960px', 
          backgroundColor: 'rgba(256, 256, 256, 0.9)', 
          margin: 'auto', 
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Introduction/>
        <LoginForm/>
      </div>
    </div>
  );
}

export default LoginPanel;