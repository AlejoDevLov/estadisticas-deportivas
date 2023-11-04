import { useContext } from "react";
import { StatsContext } from "../contexts/StatisticsProvider";
import { ResultsContext } from "../contexts/Last5MatchesProvider";

export const useHeaderForm = () => {

    const { totalPartidos, setTotalPartidos } = useContext(StatsContext);
    const { setGolesEquipoVisitante, setGolesEquipoLocal } = useContext(ResultsContext);

    const agregarPartidos = () => {
        if(totalPartidos === 5) return;
        setTotalPartidos( totalPartidos + 1 );
        setGolesEquipoLocal( {} );
        setGolesEquipoVisitante( {} );
    };

    const removerPartidos = () => {
        if(totalPartidos === 1) return;
        setTotalPartidos( totalPartidos - 1 );
        setGolesEquipoLocal( {} );
        setGolesEquipoVisitante( {} );
    };

  return {
    agregarPartidos,
    removerPartidos,
    totalPartidos
  }
}
