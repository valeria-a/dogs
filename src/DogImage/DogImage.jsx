const DogImage = ({size, url}) => {


    const handleFinishedLoading = () => {
        console.log('finished loading')
    }

    return(
        <img style={{width: size, height: size, objectFit: 'cover', borderRadius: '15px'}}
            src={url} onLoad={handleFinishedLoading}
        />
    )
}
export default DogImage