import { createContext, useState } from "react";

export const StatsContext = createContext();

const initialState = {
  promedioGoles: 0, 
  isComplete: false
}


export const StatisticsProvider = ({ children }) => {

    const [numberFormMenu, setNumberFormMenu] = useState(1);
    const [totalPartidos, setTotalPartidos] = useState(5);
    const [enfrentamientosJuntos, setEnfrentamientosJuntos] = useState(1);
    const [resultadoEstadisticas, setResultadoEstadisticas] = useState(initialState);

    const valuesProvider = {
      numberFormMenu,
      setNumberFormMenu,
      totalPartidos, 
      setTotalPartidos,
      resultadoEstadisticas,
      setResultadoEstadisticas,
      enfrentamientosJuntos,
      setEnfrentamientosJuntos
    }

  return (
    <StatsContext.Provider value={ valuesProvider }>
        { children }
    </StatsContext.Provider>
  )
}