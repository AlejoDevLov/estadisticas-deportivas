import { useContext } from "react"
import { Last5Matches, GoalsInLeague } from "../components"
import { ButtonNext } from "../shared"
import { StatsContext } from "../contexts/StatisticsProvider"

export const HomePage = () => {

  const { numberFormMenu } = useContext(StatsContext)

  return (
    <div className="p-4 bg-blue-950 text-white select-none min-h-screen">
        <header className="text-center font-bold mb-8">
            <h1 className="text-6xl">Gana Más</h1>
            <h2 className="text-3xl text-slate-400">Tu app de estadísticas favorita</h2>
        </header>

        {
          (numberFormMenu === 1) && <Last5Matches/>
        }

        {
          (numberFormMenu === 2) && <GoalsInLeague/>
        }

        <ButtonNext/>
    </div>
  )
}
