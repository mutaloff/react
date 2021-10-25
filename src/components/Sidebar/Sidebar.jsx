import {NavLink} from 'react-router-dom';
import styles from './Sidebar.module.css'


function Sidebar(props) {
    return (
        <nav className = {styles.sidebar}>
            {props.sideBarTabs.map((e, i) => <NavLink key={i.toString()} to={`/${e['en']}`.toLowerCase()} className={styles.item}>{`${e[window.LANG]}`}</NavLink>)}
        </nav>
    ); 
}

export default Sidebar;
