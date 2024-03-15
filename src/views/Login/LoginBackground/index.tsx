import React from 'react';
import circle1 from './circle1.png';
import circle2 from  './circle2.png';
import signal from './signal.png';

function LoginBackground() {
  return (
    <div className="!fixed left-0 right-0 top-0 bottom-0">
      <img src={circle1} alt='' className='absolute bottom-0 left-0'/>
      <img src={circle2} alt='' className='absolute right-0 top-0'/>
      <img src={signal} alt='' className='absolute top-10 left-1/3 w-30 mix-blend-soft-light'/>
    </div>
  );
}

export default LoginBackground;
