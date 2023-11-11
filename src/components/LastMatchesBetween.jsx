import { useContext } from "react";
import { useHeaderForm } from "../hooks";
import { AddRemoveButton } from "../shared"
import { GoalsInputForm } from "./GoalsInputForm";
import { ResultsContext } from "../contexts/Last5MatchesProvider";
import { StatsContext } from "../contexts/StatisticsProvider";

export const LastMatchesBetween = () => {

  const { enfrentamientosJuntos, setEnfrentamientosJuntos } = useContext(StatsContext)
  const { agregarPartidos, removerPartidos } = useHeaderForm(enfrentamientosJuntos, setEnfrentamientosJuntos);
  const { setResultadosBetween } = useContext(ResultsContext);

  const componentsPartidos = Array.from({ length: enfrentamientosJuntos }, (v, i) => {
    return <GoalsInputForm golesMarcadosYRecibidos={setResultadosBetween} keyValue={i} key={i}/>
  });


  return (
    <div className=" flex flex-col items-center justify-center ">
        <h3 className="text-3xl font-bold text-amber-500 text-center my-6">Últimos enfrentamientos entre ambos equipos</h3>
        <h4 className="text-2xl font-bold">Equipo local</h4>
        <AddRemoveButton agregarPartidos={agregarPartidos} removerPartidos={removerPartidos}/>
        { componentsPartidos }
    </div>
  )
}
