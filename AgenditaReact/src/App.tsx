import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/calender' element={<div>hola</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
