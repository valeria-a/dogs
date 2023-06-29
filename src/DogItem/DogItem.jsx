import DogImage from "../DogImage/DogImage";

const DogItem = ({url}) => {

    return(
        <DogImage size={'50px'} url={url} setLoading={()=>{}}/>
    )
}
export default DogItem;