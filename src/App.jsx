import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Main from "./pages/Main/Main.jsx";
import SubsystemsPage from "./pages/subsystems/SubsystemsPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import ServicesPage from "./pages/services/ServicesPage.jsx";
import SecurityServersPage from "./pages/securityServers/SecurityServersPage.jsx";
import Monitoring from "./pages/Monitoring/Monitoring.jsx";
import { useState } from 'react';
import Login from "./components/Login/Login.jsx";
import Registration from "./components/Registion/Registrion.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import NewParticipants from "./pages/NewParticipants/NewParticipants.jsx";
import ServiceInfo from "./pages/serviceInfo/ServiceInfo.jsx";
import SubsystemsInfo from "./pages/subsystemsInfo/SubsystemsInfo.jsx";

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
console.log(isAuthenticated)
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
                            <Route path='/subsystems' element={<SubsystemsPage />} />
                            <Route path='subsystems/:postId' element={<SubsystemsInfo/>}/>
                            <Route path='/services' element={<ServicesPage />} />
                            <Route path='services/:postId' element={<ServiceInfo/>}/>
                            <Route path='/security_servers' element={<SecurityServersPage />} />
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
