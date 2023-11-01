import { Last5Matches } from "../components"
import { ButtonNext } from "../shared"

export const HomePage = () => {


  return (
    <div className="p-4 bg-blue-950 text-white select-none min-h-screen">
        <header className="text-center font-bold mb-8">
            <h1 className="text-6xl">Gana Más</h1>
            <h2 className="text-3xl text-slate-400">Tu app de estadísticas favorita</h2>
        </header>

        <Last5Matches/>

        <ButtonNext/>
    </div>
  )
}
