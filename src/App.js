import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NeedAuth from './components/NeedAuth/NeedAuth';
import About from './components/Pages/About/About';
import Appointments from './components/Pages/Appointments/Appointments';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import Reviews from './components/Dashboard/Reviews/Reviews';
import SignUp from './components/Pages/SignUp/SignUp';
import Header from './components/Shared/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import AppointmentList from './components/Dashboard/AppointmentList/AppointmentList';
import NeedAdmin from './components/NeedAdmin/NeedAdmin';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import Allusers from './components/Dashboard/Allusers/Allusers';
import Payment from './components/Pages/Payment/Payment';

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <NeedAuth>
            <Appointments />
          </NeedAuth>
        }>
        </Route>
        <Route path='/reviews' element={
          <NeedAuth>
            <Reviews />
          </NeedAuth>
        } />
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={
          <NeedAuth>
            <Dashboard />
          </NeedAuth>
        }>
          <Route index element={<AppointmentList/>}></Route>
          <Route path='reviews' element={<Reviews/>}></Route>
          <Route path='allusers' element={<NeedAdmin><Allusers/></NeedAdmin>}></Route>
          <Route path='doctorAdd' element={<NeedAdmin><AddDoctor/></NeedAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
