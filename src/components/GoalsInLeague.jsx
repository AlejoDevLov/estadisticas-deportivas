import { GoalsInputForm } from "./GoalsInputForm"

export const GoalsInLeague = () => {

    const submitForm = () => {

    }

  return (
    <div className="text-center flex justify-center mt-16">
        <form onSubmit={submitForm} className="space-y-16">
          <div>
            <p className="font-semibold text-xl">Total goles en liga equipo local</p>
            <GoalsInputForm/>
          </div>
          <div>
            <p className="font-semibold text-xl">Total goles en liga equipo visitante</p>
            <GoalsInputForm/>
          </div>
        </form>
    </div>
  )
}
