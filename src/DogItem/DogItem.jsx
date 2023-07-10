import { Button, Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import DogImage from "../DogImage/DogImage";
import DeleteIcon from '@mui/icons-material/Delete';
import { ACTION_REMOVE_DOG, DogsDispatchContext } from "../context/dogsContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const DogItem = ({dog}) => {

    const dispatch = useContext(DogsDispatchContext)

    const navigate = useNavigate()

    const url = dog.url

    const splitArray = url.split('/')
    const fileName = splitArray[splitArray.length-1]

    return(
        <>
        <Button onClick={() => navigate(`/dogs/${dog.id}`)}>
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
                {/* <Link to={`/dogs/${dog.id}`}>{fileName}</Link> */}
                
            </ListItem>
            <Divider variant="middle" component="li" />
            </Button>
        </>
    )
}
export default DogItem;