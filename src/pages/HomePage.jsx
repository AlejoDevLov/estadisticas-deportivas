import { Form } from "../components"

export const HomePage = () => {


  return (
    <div className="p-4 bg-blue-950 text-white">
        <header className="text-center font-bold mb-8">
            <h1 className="text-6xl">Gana Más</h1>
            <h2 className="text-3xl text-slate-400">Tu app de estadísticas favorita</h2>
        </header>

        {/* Formulario Component */}
        <Form localidad="local"/>
        
    </div>
  )
}
