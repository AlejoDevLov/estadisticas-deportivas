import { useContext } from "react"
import { Form } from "."
import { ResultsContext } from "../contexts/Last5MatchesProvider"

export const Last5Matches = () => {

  const { setGolesEquipoLocal, setGolesEquipoVisitante,
            golesEquipoLocal, golesEquipoVisitante } = useContext(ResultsContext);

    console.log({ golesEquipoLocal, golesEquipoVisitante });

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center">
        <Form localidad="local" setResultadoPartidos={setGolesEquipoLocal}/>
        <Form localidad="visitante" setResultadoPartidos={setGolesEquipoVisitante}/>
    </div>
  )
}
