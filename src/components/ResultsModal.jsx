import { useContext, useEffect, useState } from "react"
import { StatsContext } from "../contexts/StatisticsProvider";

export const ResultsModal = () => {

    const { resultadoEstadisticas, setResultadoEstadisticas, setNumberFormMenu } = useContext(StatsContext);
    const [divClass, setDivClass] = useState('min-w-screen min-h-screen bg-black/50 fixed inset-0 hidden');

    useEffect(() => {
        if ( resultadoEstadisticas.isComplete ){
            setDivClass('min-w-screen min-h-screen bg-black/50 fixed inset-0');
        }
    }, [resultadoEstadisticas.isComplete]);

    const closeModal= () => {
        setDivClass('min-w-screen min-h-screen bg-black/50 fixed inset-0 hidden');
        setResultadoEstadisticas({ promedioGoles: 0, isComplete: false, ambosEquiposMarcan: 0 });
        setNumberFormMenu(1);
    }

    return (
        <>
            <div className={divClass}>
                <dialog open className="h-1/2 w-3/4 rounded-md text-center bg-lime-500 top-1/3 left-1/6 max-w-xl flex flex-col relative font-bold">
                    <h1 className="text-slate-800 text-4xl py-6"><span className="text-5xl text-yellow-600">¡</span>Buena suerte con los resultados<span className="text-5xl text-yellow-600">!</span></h1>
                    <h2 className="text-slate-700 text-xl py-2">Promedio de goles por partido: <span className="text-slate-100">{ resultadoEstadisticas.promedioGoles }</span></h2>
                    <h2 className="text-slate-700 text-xl py-2">Probabilidad que ambos equipos marquen gol: <span className="text-slate-100">{ resultadoEstadisticas.ambosEquiposMarcan }%</span></h2>
                    <button 
                        className="py-3 rounded-full absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-blue-700 w-60 mx-auto text-xl hover:bg-blue-900 font-semibold"
                        onClick={closeModal}
                        >
                            OK
                    </button>
                </dialog>
            </div>
        </>
    )
}



