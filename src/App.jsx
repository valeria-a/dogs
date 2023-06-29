import './App.css';
import Stack from '@mui/material/Stack';
import RandomDog from './RandomDog/RandomDog';
import { Button } from '@mui/material';
import DogsList from './DogsList/DogsList';
import { useState } from 'react';


function App() {

  const [dogsList, setDogsList] = useState([])
  const [currentUrl, setCurrentUrl] = useState(null)

  const handleAddDog = () => {
    
    // don't do this - this will not work!!!
    // in this case render will not happen!
    // dogsList.push(currentUrl)
    // setDogsList(dogsList)

    //This is the correct way to add element to a list
    // such that render will trigger
    const newDogsList = [...dogsList, currentUrl]
    setDogsList(newDogsList)

  }

  return (
    <Stack direction='column' spacing={3} width={'30%'} m={'auto'} height={'100%'}
      justifyContent="start"
      alignItems="center">
      <h2 style={{textAlign: 'center'}}>Dogs App</h2>
      <RandomDog url={currentUrl} setUrl={setCurrentUrl}/>
      <Button onClick={handleAddDog}>Add</Button>
      <DogsList dogsList={dogsList} />
    </Stack>
  );
}

export default App;
