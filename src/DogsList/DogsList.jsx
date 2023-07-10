import { List } from "@mui/material"
import DogItem from "../DogItem/DogItem"
import { useContext } from "react"
import { DogsListContext } from "../context/dogsContext"

const DogsList = () => {

    const dogsList = useContext(DogsListContext)

    const items = dogsList.map((dogUrl) =>{return (
        <DogItem key={dogUrl} url={dogUrl}/>
    )})

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items}
        </List>
    )
}
export default DogsList