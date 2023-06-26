import { Button, CircularProgress } from "@mui/material"
import DogImage from "../DogImage/DogImage"
import { useState } from "react"
import axios from 'axios'

const URL = "https://random.dog/woof.json"

const RandomDog = () => {

    const [url, setUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleShowClick = async () => {
        let dogUrl = null
        setIsLoading(true)
        do {
            const response = await axios.get(URL)
            dogUrl = response.data.url
            console.log('url:', dogUrl)
        } while ( ! ( dogUrl.endsWith('jpg') || dogUrl.endsWith('jpeg') || dogUrl.endsWith('png'))  )
            
        setUrl(dogUrl)
        setIsLoading(false)   
    }

    return(
        <>
            <Button variant="contained" onClick={handleShowClick}>SHOW ME A DOG</Button>
            {isLoading ? <CircularProgress/> : 
                url && <DogImage size={'450px'} url={url}/>}
        </>
    )
}

export default RandomDog