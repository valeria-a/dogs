import Stack from '@mui/material/Stack';
import RandomDog from './RandomDog/RandomDog';
import { Button } from '@mui/material';
import DogsList from './DogsList/DogsList';
import { useContext, useReducer, useState } from 'react';
import { ACTION_ADD_DOG, ACTION_CLEAR_ALL_DOGS, DogsDispatchContext, DogsListContext, DogsProvider, dogsReducer } from './context/dogsContext';

export const MainPage = () => {
    const [currentUrl, setCurrentUrl] = useState(null)

    const dogsList = useContext(DogsListContext)
    const dogsDispatch = useContext(DogsDispatchContext)


    return (
  
      <Stack direction='column' spacing={3} width={'30%'} m={'auto'} height={'100%'}
        justifyContent="start"
        alignItems="center">
          <h2 style={{textAlign: 'center'}}>Dogs App</h2>
        <RandomDog url={currentUrl} setUrl={setCurrentUrl}/>
  
          <Button onClick={() => {
            dogsDispatch({
              type: ACTION_ADD_DOG,
              context: {urlToAdd: currentUrl}
            })
          }} 
            disabled={dogsList.includes(currentUrl)}>
            Add
          </Button>
  
          
              <DogsList />
  
  
  
          <Button onClick={() => {
            dogsDispatch({
              type: ACTION_CLEAR_ALL_DOGS,
            })
          }}>
            CLEAR ALL
          </Button>
      </Stack>
    );
}