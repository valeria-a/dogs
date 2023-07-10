import { Link, Outlet } from 'react-router-dom';
import './App.css';

import { MainPage } from './MainPage';
import { DogsProvider } from './context/dogsContext';


function App() {

  console.log('Rendering App')

  return(
    <>
      <h1>MY APP</h1>
      {/* <a href='/'>Home</a> */}
      <Link to={'/'}>Home</Link>
      <br />
      {/* <a href='/profile'>Profile</a> */}
      <Link to={'/profile'}>Profile</Link>
      <DogsProvider>
        <Outlet />
      </DogsProvider>
    </>
  )

}

export default App;
