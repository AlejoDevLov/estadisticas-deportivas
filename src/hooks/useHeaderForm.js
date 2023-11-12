import { useContext } from "react";
import { StatsContext } from "../contexts/StatisticsProvider";
import { ResultsContext } from "../contexts/Last5MatchesProvider";

export const useHeaderForm = (partidos, setPartidos, numeroFormulario) => {

    const { totalPartidos } = useContext(StatsContext);
    const { setGolesEquipoLocal, setGolesEquipoVisitante, setResultadosBetween } = useContext(ResultsContext);

    let removerPartidos;
    const agregarPartidos = () => {
      if(partidos === 5) return;
      setPartidos( partidos + 1 );
  };

    if( numeroFormulario === 1 ){
  
      removerPartidos = () => {
          if(partidos === 1) return;
          setPartidos( partidos - 1 );
          setGolesEquipoLocal({});
          setGolesEquipoVisitante({});
      };

    } else if( numeroFormulario === 3 ){

    removerPartidos = () => {
        if(partidos === 1) return;
        setPartidos( partidos - 1 );
        setResultadosBetween({});
    };

    }


  return {
    agregarPartidos,
    removerPartidos,
    totalPartidos
  }
}
