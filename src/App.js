import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import React from 'react';
import { connect } from 'react-redux';
import { initApp } from "./redux/app-reducer";
import Preloader from './components/Common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const Test = React.lazy(() => import('./test'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const SubscriptionsContainer = React.lazy(() => import('./components/Subscriptions/SubscriptionsContainer'))
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'))
const BlogsContainer = React.lazy(() => import('./components/Blogs/BlogsContainer'))
const MainContainer = React.lazy(() => import('./components/Main/MainContainer'))
const AnalyticsContainer = React.lazy(() => import('./components/Analytics/AnalyticsContainer'))
const Login = React.lazy(() => import('./components/Main/Login/Login'))

window.LANG = 'ru';


class App extends React.Component {
  componentDidMount() {
    this.props.initApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="App">
        <Header />
        <div className='Content'>
          <SidebarContainer />
          <div className='App-content'>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
            <Route path='/subscriptions' render={withSuspense(SubscriptionsContainer)} />
            <Route path='/analytics' render={withSuspense(AnalyticsContainer)} />
            <Route path='/settings' render={withSuspense(SettingsContainer)} />
            <Route path='/main' render={withSuspense(MainContainer)} />
            <Route path='/blogs' render={withSuspense(BlogsContainer)} />
            <Route path='/login' render={withSuspense(Login)} />
            <Route path='/test' render={withSuspense(Test)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initApp })(App);
