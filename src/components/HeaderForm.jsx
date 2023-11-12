import { useContext } from "react";
import { useHeaderForm } from "../hooks";
import { AddRemoveButton } from "../shared";
import { StatsContext } from "../contexts/StatisticsProvider";


export const HeaderForm = ({ localidad }) => {

  const { totalPartidos, setTotalPartidos } = useContext(StatsContext)
  const { agregarPartidos, removerPartidos } = useHeaderForm(totalPartidos, setTotalPartidos, 1);

  return (
    <>
        <p className="font-semibold text-xl">Partidos como {localidad}
            <span className="font-light text-base">(Últimos <span className="font-bold text-xl text-emerald-500">{totalPartidos}</span> partidos en general)
            </span>
        </p>
            
        <AddRemoveButton agregarPartidos={agregarPartidos} removerPartidos={removerPartidos}/>
    </>
  )
}
