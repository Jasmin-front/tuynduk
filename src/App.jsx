
import './App.css'
import {Route, Routes} from "react-router-dom";
import ParticipantsPage from "./pages/participants/ParticipantsPage.jsx";
import SubsystemsPage from "./pages/subsystems/SubsystemsPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import ServicesPage from "./pages/services/ServicesPage.jsx";
import SecurityServersPage from "./pages/securityServers/SecurityServersPage.jsx";
import MonitoringPage from "./pages/monitoring/MonitoringPage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Ref from "./inifinty/Ref.jsx";


function App() {

  return (
    <>
        <div className='containerApp'>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/participants' element={<ParticipantsPage/>}/>
                    <Route path='/subsystems' element={<SubsystemsPage/>}/>
                    <Route path='/services' element={<ServicesPage/>}/>
                    <Route path='/security_servers' element={<SecurityServersPage/>}/>
                    <Route path='/monitoring' element={<MonitoringPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Route>
                <Ref/>
            </Routes>
        </div>
    </>
  )
}

export default App
