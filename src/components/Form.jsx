import { useContext } from "react"
import { GoalsInputForm, HeaderForm } from "./";
import { StatsContext } from "../contexts/StatisticsProvider";


export const Form = ({ localidad, setResultadoPartidos }) => {

    const { totalPartidos } = useContext(StatsContext);

    const inputsCuantity = Array.from({ length: totalPartidos }, ( v, i ) => (
        <GoalsInputForm key={i} golesMarcadosYRecibidos = { setResultadoPartidos } keyValue={i}/>
    ));

  return (
    <div className="text-center w-full md:w-[45%]">
            
        <h3 className="text-3xl font-bold text-amber-500">Equipo { localidad }</h3>
        <hr className="my-4"/>
        <form >    
            <HeaderForm localidad={localidad}/>
            { inputsCuantity }
        </form>

    </div>
  )
}
