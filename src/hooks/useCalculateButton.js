import { useContext } from "react"
import { StatsContext } from "../contexts/StatisticsProvider"
import { ResultsContext } from "../contexts/Last5MatchesProvider";

export const useCalculateButton = () => {

    const { numberFormMenu, setNumberFormMenu } = useContext(StatsContext);
    const { golesEquipoLocal, golesEquipoVisitante, resultadosEquipoLocal,
      resultadosEquipoVisitante, resultadosBetween } = useContext(ResultsContext);

      const argsPromedioGoles = {
        golesEquipoLocal,
        golesEquipoVisitante,
        resultadosEquipoLocal,
        resultadosEquipoVisitante,
        resultadosBetween
      }

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
          : isFirstFormValid(resultadosBetween);
          promedioGoles(argsPromedioGoles);
          return;
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



// Calcular promedio de goles
const promedioGoles = ( argsPromedioGoles ) => {
  const { golesEquipoLocal, golesEquipoVisitante, resultadosEquipoVisitante, resultadosEquipoLocal, resultadosBetween } = argsPromedioGoles;

  const promedioLocalPrimerForm = promedioGolesPrimerFormulario(golesEquipoLocal);
  const promedioVisitantePrimerForm = promedioGolesPrimerFormulario(golesEquipoVisitante);

  const promedioLocalSegundoForm = promedioGolesSegundoFormulario(resultadosEquipoLocal);
  const promedioVisitanteSegundoForm = promedioGolesSegundoFormulario(resultadosEquipoVisitante);
  
  const promedioTercerForm = promedioGolesTercerFormulario(resultadosBetween);

  console.log({ promedioVisitanteSegundoForm, promedioLocalSegundoForm, promedioVisitantePrimerForm, promedioLocalPrimerForm, promedioTercerForm })
}

const promedioGolesPrimerFormulario = ( golesEquipo ) => {
  const totalPartidos = Object.values(golesEquipo);
  const totalPartidosLength = totalPartidos.length;
  const subArrayOfGoles = totalPartidos.map( partido => Object.values(partido) );
  const arrayOfGoles = subArrayOfGoles.flat(Infinity);
  
  let totalGoles = 0;

  for( let i=0; i<arrayOfGoles.length; i++ ){
    totalGoles += arrayOfGoles[i];
  }

  const promedio = totalGoles/totalPartidosLength;
  return promedio;
}

const promedioGolesSegundoFormulario = ( datosEquipo ) => {
  const { marcados, recibidos, partidos } = datosEquipo[1];
  if ( partidos === 0 ) return 0;
  const promedio = (marcados + recibidos) / partidos;
  return promedio;
}

const promedioGolesTercerFormulario = ( datos ) => {
  const totalDatos = Object.values(datos);

  let golesMarcados = 0;
  let golesRecibidos = 0;
  const totalEnfrentamientos = totalDatos.length;

  for ( let i=0; i<totalDatos.length; i++ ){
    golesMarcados += totalDatos[i].marcados;
    golesRecibidos += totalDatos[i].recibidos;
  }

  const promedio = ( golesMarcados + golesRecibidos ) / totalEnfrentamientos;

  return promedio;
}