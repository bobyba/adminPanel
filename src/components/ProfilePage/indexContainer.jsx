import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import ProfilePage from "./index";
import {
  selectChildOfferForOfferInfoThunk,
  selectChildOffersThunk,
  selectFormUserThunk,
  setStepProfileThunk,
  setUserDataForTimeTableThunk,
} from "../../redux/ProfileUser";
import { setAuthThunk } from "../../redux/initialApp";

class ProfilePageContainer extends Component {
  render() {
    return (
      <ProfilePage
        statusInit={this.props.statusInit}
        /* ---------- */
        setAuthThunk={this.props.setAuthThunk}
        /* ---------- */
        stepProfile={this.props.stepProfile}
        setStep={this.props.setStepProfileThunk}
        selectUserTimeTable={this.props.setUserDataForTimeTableThunk}
        selectedUserDataForTimetable={this.props.selectedUserDataForTimetable}
        userData={this.props.userData}
        selectForm={this.props.selectFormUserThunk}
        selectedUserDataForForm={this.props.selectedUserDataForForm}
        selectChildOffers={this.props.selectChildOffersThunk}
        selectedChildOffersData={this.props.selectedChildOffersData}
        selectedUserDataForOfferInfo={this.props.selectedUserDataForOfferInfo}
        selectChildOfferForOfferInfo={
          this.props.selectChildOfferForOfferInfoThunk
        }
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    statusInit: state.appInit.initialStatus,

    stepProfile: state.ProfileUser.stepProfile,
    userData: state.ProfileUser.userData,
    selectedUserDataForTimetable:
      state.ProfileUser.selectedUserDataForTimetable,
    selectedUserDataForForm: state.ProfileUser.selectedUserDataForForm,
    selectedChildOffersData: state.ProfileUser.selectedChildOffersData,
    selectedUserDataForOfferInfo:
      state.ProfileUser.selectedUserDataForOfferInfo,
  };
};

export default compose(
  connect(mapStateToProps, {
    setAuthThunk,
    setStepProfileThunk,
    setUserDataForTimeTableThunk,
    selectFormUserThunk,
    selectChildOffersThunk,
    selectChildOfferForOfferInfoThunk,
  }),
  withRouter
)(ProfilePageContainer);
