import { useContext, useState } from "react";
import { GoalsInputForm } from "./GoalsInputForm"
import { ResultsContext } from "../contexts/Last5MatchesProvider";

export const GoalsInLeague = () => {

  const { setGolesEquipoLocal, setGolesEquipoVisitante,
    golesEquipoLocal, golesEquipoVisitante } = useContext(ResultsContext);


  return (
    <div className="text-center flex justify-center mt-16 mb-4 ">
        <form className="space-y-16 md:space-y-0 md:flex w-full items-center justify-center gap-4">
          <div className="md:w-[45%] ">
            <h3 className="text-3xl font-bold text-amber-500">Equipo local</h3>
            <hr className="mb-3 mt-2"/>
            <p className="font-semibold text-xl">Total goles en liga en casa</p>
            <GoalsInputForm golesMarcadosYRecibidos={setGolesEquipoLocal} keyValue={1}/>
            <br />
            <p className="font-semibold text-xl mb-3">Número de partidos de liga en casa</p>
            <input type="number" min="0" className="border border-zinc-700 rounded-md w-28 text-black p-2 mx-3 text-base"/>
          </div>
          <div className="md:w-[45%] ">
            <h3 className="text-3xl font-bold text-amber-500">Equipo visitante</h3>
            <hr className="mb-3 mt-2"/>
            <p className="font-semibold text-xl">Total goles en liga fuera de casa</p>
            <GoalsInputForm golesMarcadosYRecibidos={setGolesEquipoVisitante} keyValue={1}/>
            <br />
            <p className="font-semibold text-xl mb-3">Número de partidos fuera de casa en liga</p>
            <input type="number" min="0" className="border border-zinc-700 rounded-md w-28 text-black p-2 mx-3 text-base"/>
          </div>
        </form>
    </div>
  )
}
