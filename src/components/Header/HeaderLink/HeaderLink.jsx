import { NavLink } from "react-router-dom";
import style from "./HeaderLink.module.css";


function HeaderLink(props) {
    return (
    <div className={style.HeaderLink}>
        {props.headerLinks.map((e, i) => 
            <NavLink 
                key={i.toString()} 
                to={`/${e['en']}`.toLowerCase()} 
                className={style.HeaderLinkItem}>
                {`${e[window.LANG]}`}
            </NavLink>)}
    </div>
    );
}

export default HeaderLink;