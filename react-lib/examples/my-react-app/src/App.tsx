import "./App.css"
import { CoreValidator } from "./components/CoreValidator"
import { LegacyValidator } from "./components/LegacyValidator"
import { ReactValidator } from "./components/ReactValidator"

function App() {
  return (
    <div className='App'>
      <CoreValidator />
      <br />
      <hr />
      <br />
      <LegacyValidator />
      <br />
      <hr />
      <br />
      <ReactValidator />
    </div>
  )
}

export default App
