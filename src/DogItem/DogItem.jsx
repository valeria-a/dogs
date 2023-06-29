import { ListItem, ListItemText } from "@mui/material";
import DogImage from "../DogImage/DogImage";

const DogItem = ({url}) => {

    const splitArray = url.split('/')
    const fileName = splitArray[splitArray.length-1]

    return(
        <ListItem alignItems="flex-start">
            <ListItemText primary={fileName}/>
            <DogImage size={'50px'} url={url} setLoading={()=>{}}/>
        </ListItem>
    )
}
export default DogItem;