import React from 'react';

function LoginBackground() {
  const circle1 = require('./circle1.png');
  const circle2 = require('./circle2.png');
  return (
    <div 
      className="absolute left-0 right-0 w-full h-screen"
    >
      <img src={circle1} alt='' className='absolute bottom-0 left-0 mix-blend-soft-light' width={200}/>
      <img src={circle2} alt='' className='absolute right-0 top-0 mix-blend-soft-light' width={400}/>
    </div>
  );
}

export default LoginBackground;
