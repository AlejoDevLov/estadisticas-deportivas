import { createContext, useState } from "react";


export const ResultsContext = createContext();


export const Last5MatchesProvider = ({ children }) => {

    const [golesEquipoLocal, setGolesEquipoLocal] = useState({});
    const [golesEquipoVisitante, setGolesEquipoVisitante] = useState({});

    const values = {
        golesEquipoLocal,
        setGolesEquipoLocal,
        golesEquipoVisitante,
        setGolesEquipoVisitante
    }

    return (
        <ResultsContext.Provider value={ { ...values } }>
            { children }
        </ResultsContext.Provider>
    )
}