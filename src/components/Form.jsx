import { useContext } from "react"
import { GoalsInputForm, HeaderForm } from "./";
import { StatsContext } from "../contexts/StatisticsProvider";


export const Form = ({ localidad }) => {

    const { setLast5Matches, totalPartidos } = useContext(StatsContext);

    const inputsCuantity = Array.from({ length: totalPartidos }, ( v, i ) => (
        <GoalsInputForm key={i}/>
    ));

    const submitForm = e => {
        e.preventDefault();

        let marcados = 0;
        e.target.marcados.forEach( item => {
            marcados += Number(item.value);
        });

        let recibidos = 0;
        e.target.recibidos.forEach( item => {
            recibidos += Number(item.value);
        });

        const newStateProvider = {
            marcados,
            recibidos,
            totalPartidos
        }

        setLast5Matches({ ...newStateProvider });
        setLast5Matches( (matches) => console.log(matches));
    }

  return (
    <div className="text-center w-full md:w-[45%]">
            
        <h3 className="text-3xl font-bold text-amber-500">Equipo { localidad }</h3>
        <hr className="my-4"/>
        <form onSubmit={submitForm}>    
            <HeaderForm localidad={localidad}/>
            { inputsCuantity }
        </form>

    </div>
  )
}
