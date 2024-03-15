import React from 'react';

function LoginBackground() {
  const circle1 = require('./circle1.png');
  const circle2 = require('./circle2.png');
  const signal = require('./signal.png');
  return (
    <div className="!fixed left-0 right-0 top-0 bottom-0">
      <img src={circle1} alt='' className='absolute bottom-0 left-0'/>
      <img src={circle2} alt='' className='absolute right-0 top-0'/>
      <img src={signal} alt='' className='absolute top-10 left-1/3 w-30 mix-blend-soft-light'/>
    </div>
  );
}

export default LoginBackground;
