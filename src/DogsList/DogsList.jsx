import { List } from "@mui/material"
import DogItem from "../DogItem/DogItem"

const DogsList = ({dogsList}) => {

    const items = dogsList.map((dogUrl) =>{return (
        <DogItem key={dogUrl} url={dogUrl} />
    )})

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items}
        </List>
    )
}
export default DogsList