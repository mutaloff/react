import { connect } from "react-redux";
import HeaderLink from "./HeaderLink";



let mapStateToProps = (state) => {
    return {
        headerLinks: state.header.headerLinks
    }
}
  
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
  
const HeaderLinkContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderLink)


export default HeaderLinkContainer;