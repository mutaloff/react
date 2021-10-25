import { NavLink } from "react-router-dom";
import styles from './Authorization.module.css'
import React from "react";

class Auth extends React.Component {
    state = {
      toDisplayLogout: false
    }
    dispayLogout(e){
      this.setState({toDisplayLogout: true})
    }
    onLogoutClick(){
      this.props.logout()
      this.setState({toDisplayLogout: false})
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.toDisplayLogout){
        this.setState({toDisplayLogout: false})
      }
    }
    render() {
      return(
        <div className={styles.login}>
          <NavLink className={styles.loginText} to='/login' onClick={(e) => this.dispayLogout(e)}>
            {this.props.auth.isAuth ? this.props.auth.login : 'Login'}   
          </NavLink>
          <span 
            className={this.props.auth.isAuth && this.state.toDisplayLogout ? styles.logout : styles.noDisplay} 
            onClick={() => this.onLogoutClick()}>Выйти
          </span>
        </div>
      )
    }
}

export default Auth;