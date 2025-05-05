import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './views/home/Home'
import MyAppointments from './views/myAppointments/MyAppointments'
import Footer from './components/footer/Footer'
import Register from './views/register/Register'
import Login from './views/login/Login'
import Contact from './views/contact/contact'
import CreateAppointment from './views/createAppointments/CreateAppointments'
import { Routes, Route, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();

  return (
    <>

    {location.pathname !== "/login" && location.pathname !== "/register" && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myAppointments' element={<MyAppointments />} />
        <Route path="/createAppointment" element={<CreateAppointment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
