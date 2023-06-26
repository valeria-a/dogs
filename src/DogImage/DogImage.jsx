import { useState } from "react"

const DogImage = ({size, url}) => {

    const [imgLoaded, setImgLoaded] = useState(false)

    const handleFinishedLoading = () => {
        console.log('finished loading')
        setImgLoaded(true)
    }

    return(
        <img style={{width: size, height: size, objectFit: 'cover', borderRadius: '15px', 
            visibility: imgLoaded ? 'visible' : 'hidden'}}
            src={url} onLoad={handleFinishedLoading}
        />
    )
}
export default DogImage