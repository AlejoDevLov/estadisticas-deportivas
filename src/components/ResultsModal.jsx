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
                <dialog open className="h-1/2 w-3/4 rounded-md text-center top-1/3 left-1/6 max-w-xl flex flex-col relative font-bold overflow-hidden
                    bg-gradient-to-t from-emerald-500 to-cyan-900">
                    <h1 className="text-yellow-400 text-4xl py-6"><span className="text-5xl">¡</span>Buena suerte con los resultados<span className="text-5xl">!</span></h1>
                    <h2 className="text-slate-800 text-xl py-2">Promedio de goles por partido: <span className="text-gray-100">{ resultadoEstadisticas.promedioGoles }</span></h2>
                    <h2 className="text-slate-800 text-xl py-2">Probabilidad que ambos equipos marquen gol: <span className="text-gray-100">{ resultadoEstadisticas.ambosEquiposMarcan }%</span></h2>
                    <button 
                        className="py-3 rounded-full absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-blue-700 w-60 mx-auto text-xl hover:bg-blue-900 font-semibold"
                        onClick={closeModal}
                        >
                            OK
                    </button>
                </dialog>
                <div className={divImgClass}>
                    <img src="/src/assets/football.png" alt="football"
                        className={imgClass}/>
                </div>
                <Confettis startAnimation={confettiAnimationState}/>
            </div>
        </>
    )
}



