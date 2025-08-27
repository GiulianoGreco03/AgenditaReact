import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import FormTemplateCreator from './Components/FormTemplate/FormTemplateCreator/FormTemplateCreator'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/calender' element={<div>hola</div>} />
          <Route path='/form-creator' element={<FormTemplateCreator/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
