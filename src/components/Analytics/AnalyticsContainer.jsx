import { connect } from "react-redux";
import Analytics from "./Analytics";

let mapStateToProps = (state) => {
  return {
    analyticsContent: state.analytics
  }
}


const AnalyticsContainer = connect(mapStateToProps, {})(Analytics)

export default AnalyticsContainer;