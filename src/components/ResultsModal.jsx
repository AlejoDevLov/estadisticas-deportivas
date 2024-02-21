import { useContext, useEffect, useState } from "react"
import { StatsContext } from "../contexts/StatisticsProvider";
import { Confettis } from "../shared/Confetis";

export const ResultsModal = () => {

    const { resultadoEstadisticas, setResultadoEstadisticas, setNumberFormMenu } = useContext(StatsContext);
    const [divClass, setDivClass] = useState('min-w-screen min-h-screen bg-black/50 transition-opacity fixed inset-0 opacity-0 pointer-events-none');
    const [imgClass, setImgClass] = useState('w-20 rotate-ball animation-start');
    const [divImgClass, setDivImgClass] = useState('absolute bottom-6 left-12 animation-start h-[80px] w-[80px] z-20 translate-ball');
    const [confettiAnimationState, setConfettiAnimationState] = useState(false);

    useEffect(() => {
        if ( resultadoEstadisticas.isComplete ){
            setDivClass('min-w-screen min-h-screen bg-black/50 fixed inset-0 transition-opacity');
            setImgClass('w-20 rotate-ball');
            setDivImgClass('absolute bottom-6 left-12 translate-ball h-[80px] w-[80px] z-20');
            setConfettiAnimationState(true);
        }
    }, [resultadoEstadisticas.isComplete]);

    const closeModal= () => {
        setDivClass('min-w-screen min-h-screen bg-black/50 fixed inset-0 opacity-0 pointer-events-none');
        setImgClass('');
        setDivImgClass('');
        setResultadoEstadisticas({ promedioGoles: 0, isComplete: false, ambosEquiposMarcan: 0 });
        setNumberFormMenu(1);
        setConfettiAnimationState(false);
    }

    return (
        <>
            <div className={divClass}>
                <dialog open className="min-h-[50vh] w-3/4 rounded-md text-center top-1/3 left-1/6 max-w-xl flex flex-col relative font-bold overflow-hidden
                    bg-gradient-to-t from-sky-500 to-blue-950 px-1">
                    <h1 className="text-slate-100 sm:text-4xl text-3xl py-6">¡Buena suerte con los resultados!</h1>
                    <h2 className="text-gray-100 text-xl py-2 font-semibold">Promedio de goles por partido: <span className="text-amber-400 font-bold">{ resultadoEstadisticas.promedioGoles }</span></h2>
                    <h2 className="text-gray-100 text-xl py-2 font-semibold">Probabilidad que ambos equipos marquen gol: <span className="text-amber-400 font-bold">{ resultadoEstadisticas.ambosEquiposMarcan }%</span></h2>
                    <button 
                        className="py-2 rounded-full absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-fuchsia-700 w-60 mx-auto text-xl hover:bg-fuchsia-900 font-semibold
                            border-l-4 border-fuchsia-800 border-b-4 hover:border-t-2 hover:border-b-0 hover:border-fuchsia-700 duration-100"
                        onClick={closeModal}
                        >
                            OK
                    </button>
                    <Confettis startAnimation={confettiAnimationState}/>
                </dialog>
                <div className={divImgClass}>
                    <img src="./football.png" alt="football"
                        className={imgClass}/>
                </div>
            </div>
        </>
    )
}



