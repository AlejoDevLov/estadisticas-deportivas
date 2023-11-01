import { useContext } from "react"
import { StatsContext } from "../contexts/StatisticsProvider"

export const useCalculateButton = () => {

    const { numberFormMenu, setNumberFormMenu } = useContext(StatsContext)

    const nextFormMenu = () => {
        if ( numberFormMenu === 3 ) return;
        setNumberFormMenu( currentNumber => currentNumber + 1 );
    }

  return {
    nextFormMenu
  }
}
