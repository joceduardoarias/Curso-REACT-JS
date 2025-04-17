import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import NewBook from './components/newBook/NewBook'
import { UserProvider } from './context/UserContext'
import Protected from './protected/Protected'
import MainLayout from './layout/MainLayout'
import Books from './components/books/Books'
import UpdateBook from './components/updateBook/UpdateBook'

function App() {

  return (

    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<Protected />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/libros" element={<Books />} />
              <Route path="/agregar-libro" element={<NewBook />} />
              <Route path="/actualizar-libro" element={<UpdateBook />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>

  )
};

export default App
