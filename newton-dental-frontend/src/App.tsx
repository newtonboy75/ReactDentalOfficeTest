import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './dashboard/Dashboard';
import { AuthRouter } from './components/AuthRoute';
import { CreateAppointment } from './components/CreateAppointment';
import { Dentists } from './components/Dentists';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route element={<AuthRouter />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/dashboard/dentists' element={<Dentists />} />
        <Route path="/dashboard/appointments/create" element={<CreateAppointment />} />
      </Route>
    </Routes>
    
  )
}

export default App
