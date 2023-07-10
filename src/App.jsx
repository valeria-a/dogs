import './App.css';

import { MainPage } from './MainPage';
import { DogsProvider } from './context/dogsContext';


function App() {

  return(
    <DogsProvider>
      <MainPage />
    </DogsProvider>
  )

}

export default App;
