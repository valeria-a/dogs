import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import DogImage from "../DogImage/DogImage";
import DeleteIcon from '@mui/icons-material/Delete';
import { ACTION_REMOVE_DOG, DogsDispatchContext } from "../context/dogsContext";
import { useContext } from "react";

const DogItem = ({url}) => {

    const dispatch = useContext(DogsDispatchContext)

    const splitArray = url.split('/')
    const fileName = splitArray[splitArray.length-1]

    return(
        <>
            <ListItem 
                alignItems="flex-start"  
                secondaryAction={
                    <IconButton 
                        edge="end" 
                        aria-label="delete" 
                        onClick={() => dispatch({
                            type: ACTION_REMOVE_DOG,
                            context: {
                                urlToRemove: url
                            }
                        })}>
                      <DeleteIcon />
                    </IconButton>
                  }>

                <DogImage addMargin={true} size={'50px'} url={url} setLoading={()=>{}}/>
                <ListItemText primary={fileName}/>
                
            </ListItem>
            <Divider variant="middle" component="li" />
        </>
    )
}
export default DogItem;