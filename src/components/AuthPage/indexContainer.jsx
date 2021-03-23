import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthPage from "./index";
import { setAuthThunk } from "../../redux/initialApp";

class AuthPageContainer extends Component {
  render() {
    return <AuthPage setAuth={this.props.setAuthThunk} />;
  }
}

let mapStateToProps = (state) => {
  return { status: state.appInit.initialStatus };
};

export default compose(
  connect(mapStateToProps, { setAuthThunk }),
  withRouter
)(AuthPageContainer);
