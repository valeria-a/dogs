import DogItem from "../DogItem/DogItem"

const DogsList = ({dogsList}) => {

    const items = dogsList.map((dogUrl) =>{return (
        <DogItem url={dogUrl} />
    )})

    return (
        <ul>
            {items}
        </ul>
    )
}
export default DogsList