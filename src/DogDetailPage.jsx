import { useContext } from "react"
import { useParams } from "react-router-dom"
import { DogsListContext } from "./context/dogsContext"
import DogImage from "./DogImage/DogImage"

export const DogDetailsPage = () => {

    const {id} = useParams()
    const dogsList = useContext(DogsListContext)
    const currDog = dogsList.filter(dog => dog.id == id)[0]
    console.log(currDog)

    return(
        <>
            <h2>Dog Details Page</h2>
            <p>{id}</p>
            <p>{currDog.url}</p>
            <DogImage size={'10em'} url={currDog.url} setLoading={() => {}}/>
        </>
    )
}