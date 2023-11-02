import { useContext } from "react";
import { StatsContext } from "../contexts/StatisticsProvider";
import { GoalsInLeague, Last5Matches, LastMatchesBetween } from "../components";

export const useSelectFormComponent = () => {

    const { numberFormMenu } = useContext(StatsContext);

    let formComponent;

    switch(numberFormMenu){
        case 1
            :  formComponent = <Last5Matches/>;
                break;
        case 2 
            :  formComponent = <GoalsInLeague/>
                break;
        case 3
            :  formComponent = <LastMatchesBetween/>
            break;
    }

    return {
        formComponent
    }
}
