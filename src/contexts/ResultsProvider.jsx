import { createContext } from "react";


const resultsContext = createContext();


export const ResultsProvider = ({ children }) => {

    return (
        <resultsContext.Provider>
            { children }
        </resultsContext.Provider>
    )
}