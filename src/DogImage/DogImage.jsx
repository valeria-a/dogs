import { useEffect, useState } from "react"

const DogImage = ({size, url, setLoading, addMargin=false}) => {

    const [imgLoaded, setImgLoaded] = useState(false)

    console.log('Rendering DogImg with url:', url,'imgLoaded:', imgLoaded)

    useEffect(
        () => {
            console.log('Called useEffect with url', url)
            setImgLoaded(false)}
        ,[url])

    const handleFinishedLoading = () => {
        console.log('finished loading url', url)
        setImgLoaded(true)
        setLoading(false)
    }

    return(
        <img style={{width: size, height: size, objectFit: 'cover', borderRadius: '15px', 
            visibility: url && imgLoaded ? 'visible' : 'hidden', marginRight: addMargin ? '0.5em' : 0}}
            src={url} onLoad={handleFinishedLoading}
        />
    )
}
export default DogImage