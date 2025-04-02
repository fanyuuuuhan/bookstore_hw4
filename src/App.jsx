import '@/App.css'
import Home from '@/pages/Home'
import Books from '@/pages/Books'
import Category from '@/pages/Category'
import store from '@/redux/store'

import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'


function App() {

  return (

    <Provider store={store}>
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="books">
              <Route path="/books/category/:bookcategory" element={<Category />} />
              <Route path="ID/:bookID" element={<Books />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  )
}

export default App
