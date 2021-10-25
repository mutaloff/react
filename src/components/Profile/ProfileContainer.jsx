import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, setUser, updateStatus, getStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount(){
    let userId = this.props.match.params.userId
    if(!this.props.match.params.userId) userId = this.props.userId
    this.props.setUser(userId)
    this.props.getStatus(userId)
  }
  render(){
    return(
      <Profile 
        profile={this.props.profileContent.profile}
        status={this.props.profileContent.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToPropsWithRedirect = (state) => {
  return {isAuth: state.auth.isAuth}
}
let mapStateToProps = (state) => {
  return {
    profileContent: state.profile,
    userId: state.auth.id
  }
}

export default compose(
  connect(mapStateToProps, {setUserProfile, setUser, updateStatus, getStatus}),
  withRouter,
  connect(mapStateToPropsWithRedirect),
  withAuthRedirect
)(ProfileContainer)


