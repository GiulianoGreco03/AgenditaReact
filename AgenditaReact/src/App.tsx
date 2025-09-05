import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import FormTemplateCreator from './Components/FormTemplate/FormTemplateCreator/FormTemplateCreator'
import Calendar from './Components/Calendar/Calendar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/form-creator' element={<FormTemplateCreator/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
