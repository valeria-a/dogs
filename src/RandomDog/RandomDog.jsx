import { Button, CircularProgress } from "@mui/material"
import DogImage from "../DogImage/DogImage"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useContext } from "react"
import { DogsListContext } from "../context/dogsContext"

const URL = "https://random.dog/woof.json"
//fjghkdhgdklhfgl

const RandomDog = ({url, setUrl}) => {

    const [isLoading, setIsLoading] = useState(false)
    // useContext(DogsListContext)

    //useEffect(function - what to do, array of dependencies)
    //the function will be called only on mount (first render only)
    // useEffect(()=>{}, [])

    // the function will be called on EACH render
    // usually you should not use this!!!!
    // useEffect(()=>{})

    //the funciton will be called after renders that occured
    //because of url OR isLoading change
    // useEffect(()=>{}, [url, isLoading])

    useEffect(() => {
        const fetchData = async () => {
            await handleShowClick()
        }
        fetchData()
    }, [])
   

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