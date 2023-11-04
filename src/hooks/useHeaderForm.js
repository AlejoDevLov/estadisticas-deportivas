import { useContext } from "react";
import { StatsContext } from "../contexts/StatisticsProvider";

export const useHeaderForm = () => {

    const { totalPartidos, setTotalPartidos } = useContext(StatsContext);

    const agregarPartidos = () => {
        if(totalPartidos === 5) return;
        setTotalPartidos( totalPartidos + 1 );
    };

    const removerPartidos = () => {
        if(totalPartidos === 1) return;
        setTotalPartidos( totalPartidos - 1 );
    };

  return {
    agregarPartidos,
    removerPartidos,
    totalPartidos
  }
}
