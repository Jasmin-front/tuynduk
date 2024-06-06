import {Link, useLocation} from "react-router-dom";
import style from './header.module.css'
import language from '../../assets/header/language.svg'
import login from '../../assets/header/login.svg'
const Header = () => {
    const location = useLocation();
    return (
        <header className={style.headerBlock}>
            <ul className={style.headerLeft}>
                <li>
                    <Link to={'/Participants'} className={location.pathname=== '/Participants' ? style.headerTextActive : style.headerText } >Участники</Link>
                    <div className={style.block}></div>
                </li>
                <li>
                    <Link to={'/subsystems'} className={location.pathname==='/subsystems'  ? style.headerTextActive : style.headerText } >Подсистемы</Link>
                    <div className={style.block}></div>
                </li>
                <li>
                    <Link to={'/services'} className={location.pathname=== '/services' ? style.headerTextActive : style.headerText }>Сервисы</Link>
                    <div className={style.block}></div>
                </li>
                <li>
                    <Link to={'/security_servers'} className={location.pathname=== '/security_servers'? style.headerTextActive : style.headerText }>Серверы безопасности</Link>
                    <div className={style.block}></div>
                </li>
                <li>
                    <Link to={'/monitoring'} className={location.pathname=== '/monitoring' ? style.headerTextActive : style.headerText }>Мониторинг</Link>
                    <div className={style.block}></div>
                </li>
            </ul>
            <ul className={style.headerRight}>
                <li className={style.leftBlock}>
                    <img src={language} className={style.leftBlockImg} alt={'language'}/>
                    <div className={style.headerText}>Язык</div>
                </li>
                <li>
                    <Link to={'/login'} className={style.leftBlock}>
                        <img src={login} className={style.leftBlockImg} alt='login'/>
                        <div className={style.headerTextLogin}>Выйти</div>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;