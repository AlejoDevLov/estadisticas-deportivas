import { createContext, useState } from "react";

export const StatsContext = createContext();

const initialState = {
  last5GeneralMatches: {},
  totalGoalsInLeague: {},
  lastMatchesBetween: {}
}


export const StatisticsProvider = ({ children }) => {

    const [numberFormMenu, setNumberFormMenu] = useState(1);
    const [totalPartidos, setTotalPartidos] = useState(5);
    const [resultsPerPage, setResultsPerPage] = useState(initialState);

    const valuesProvider = {
      numberFormMenu,
      setNumberFormMenu,
      totalPartidos, 
      setTotalPartidos,
      resultsPerPage,
      setResultsPerPage,
    }

  return (
    <StatsContext.Provider value={ valuesProvider }>
        { children }
    </StatsContext.Provider>
  )
}