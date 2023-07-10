import { createContext, useReducer } from "react"

export const ACTION_ADD_DOG = "ADD_DOG"
export const ACTION_REMOVE_DOG = "REMOVE_DOG"
export const ACTION_CLEAR_ALL_DOGS = "CLEAR_ALL_DOGS"

// const [url, setUrl] = useState("")
// setUrl((prevState) => newState)

export const dogsReducer = (dogsList, {type, context}) => {
    switch (type) {
        case ACTION_ADD_DOG:
            // I expect that context looks like:
            // context = {urlToAdd: "http://sjdhfgjshgssh.com"}
            return [...dogsList, context.urlToAdd]

        case ACTION_REMOVE_DOG:
            // I expect that context looks like:
            // context = {urlToRemove: "http://sjdhfgjshgssh.com"}
            return dogsList.filter(url => url !== context.urlToRemove)

        case ACTION_CLEAR_ALL_DOGS:
            return []

        default:
            throw Error(`Action ${type} does not exist`)
    }
}

export const DogsDispatchContext = createContext(null)
export const DogsListContext = createContext(null)


export const DogsProvider = ({children}) => {

    const [dogsList, dogsDispatch] = useReducer(dogsReducer, [])

    return(
        <DogsDispatchContext.Provider value={dogsDispatch}>
        <DogsListContext.Provider value={dogsList}>
            {children}
        </DogsListContext.Provider>
        </DogsDispatchContext.Provider>
    )
}