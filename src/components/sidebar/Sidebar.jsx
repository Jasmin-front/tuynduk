import React from 'react';
import { Link, useLocation } from "react-router-dom";
import style from './sidebar.module.css';
import subsystems from '../../assets/sidebar/subsystems.svg';
import subsystemsBlue from '../../assets/sidebar/subsystemsBlue.svg';
import participants from "../../assets/sidebar/participants.svg";
import participantsBlue from '../../assets/sidebar/participantsBlue.svg';
import iconSidebar from "../../assets/sidebar/icon_sidebar.svg";
import services from '../../assets/sidebar/services.svg';
import servicesBlue from '../../assets/sidebar/servicesBlue.svg';
import security_servers from '../../assets/sidebar/security_servers.svg';
import security_serversBlue from '../../assets/sidebar/security_serversBlue.svg';
import monitoring from '../../assets/sidebar/monitoring.svg';
import monitoringBlue from '../../assets/sidebar/monitoringBlue.svg';

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className={style.sidebarBlock}>
            <div className={style.imagesSidebarTop}>
                <Link to={'/'}>
                    <img src={iconSidebar} alt='icon' />
                </Link>
            </div>
            <div className={style.imagesSidebarBottom}>
                <Link to={'/Participants'} className={location.pathname === '/Participants' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={location.pathname === '/Participants' ? participantsBlue : participants} alt='participants' />
                </Link>
                <Link to={'/subsystems'} className={location.pathname === '/subsystems' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={location.pathname === '/subsystems' ? subsystemsBlue : subsystems} alt='subsystems' />
                </Link>
                <Link to={'/services'} className={location.pathname === '/services' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={location.pathname === '/services' ? servicesBlue : services} alt="services" />
                </Link>
                <Link to={'/security_servers'} className={location.pathname === '/security_servers' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={location.pathname === '/security_servers' ? security_serversBlue : security_servers} alt="security_servers" />
                </Link>
                <Link to={'/monitoring'} className={location.pathname === '/monitoring' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={location.pathname === '/monitoring' ? monitoringBlue : monitoring} alt="monitoring" />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
