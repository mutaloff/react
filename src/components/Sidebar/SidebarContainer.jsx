import { connect } from "react-redux";
import Sidebar from "./Sidebar";


let mapStateToProps = (state) => {
    return {
        sideBarTabs: state.sidebar.sideBarTabs
    }
}
  
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
  
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)



export default SidebarContainer;
