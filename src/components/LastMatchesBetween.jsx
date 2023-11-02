import { useHeaderForm } from "../hooks";
import { AddRemoveButton } from "../shared"
import { GoalsInputForm } from "./GoalsInputForm";

export const LastMatchesBetween = () => {

    const { agregarPartidos, removerPartidos } = useHeaderForm();

  return (
    <div className=" flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold text-amber-500 text-center my-6">Últimos enfrentamientos entre ambos equipos</h3>
        <AddRemoveButton agregarPartidos={agregarPartidos} removerPartidos={removerPartidos}/>
        <GoalsInputForm/>
    </div>
  )
}
