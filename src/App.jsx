import '@/App.css'
import Home from '@/pages/Home'
import Books from '@/pages/Books'
import Category from '@/pages/Category'

import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import { store, persistor } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'


function App() {

  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default App
