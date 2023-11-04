import { Last5MatchesProvider } from "./contexts/Last5MatchesProvider"
import { StatisticsProvider } from "./contexts/StatisticsProvider"
import { HomePage } from "./pages/HomePage"

const App = () => {
  return (
      <StatisticsProvider>
        <Last5MatchesProvider>

          <HomePage/>
          
        </Last5MatchesProvider>
      </StatisticsProvider>
  )
}

export default App