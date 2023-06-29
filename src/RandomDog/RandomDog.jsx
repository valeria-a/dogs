import { Button, CircularProgress } from "@mui/material"
import DogImage from "../DogImage/DogImage"
import { useState } from "react"
import axios from 'axios'

const URL = "https://random.dog/woof.json"
//fjghkdhgdklhfgl

const RandomDog = ({url, setUrl}) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleShowClick = async () => {
        let dogUrl = null
        setIsLoading(true)
        setUrl(null)
        do {
            const response = await axios.get(URL)
            dogUrl = response.data.url
            // console.log('url:', dogUrl)
        } while ( ! ( dogUrl.endsWith('jpg') || dogUrl.endsWith('jpeg') || dogUrl.endsWith('png'))  )
            
        setUrl(dogUrl) 
    }

    return(
        <>
            <Button variant="contained" onClick={handleShowClick}>SHOW ME A DOG</Button>
            {isLoading && <CircularProgress/> }
            <DogImage size={'450px'} url={url} setLoading={setIsLoading}/>
        </>
    )
}

export default RandomDog