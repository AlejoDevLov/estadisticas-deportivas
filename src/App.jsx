import { StatisticsProvider } from "./contexts/StatisticsProvider"
import { HomePage } from "./pages/HomePage"

const App = () => {
  return (
      <StatisticsProvider>
        <HomePage/>
      </StatisticsProvider>
  )
}

export default App