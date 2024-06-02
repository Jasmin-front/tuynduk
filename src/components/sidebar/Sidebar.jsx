 import style from './sidebar.module.css'
 import {Link, useLocation} from "react-router-dom";
// import images
import subsystems from '../../assets/sidebar/subsystems.svg'
 import participants from "../../assets/sidebar/participants.svg"
 import iconSidebar from "../../assets/sidebar/icon_sidebar.svg"
 import services from '../../assets/sidebar/services.svg'
 import security_servers from '../../assets/sidebar/security_servers.svg'
 import monitoring from '../../assets/sidebar/monitoring.svg'

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className={style.sidebarBlock}>
            <div className={style.imagesSidebarTop}>
                <Link to={'/'}>
                    <img src={iconSidebar} alt='icon'/>
                </Link>
            </div>
            <div className={style.imagesSidebarBottom}>
                <Link to={'/participants'}  className={location.pathname==='/participants' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={participants} alt='participants' />
                </Link>
                <Link to={'/subsystems'} className={location.pathname==='/subsystems' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={subsystems} alt='subsystems'/>
                </Link>
                <Link to={'/services'} className={location.pathname==='/services' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={services} alt="services"/>
                </Link>
                <Link to={'/security_servers'} className={location.pathname==='/security_servers' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={security_servers} alt="security_servers"/>
                </Link>
                <Link to={'/monitoring'} className={location.pathname==='/monitoring' ? style.activeLink : style.notActiveLink}>
                    <div className={style.block}></div>
                    <img src={monitoring} alt="monitoring"/>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;