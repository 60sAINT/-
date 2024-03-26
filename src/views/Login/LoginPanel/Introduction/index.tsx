import React from 'react';

function Introduction() {
  const inCircle = require('./inCircle.png');
  return (
    <div 
      className='relative'
      style={{
        height: '100%', width: '50%', float: 'left', color: 'white', 
        backgroundImage: 'linear-gradient(134deg, #8c68a5 0%, #8c8ed0 100%)',
      }}
    >
      <div style={{padding: '0 80px', height:'100%'}}>
        <div style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
          <h3 className='m-0 p-0' style={{fontSize: '1.17em'}}>Welcom to</h3>
          <h1 className='p-0' style={{fontWeight: '800', marginTop: '10px', fontSize: '32px'}}>
            <span style={{fontWeight: '200'}}>基于</span>知识图谱<span style={{fontWeight: '200'}}>的</span><br/>大学生就业能力评价和职位推荐<span style={{fontWeight: '200'}}>系统</span>
          </h1>
          <p style={{lineHeight: '2', fontWeight: 'lighter', fontSize: '18px'}}>
            这里写对系统的介绍<br/>这里写对系统的介绍<br/>这里写对系统的介绍<br/>这里写对系统的介绍<br/>这里写对系统的介绍
          </p>
        </div>
      </div>
      <img src={inCircle} className='absolute' style={{right: '-90px', width: '180px', height: 'auto', bottom: '20px'}}/>
    </div>
  );
}

export default Introduction;