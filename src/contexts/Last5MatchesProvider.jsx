import { createContext, useState } from "react";


export const ResultsContext = createContext();


const initialStateSecondForm = {
    1:{ partidos: 0 }
}



export const Last5MatchesProvider = ({ children }) => {

    const [golesEquipoLocal, setGolesEquipoLocal] = useState({});
    const [golesEquipoVisitante, setGolesEquipoVisitante] = useState({});

    // Estado para la segunda pagina
    const [resultadosEquipoLocal, setResultadosEquipoLocal] = useState(initialStateSecondForm);
    const [resultadosEquipoVisitante, setResultadosEquipoVisitante] = useState(initialStateSecondForm);

    // Estado para tercera pagina
    const [resultadosBetween, setResultadosBetween] = useState({});


    const values = {
        golesEquipoLocal,
        setGolesEquipoLocal,
        golesEquipoVisitante,
        setGolesEquipoVisitante,

        resultadosEquipoLocal,
        setResultadosEquipoLocal,
        resultadosEquipoVisitante,
        setResultadosEquipoVisitante,

        resultadosBetween,
        setResultadosBetween
    }

    return (
        <ResultsContext.Provider value={ { ...values } }>
            { children }
        </ResultsContext.Provider>
    )
}