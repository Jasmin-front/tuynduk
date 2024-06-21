import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Main from "./pages/Main/Main.jsx";
import Layout from "./components/layout/Layout.jsx";
import Services from "./pages/services/Services.jsx";
import SecurityServers from "./pages/securityServers/SecurityServers.jsx";
import Monitoring from "./pages/Monitoring/Monitoring.jsx";
import { useState } from 'react';
import Login from "./components/Login/Login.jsx";
import Registration from "./components/Registion/Registrion.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import NewParticipants from "./pages/NewParticipants/NewParticipants.jsx";
import Subsystems from "./pages/subsystems/Subsystems.jsx";
import Participants from "./pages/NewParticipants/Participants/Participants.jsx";
import ServiceId from "./pages/services/ServiceId/ServiceId.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('login') ?? false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem('login',false)
        setIsAuthenticated(false);
        setIsSidebarOpen(false);
        navigate('/login');
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='containerApp'>
            {isAuthenticated && <Sidebar isOpen={isSidebarOpen} onLogout={handleLogout} />}
            <Routes>
                <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path='/registration' element={<Registration setIsAuthenticated={setIsAuthenticated} />} />
                {isAuthenticated ? (
                    <>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<Main/>} />
                            <Route path='/participants' element={<NewParticipants />} />
                            <Route  path='/participants/:participantsId' element={<Participants />} />
                            <Route path='/subsystems' element={<Subsystems />} />
                            <Route path='/services' element={<Services />} />
                            <Route path='/services/:serviceId' element={<ServiceId/>}/>
                            <Route path='/security_servers' element={<SecurityServers />} />
                            <Route path='/monitoring' element={<Monitoring />} />
                        </Route>
                    </>
                ) : (
                   <Route path={'*'} element={ <Navigate to={'/login'}/>}/>
                )}
            </Routes>
        </div>
    );
}

export default App;
