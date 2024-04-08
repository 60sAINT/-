import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import './styles/output.css';
import './styles/index.less';

function App () {
  const Main = lazy(() => {return import('./views/Main')});
  const Login = lazy(() => {return import('./views/Login')});
  const routes = useRoutes([
    {
      path:'/',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Main/>
        </Suspense>
      ),
    },
    {
      path:'/login',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Login/>
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      {routes}
    </>
  )
}

export default App;