import { useContext } from "react"
import { StatsContext } from "../contexts/StatisticsProvider"
import { ResultsContext } from "../contexts/Last5MatchesProvider";

export const useCalculateButton = () => {

    const { numberFormMenu, setNumberFormMenu } = useContext(StatsContext);
    const { golesEquipoLocal, golesEquipoVisitante, resultadosEquipoLocal, resultadosEquipoVisitante } = useContext(ResultsContext);

    const nextFormMenu = () => {
      switch(numberFormMenu){
        case 1
          : if (!isFirstFormValid(golesEquipoLocal) || !isFirstFormValid(golesEquipoVisitante)) return;
          setNumberFormMenu( currentNumber => currentNumber + 1 );
          break;

        case 2
          : if( !isSecondFormValid(resultadosEquipoLocal) || !isSecondFormValid(resultadosEquipoVisitante) ) return;
          setNumberFormMenu( currentNumber => currentNumber + 1 );
          break;

        case 3
          : return;
      }
    }
    
  return {
    nextFormMenu
  }
}

const isFirstFormValid = (golesEquipo) => {
  const resultadosEquipo = Object.values(golesEquipo);
  const values = resultadosEquipo.map( result => Object.values(result));
  const totalResultados = values.join().split(',');
  const isValidForm = totalResultados.every( value => parseInt(value) >= 0);

  return isValidForm;
}

const isSecondFormValid = (resultados) => {
  const totalResultados = resultados[1];
  const totalResultadosArray = Object.values(totalResultados);
  const isValid = totalResultadosArray.every( value => value >= 0);

  return isValid;
}