import { GlobalState } from "./Context/GlobalState"
import { Router } from "./Router/Router"
import { GlobalStyle } from "./GlobalStyle"

function App() {
  
  return (
    <GlobalState>
      <GlobalStyle/>
     <Router/>
    </GlobalState>
  )
}

export default App
