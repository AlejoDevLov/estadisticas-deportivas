import { Form } from "../components"

export const HomePage = () => {


  return (
    <div className="p-4 bg-blue-950 text-white select-none min-h-screen">
        <header className="text-center font-bold mb-8">
            <h1 className="text-6xl">Gana Más</h1>
            <h2 className="text-3xl text-slate-400">Tu app de estadísticas favorita</h2>
        </header>

        {/* Formulario Component */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center">
          <Form localidad="local"/>
          <Form localidad="visitante"/>
          <div className="w-full">
            <input type="submit" value="Calcular" className="border-2 border-white py-2 px-6 text-2xl rounded-full
              cursor-pointer mt-6  mx-auto block hover:border-cyan-400 hover:text-cyan-400"/>
          </div>
        </div>
        
        
    </div>
  )
}
