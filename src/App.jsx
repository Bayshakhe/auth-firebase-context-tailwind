import './App.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
