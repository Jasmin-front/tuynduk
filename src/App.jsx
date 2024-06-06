import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Participants from "./pages/Participants/Participants.jsx";
import SubsystemsPage from "./pages/subsystems/SubsystemsPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import ServicesPage from "./pages/services/ServicesPage.jsx";
import SecurityServersPage from "./pages/securityServers/SecurityServersPage.jsx";
import MonitoringPage from "./pages/monitoring/MonitoringPage.jsx";
import { useState } from 'react';
import Login from "./components/Login/Login.jsx";
import Registration from "./components/Registion/Registrion.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
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
                            <Route index element={<h1 > FIX_ME</h1>} />
                            <Route path='/participants' element={<Participants />} />
                            <Route path='/subsystems' element={<SubsystemsPage />} />
                            <Route path='/services' element={<ServicesPage />} />
                            <Route path='/security_servers' element={<SecurityServersPage />} />
                            <Route path='/monitoring' element={<MonitoringPage />} />
                        </Route>
                    </>
                ) : (
                    <Route path='*' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                )}
            </Routes>
        </div>
    );
}

export default App;
