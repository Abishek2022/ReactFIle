import { useState } from 'react'

import './App.css'
import Toolbar from './Components/Navigation/Toolbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Art from './Components/Pages/Art'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Toolbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/art' element={<Art />} />



</Routes>
    </>
  )
}

export default App
