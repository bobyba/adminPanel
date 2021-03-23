import React, { Component, useState } from "react";
import s from "./index.module.css";
import { Button } from "antd";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import Main from "./Main";
import TimeTable from "./TimeTable/index";
import PersonalData from "./PersonalData";
import OffersTable from "./Offers";
import TimeTableSub from "./TimeTableSub";
import PersonalForm from "./PersonalForm";
import OffersSubTable from "./OffersSub";
import OfferInfo from "./OfferInfo";

import AuthPageContainer from "../AuthPage/indexContainer";

const ProfilePage = (props) => {
  if (!props.statusInit) {
    return <AuthPageContainer />;
  }

  let render = () => {
    switch (props.stepProfile) {
      case "main":
        return (
          <Main setAuthThunk={props.setAuthThunk} setStep={props.setStep} />
        );
      case "offers":
        return (
          <OffersTable
            selectItem={props.selectChildOffers}
            userChildData={props.userData.child}
            setStep={props.setStep}
          />
        );
      case "offersSub":
        return (
          <OffersSubTable
            selectedChildOffersData={props.selectedChildOffersData}
            selectItem={props.selectChildOfferForOfferInfo}
            setStep={props.setStep}
          />
        );
      case "offerInfo":
        return (
          <OfferInfo
            offerData={props.selectedUserDataForOfferInfo} // это
            setStep={props.setStep}
          />
        );
      case "timetable":
        return (
          <TimeTable
            userChildData={props.userData.child}
            selectItem={props.selectUserTimeTable}
            setStep={props.setStep}
          />
        );
      case "timeTableSub":
        return (
          <TimeTableSub
            selectedTimeTableData={props.selectedUserDataForTimetable} // это
            setStep={props.setStep}
          />
        );
      case "personal-data":
        return (
          <PersonalData
            userData={props.userData}
            selectForm={props.selectForm}
            setStep={props.setStep}
          />
        );
      case "personalForm":
        return (
          <PersonalForm
            selectedUserData={props.selectedUserDataForForm}
            setStep={props.setStep}
          />
        );
      default:
        break;
    }
  };
  return <div style={{ height: "100vh" }}>{render()}</div>;
};
export default ProfilePage;
