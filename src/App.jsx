import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Books from './pages/Books'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="books">
          <Route path="category/:categoryName" element={<Home />} />
          <Route path="ID/:bookID" element={<Books />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
