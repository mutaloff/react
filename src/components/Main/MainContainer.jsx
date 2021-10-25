import { connect } from "react-redux";
import Main from "./Main";


let mapStateToProps = (state) => {
  return {
    mainContent: state.main.inscription
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)


export default MainContainer;
