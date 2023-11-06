import { useContext } from "react"
import { StatsContext } from "../contexts/StatisticsProvider"
import { ResultsContext } from "../contexts/Last5MatchesProvider";

export const useCalculateButton = () => {

    const { numberFormMenu, setNumberFormMenu } = useContext(StatsContext);
    const { golesEquipoLocal, golesEquipoVisitante } = useContext(ResultsContext);

    const nextFormMenu = () => {

      if( numberFormMenu === 1 ){
        if (!isFirstFormValidLocal() || !isFirstFormValidAway()) return;
      }

      if ( numberFormMenu === 3 ) return;
      setNumberFormMenu( currentNumber => currentNumber + 1 );
    }

    const isFirstFormValidLocal = () => {
      const resultadosEquipoLocal = Object.values(golesEquipoLocal);
      const values = resultadosEquipoLocal.map( result => Object.values(result));
      const totalResultados = values.join().split(',');
      const isValidForm = totalResultados.every( value => parseInt(value) >= 0);

      return isValidForm;
    }

    const isFirstFormValidAway = () => {
      const resultadosEquipoVisitante = Object.values(golesEquipoVisitante);
      const values = resultadosEquipoVisitante.map( result => Object.values(result));
      const totalResultados = values.join().split(',');
      const isValidForm = totalResultados.every( value => parseInt(value) >= 0);

      return isValidForm;
    }
    
  return {
    nextFormMenu
  }
}
