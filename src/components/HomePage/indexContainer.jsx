import React, { Component, useEffect } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AdminPanel from "./index";
import {
  setStepHomeThunk,
  setDataNewProgramThunk,
  updateDataSelectProgramThunk,
  setDataNewTeacherThunk,
  updateDataSelectTeacherThunk,
  setDataNewHullThunk,
  updateDataSelectHullThunk,
  deleteDataSelectProgramThunk,
  deleteDataSelectTeacherThunk,
  deleteDataSelectHullThunk,
  setDataNewContractThunk,
  updateDataSelectContractThunk,
  deleteDataSelectContractThunk,
  setDataNewPatternThunk,
  updateDataSelectPatternThunk,
  deleteDataSelectPatternThunk,
} from "../../redux/Home";

const AdminPanelContainer = ({
  stepHome,
  userData,
  setStepHomeThunk,
  programsData,
  setDataNewProgramThunk,
  deleteDataSelectProgramThunk,
  updateDataSelectProgramThunk,
  teachersData,
  setDataNewTeacherThunk,
  updateDataSelectTeacherThunk,
  deleteDataSelectTeacherThunk,
  hullsData,
  setDataNewHullThunk,
  updateDataSelectHullThunk,
  deleteDataSelectHullThunk,
  contractsData,
  setDataNewContractThunk,
  updateDataSelectContractThunk,
  deleteDataSelectContractThunk,
  patternsData,
  setDataNewPatternThunk,
  updateDataSelectPatternThunk,
  deleteDataSelectPatternThunk,
}) => {
  return (
    <AdminPanel
      step={stepHome}
      userData={userData}
      setStep={setStepHomeThunk}
      /*  */
      programsData={programsData}
      setDataNewProgram={setDataNewProgramThunk}
      updateDataSelectProgram={updateDataSelectProgramThunk}
      deleteDataSelectProgram={deleteDataSelectProgramThunk}
      /*  */
      teachersData={teachersData}
      setDataNewTeacher={setDataNewTeacherThunk}
      updateDataSelectTeacher={updateDataSelectTeacherThunk}
      deleteDataSelectTeacher={deleteDataSelectTeacherThunk}
      /*  */
      hullsData={hullsData}
      setDataNewHull={setDataNewHullThunk}
      updateDataSelectHull={updateDataSelectHullThunk}
      deleteDataSelectHull={deleteDataSelectHullThunk}
      /*  */
      contractsData={contractsData}
      setDataNewContract={setDataNewContractThunk}
      updateDataSelectContract={updateDataSelectContractThunk}
      deleteDataSelectContract={deleteDataSelectContractThunk}
      /*  */
      patternsData={patternsData}
      setDataNewPattern={setDataNewPatternThunk}
      updateDataSelectPattern={updateDataSelectPatternThunk}
      deleteDataSelectPattern={deleteDataSelectPatternThunk}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    userData: state.ProfileUser.userData,
    stepHome: state.Home.stepHome,
    selectedCourseData: state.Home.selectCourseData,
    selectedCoursesData: state.Home.dataCourses,

    programsData: state.Home.programsData,

    teachersData: state.Home.teachersData,

    hullsData: state.Home.hullsData,

    contractsData: state.Home.contractsData,

    patternsData: state.Home.patternsData,
  };
};

export default compose(
  connect(mapStateToProps, {
    setStepHomeThunk,
    setDataNewProgramThunk,
    updateDataSelectProgramThunk,
    setDataNewTeacherThunk,
    updateDataSelectTeacherThunk,
    setDataNewHullThunk,
    updateDataSelectHullThunk,
    deleteDataSelectTeacherThunk,
    deleteDataSelectProgramThunk,
    deleteDataSelectHullThunk,
    setDataNewContractThunk,
    updateDataSelectContractThunk,
    deleteDataSelectContractThunk,
    setDataNewPatternThunk,
    updateDataSelectPatternThunk,
    deleteDataSelectPatternThunk,
  }),
  withRouter
)(AdminPanelContainer);
