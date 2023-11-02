import { useHeaderForm } from "../hooks";
import { AddRemoveButton } from "../shared";


export const HeaderForm = ({ localidad }) => {

    const { agregarPartidos, removerPartidos, totalPartidos } = useHeaderForm();

  return (
    <>
        <p className="font-semibold text-xl">Goles como {localidad}
            <span className="font-light text-base">(Últimos <span className="font-bold text-xl text-emerald-500">{totalPartidos}</span> partidos)
            </span>
        </p>
            
        <AddRemoveButton agregarPartidos={agregarPartidos} removerPartidos={removerPartidos}/>
    </>
  )
}
