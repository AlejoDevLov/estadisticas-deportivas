import { GoalsInputForm } from "./GoalsInputForm"

export const GoalsInLeague = ({ localidad }) => {

    const submitForm = () => {

    }

  return (
    <div className="text-center py-4">
        <form onSubmit={submitForm}> 
            <p className="font-semibold text-xl">Total goles en liga equipo {localidad}</p>
            <GoalsInputForm/>
        </form>
    </div>
  )
}
