import gearLogo from '/gear.svg'
import luciaLogo from '/lucia.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Shin Platform_</h1>
        <a href="https://luc-ia.vercel.app/" target="_blank">
          <img src={luciaLogo} className="logo" alt="Lucia logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={gearLogo} className="logo" alt="Gear logo" />
        </a>
      </div>
    </>
  )
}

export default App
