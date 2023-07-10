import { List } from "@mui/material"
import DogItem from "../DogItem/DogItem"
import { useContext } from "react"
import { DogsListContext } from "../context/dogsContext"

const DogsList = () => {

    const dogsList = useContext(DogsListContext)

    const items = dogsList.map((dogObj) =>{return (
        <DogItem key={dogObj.id} dog={dogObj}/>
    )})

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items}
        </List>
    )
}
export default DogsList