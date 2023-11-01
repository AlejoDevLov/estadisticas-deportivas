import { createContext, useState } from "react";

export const StatsContext = createContext();



export const StatisticsProvider = ({ children }) => {

    const [last5Matches, setLast5Matches] = useState({
        marcados: 0,
        recibidos: 0,
        totalPartidos: 0
    });

    const [numberFormMenu, setNumberFormMenu] = useState(1);

    const [totalPartidos, setTotalPartidos] = useState(5);

    const valuesProvider = {
      numberFormMenu,
      setNumberFormMenu,
      last5Matches, 
      setLast5Matches, 
      totalPartidos, 
      setTotalPartidos
    }

  return (
    <StatsContext.Provider value={ valuesProvider }>
        { children }
    </StatsContext.Provider>
  )
}