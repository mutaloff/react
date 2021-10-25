import styles from "./Header.module.css";
import SearchContainer from "./HeaderSearch/SearchContainer";
import HeaderLinkContainer from "./HeaderLink/HeaderLinkContainer";
import AuthContainer from "./Authorization/AuthorizationContainer";

function Header(props) {
    return (
        <header className={styles.header}>
            <HeaderLinkContainer/>
            <SearchContainer/>
            <AuthContainer/>
        </header>
    );
}

export default Header;