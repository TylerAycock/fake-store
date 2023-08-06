import {Routes, Route} from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import Details from './components/Details'

function App() {


  return (
    <>
     <Routes>
      <Route index element={<Products/>}/>
      <Route path='/details/:id' element={<Details/>}/>
     </Routes>
    </>
  )
}

export default App
