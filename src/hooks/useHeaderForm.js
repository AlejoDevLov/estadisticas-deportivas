import { useContext } from "react";
import { StatsContext } from "../contexts/StatisticsProvider";

export const useHeaderForm = (partidos, setPartidos) => {

    const { totalPartidos } = useContext(StatsContext);

    const agregarPartidos = () => {
        if(partidos === 5) return;
        setPartidos( partidos + 1 );
    };

    const removerPartidos = () => {
        if(partidos === 1) return;
        setPartidos( partidos - 1 );

    };

  return {
    agregarPartidos,
    removerPartidos,
    totalPartidos
  }
}
