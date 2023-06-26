import './App.css';
import Stack from '@mui/material/Stack';
import RandomDog from './RandomDog/RandomDog';


function App() {
  return (
    <Stack direction='column' spacing={3} width={'30%'} m={'auto'} height={'100%'}
      justifyContent="start"
      alignItems="center">
      <h2 style={{textAlign: 'center'}}>Dogs App</h2>
      <RandomDog />
    </Stack>
  );
}

export default App;
