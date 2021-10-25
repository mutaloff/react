import Blogs from './Blogs';
import { addPost } from '../../redux/blogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToPropsWithRedirect = (state) => ({isAuth: state.auth.isAuth})


let mapStateToProps = (state) => {
  return {
    blogPosts: state.blogs.blogPosts,
  }
}

export default  compose(
  connect(mapStateToProps, {addPost}),
  connect(mapStateToPropsWithRedirect),
  withAuthRedirect
)(Blogs)