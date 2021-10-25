import React from "react";
import { connect } from "react-redux";
import Auth from "./Authorization";
import { setAuthUserData} from "../../../redux/auth-reducer";
import { logout } from "../../../redux/auth-reducer";

class AuthContainer extends React.Component {
    render(){
        return(
            <Auth {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
  return {
      auth: state.auth
  }
}

export default connect(mapStateToProps, {setAuthUserData, logout})(AuthContainer)
