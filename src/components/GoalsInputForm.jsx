import { useContext, useEffect, useRef, useState } from "react";
import { StatsContext } from "../contexts/StatisticsProvider";

export const GoalsInputForm = ({ golesMarcadosYRecibidos, keyValue }) => {

  const { totalPartidos, enfrentamientosJuntos } = useContext(StatsContext);

  const [goles, setGoles] = useState({
    marcados: 0,
    recibidos: 0
  });

  const onInputGoalsChange = (e) => {
    const { value, name } = e.target;
    const valueNum = parseInt(value);

    // Actualiza value en el input 
    setGoles({ ...goles, [name]: valueNum });

    // Envia registro de goles al componente padre cuando hay un cambio en lso inputs
    if ( name === 'marcados' ){
      golesMarcadosYRecibidos( state =>( { ...state, [keyValue]: { ...state[keyValue], 'marcados': valueNum} }));
    } else {
      golesMarcadosYRecibidos( state =>( { ...state, [keyValue]: { ...state[keyValue], 'recibidos': valueNum} }));

    }
  }

  const marcados = useRef();
  const recibidos = useRef();

  // Envia registro de goles al componente padre al inicializar el formulario
  useEffect(() => {
    const { current } = marcados;
    const numberMarcados = parseInt(current.value);

    const { current: currentRecibidos } = recibidos;
    const numberRecibidos = parseInt(currentRecibidos.value);

    golesMarcadosYRecibidos( state =>( { ...state, [keyValue]: { ...state[keyValue], 'marcados': numberMarcados} }));

    golesMarcadosYRecibidos( state =>( { ...state, [keyValue]: { ...state[keyValue], 'recibidos': numberRecibidos} }));
  }, [totalPartidos, enfrentamientosJuntos, ]);
  


  return (
    <div className="flex text-xl my-4">
        <div className="space-y-2 flex items-center justify-center flex-wrap">
            <label className="text-emerald-400">Marcados</label>
            <input 
              type="number" 
              className="border border-zinc-700 rounded-md w-2/5 text-black p-2 mx-3 text-base text-center"
              min="0"
              value={ goles.marcados }
              ref={marcados}
              onChange={onInputGoalsChange}
              name="marcados"/>
        </div>
        <div className="space-y-2  flex items-center justify-center flex-wrap">
            <label className="text-red-400">Recibidos</label>
            <input 
              type="number" 
              className="border border-zinc-700 rounded-md w-2/5 text-black p-2 mx-3 text-base text-center"
              min="0"
              ref={recibidos}
              value={ goles.recibidos }
              onChange={onInputGoalsChange}
              name="recibidos"/>
        </div>
    </div>
  )
}
