import { useContext } from "react";
import { useCalculateButton } from "../hooks"
import { StatsContext } from "../contexts/StatisticsProvider";

export const ButtonNext = () => {

  const { numberFormMenu } = useContext(StatsContext)

  const { nextFormMenu } = useCalculateButton();

  const valueButton = numberFormMenu !== 3 ? 'Siguiente' : 'Calcular';

  return (
    <div className="w-full">
        <input
          onClick={nextFormMenu}
          type="submit" 
          value={valueButton} 
          className="border-2 border-white py-2 px-6 text-2xl rounded-full
            cursor-pointer mt-6  mx-auto block hover:border-cyan-400 hover:text-cyan-400"/>
    </div>
  )
}
