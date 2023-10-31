import { useContext, useState } from "react"
import { GoalsInputForm } from "./GoalsInputForm";
import { StatsContext } from "../contexts/StatisticsProvider";


export const Form = ({ localidad }) => {

    const [totalPartidos, settotalPartidos] = useState(5);

    const { last5Matches, setLast5Matches } = useContext(StatsContext);

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
    <div className="text-center">
        
        <h3 className="text-2xl font-bold">Equipo { localidad }</h3>
        <hr className="my-4"/>
        <form onSubmit={submitForm}>
            <p className="font-semibold text-xl">Goles como {localidad}<span className="font-light text-base"> (Últimos {totalPartidos} partidos)</span></p>
            
            <div className="flex items-center justify-center gap-x-4 mt-2">
            
                <div className="w-8 cursor-pointer ">
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" 
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" 
                            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                    </svg>
                </div>
                
                <div className="w-8 cursor-pointer ">
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" 
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" 
                            d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                    </svg>
                </div>
            
            </div>
            
            { inputsCuantity }

            <input type="submit" value="Calcular" className="border-2 border-white py-2 px-6 text-2xl rounded-full
            cursor-pointer mt-6 hover:border-cyan-400 hover:text-cyan-400"/>
        
        </form>
    
    </div>
  )
}
