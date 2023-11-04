
export const GoalsInputForm = () => {

  return (
    <div className="flex text-xl my-4">
        <div className="space-y-2">
            <label className="text-emerald-400">Marcados</label>
            <input 
              type="number" 
              className="border border-zinc-700 rounded-md w-2/5 text-black p-2 mx-3 text-base"
              min="0"
              name="marcados"/>
        </div>
        <div className="space-y-2">
            <label className="text-red-400">Recibidos</label>
            <input 
              type="number" 
              className="border border-zinc-700 rounded-md w-2/5 text-black p-2 mx-3 text-base"
              min="0"
              name="recibidos"/>
        </div>
    </div>
  )
}
