import { connect } from "react-redux";
import { followSuccess, loadUsers, onPageSelect, unfollowSuccess, setTotalUsersCount, onContentFetching, 
         followingToggled, getUsers, changePage, follow, unfollow } from "../../redux/subscriptions-reducer";

import Subscriptions from "./Subscriptions";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import { getCurrentPage, getIsFetching, getIsFollowingForbidden, 
         getPageSize, getSubscriptionUsers, getTotalUsersCount } from "../../redux/subscriptions-selectors";

class SubscriptionsContainer extends React.Component {
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (selectedPage) => {
    this.props.changePage(selectedPage, this.props.currentPage, this.props.pageSize)
  }
  render() {
    return (<>
      {this.props.isFetching === true && <Preloader/>}
      <Subscriptions
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        followSuccess={this.props.followSuccess}
        unfollowSuccess={this.props.unfollowSuccess}
        subscriptionUsers={this.props.subscriptionUsers}
        currentPage={this.props.currentPage}
        isFollowingForbidden={this.props.isFollowingForbidden}
        followingToggled={this.props.followingToggled}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>)
  }
}

let mapStateToProps = (state) => {
  return {
    subscriptionUsers: getSubscriptionUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingForbidden: getIsFollowingForbidden(state)
  }
}


export default connect(mapStateToProps, {
  followSuccess, unfollowSuccess, onPageSelect,
  loadUsers, setTotalUsersCount, onContentFetching, 
  followingToggled, getUsers, changePage,
  follow, unfollow})(SubscriptionsContainer)

