import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import ProfilePageContainer from "./components/ProfilePage/indexContainer.jsx";
import AdminPanelContainer from "./components/HomePage/indexContainer.jsx";

import { setStepProfileThunk } from "./redux/ProfileUser";
import { setStepHomeThunk, getAllDataThunk } from "./redux/Home";
import { initialAppThunk } from "./redux/initialApp";
import AuthPage from "./components/AuthPage";

const { Header } = Layout;

const App = (props) => {
  // определение устройства

  props.getAllDataThunk(); /// !!!!!!!!

  let isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
    navigator.userAgent
  );
  if (isMobile) {
    return (
      <AuthPage
        getAllDataThunk={props.getAllDataThunk}
        initialApp={props.initialAppThunk}
        statusPop={props.statusPop}
      />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={() => <ProfilePageContainer />} />
        <Route path="*" render={() => <AdminPanelContainer />} />
      </Switch>
    </BrowserRouter>
  );
};

let mapStateToProps = (state) => {
  return {
    initialStatus: state.appInit.initialStatus,
    statusPop: state.appInit.statusPop,
  };
};

export default compose(
  connect(mapStateToProps, {
    setStepProfileThunk,
    setStepHomeThunk,
    initialAppThunk,
    getAllDataThunk,
  }),
  withRouter
)(App);
