import { createContext, useState } from "react";

export const StatsContext = createContext();



export const StatisticsProvider = ({ children }) => {

    const [last5Matches, setLast5Matches] = useState({
        marcados: 0,
        recibidos: 0,
        totalPartidos: 0
    });

  return (
    <StatsContext.Provider value={{ last5Matches, setLast5Matches }}>
        { children }
    </StatsContext.Provider>
  )
}