import { ButtonNext } from "../shared"
import { useSelectFormComponent } from "../hooks"
import { ResultsModal } from "../components";

export const HomePage = () => {

  const { formComponent } = useSelectFormComponent();

  return (
    <div className="p-4 bg-blue-950 text-white select-none min-h-screen">
        <header className="text-center font-bold mb-8 mt-16">
            <h1 className="text-6xl">Gana Más</h1>
            <h2 className="text-3xl text-slate-400">Tu app de estadísticas favorita</h2>
        </header>

        { formComponent }
  
        <ButtonNext/>
        <ResultsModal/>
    </div>
  )
}
