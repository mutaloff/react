import { connect } from "react-redux";
import Settings from "./Settings";


let mapStateToProps = (state) => {
  return {
    settingsContent: state.settings.inscription
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)


export default SettingsContainer;