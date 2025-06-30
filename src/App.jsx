import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'; // Capitalized import
import Navbar from './components/Navbar'; // Make sure path and casing match exactly
import Doctors from './pages/doctors';
import Login from './pages/login';
import About from './pages/about';
import Contact from './pages/contact';
import Myprofile from './pages/myprofile';
import Myappointments from './pages/myappointments';
import Appointment from './pages/appointment';


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> {/* JSX element */}
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/myappointments' element={<Myappointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
