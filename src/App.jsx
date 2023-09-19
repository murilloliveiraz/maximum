import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Service from './components/Service'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service/:id' element={<Service />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
