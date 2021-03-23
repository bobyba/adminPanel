import { useEffect } from "react";
import { apiIMBD } from "../api/api";
import { apiFirebase } from "../api/api-cloud";

const SET_STEP_HOME = "SET_STEP_HOME";

const SET_PROGRAMS_DATA = "SET_PROGRAMS_DATA",
  SET_PROGRAM = "SET_PROGRAM",
  UPDATE_PROGRAM = "UPDATE_PROGRAM",
  DELETE_PROGRAM = "DELETE_PROGRAM";

const SET_TEACHERS_DATA = "SET_TEACHERS_DATA",
  SET_TEACHER = "SET_TEACHER",
  UPDATE_TEACHER = "UPDATE_TEACHER",
  DELETE_TEACHER = "DELETE_TEACHER";

const SET_HULLS_DATA = "SET_HULLS_DATA",
  SET_HULL = "SET_HULL",
  UPDATE_HULL = "UPDATE_HULL",
  DELETE_HULL = "DELETE_HULL";

const SET_CONTRACTS_DATA = "SET_CONTRACTS_DATA",
  SET_CONTRACT = "SET_CONTRACT",
  UPDATE_CONTRACT = "UPDATE_CONTRACT",
  DELETE_CONTRACT = "DELETE_CONTRACT";

const SET_PATTERNS_DATA = "SET_PATTERNS_DATA",
  SET_PATTERN = "SET_PATTERN",
  UPDATE_PATTERN = "UPDATE_PATTERN",
  DELETE_PATTERN = "DELETE_PATTERN";

let initialState = {
  stepHome: "main",

  programsData: [],
  teachersData: [],
  hullsData: [],
  contractsData: [],
  patternsData: [],
};

const Home = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_HOME: {
      let stateCopy = {
        ...state,
        stepHome: action.step,
        dataCourses: state.dataWidget.searchData.courses[action.step],
      };
      debugger;
      return stateCopy;
    }
    /* -------------Программа------------------ */
    case SET_PROGRAMS_DATA: {
      let stateCopy = {
        ...state,
        programsData: action.data.map((item, index) => {
          return { ...item, key: index };
        }),
      };
      debugger;
      return stateCopy;
    }
    case SET_PROGRAM: {
      let arr = [];
      arr.push({ ...action.data, key: state.programsData.length });

      let stateCopy = {
        ...state,
        programsData: arr.concat(state.programsData).map((item, index) => {
          return { ...item, key: index };
        }),
      };

      return stateCopy;
    }
    case UPDATE_PROGRAM: {
      let stateCopy = {
        ...state,
        programsData: state.programsData.map((item) => item),
      };

      stateCopy.programsData[action.data.key] = action.data;

      return stateCopy;
    }
    case DELETE_PROGRAM: {
      let stateCopy = {
        ...state,
      };

      stateCopy.programsData.splice(action.data.key, 1);

      let stateCopy2 = {
        ...stateCopy,
        programsData: stateCopy.programsData.map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy2;
    }
    /* --------------Преподаватель----------------- */
    case SET_TEACHERS_DATA: {
      let stateCopy = {
        ...state,
        teachersData: action.data.map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy;
    }
    case SET_TEACHER: {
      let arr = [];
      arr.push({ ...action.data, key: state.teachersData.length });

      let stateCopy = {
        ...state,
        teachersData: arr.concat(state.teachersData).map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy;
    }
    case UPDATE_TEACHER: {
      let stateCopy = {
        ...state,
        teachersData: state.teachersData.map((item) => item),
      };

      stateCopy.teachersData[action.data.key] = action.data;
      debugger;
      return stateCopy;
    }
    case DELETE_TEACHER: {
      let stateCopy = {
        ...state,
      };

      stateCopy.teachersData.splice(action.data.key, 1);

      let stateCopy2 = {
        ...stateCopy,
        teachersData: stateCopy.teachersData.map((item, index) => {
          return { ...item, key: index };
        }),
      };

      return stateCopy2;
    }
    /* -------------Корпуса------------------ */
    case SET_HULLS_DATA: {
      let stateCopy = {
        ...state,
        hullsData: action.data.map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy;
    }
    case SET_HULL: {
      let arr = [];
      arr.push({ ...action.data, key: state.hullsData.length });

      let stateCopy = {
        ...state,
        hullsData: arr.concat(state.hullsData).map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy;
    }
    case UPDATE_HULL: {
      let stateCopy = {
        ...state,
        hullsData: state.hullsData.map((item) => item),
      };

      stateCopy.hullsData[action.data.key] = action.data;

      return stateCopy;
    }
    case DELETE_HULL: {
      let stateCopy = {
        ...state,
      };

      stateCopy.hullsData.splice(action.data.key, 1);

      let stateCopy2 = {
        ...stateCopy,
        hullsData: stateCopy.hullsData.map((item, index) => {
          return { ...item, key: index };
        }),
      };

      return stateCopy2;
    }
    /* ------------------------------- */

    case SET_CONTRACTS_DATA: {
      let stateCopy = {
        ...state,
        contractsData: action.data.map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy;
    }
    case SET_CONTRACT: {
      let arr = [];
      arr.push({ ...action.data, key: state.contractsData.length });

      let stateCopy = {
        ...state,
        contractsData: arr.concat(state.contractsData).map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy;
    }
    case UPDATE_CONTRACT: {
      let stateCopy = {
        ...state,
        contractsData: state.contractsData.map((item) => item),
      };

      stateCopy.contractsData[action.data.key] = action.data;

      return stateCopy;
    }
    case DELETE_CONTRACT: {
      let stateCopy = {
        ...state,
      };

      stateCopy.contractsData.splice(action.data.key, 1);

      let stateCopy2 = {
        ...stateCopy,
        contractsData: stateCopy.contractsData.map((item, index) => {
          return { ...item, key: index };
        }),
      };

      return stateCopy2;
    }

    /* ------------------------------- */

    case SET_PATTERNS_DATA: {
      let stateCopy = {
        ...state,
        patternsData: action.data.map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy;
    }
    case SET_PATTERN: {
      let arr = [];
      arr.push({ ...action.data, key: state.patternsData.length });

      let stateCopy = {
        ...state,
        patternsData: arr.concat(state.patternsData).map((item, index) => {
          return { ...item, key: index };
        }),
      };
      return stateCopy;
    }
    case UPDATE_PATTERN: {
      let stateCopy = {
        ...state,
        patternsData: state.patternsData.map((item) => item),
      };

      stateCopy.patternsData[action.data.key] = action.data;

      return stateCopy;
    }
    case DELETE_PATTERN: {
      let stateCopy = {
        ...state,
      };

      stateCopy.patternsData.splice(action.data.key, 1);

      let stateCopy2 = {
        ...stateCopy,
        patternsData: stateCopy.patternsData.map((item, index) => {
          return { ...item, key: index };
        }),
      };

      return stateCopy2;
    }
    /* ------------------------------- */
    default:
      return state;
  }
};

const setStepHome = (step) => {
  return {
    type: SET_STEP_HOME,
    step,
  };
};

/* -------------Программы------------------ */

const setProgramsData = (data) => {
  return {
    type: SET_PROGRAMS_DATA,
    data,
  };
};

const setProgram = (data) => {
  return {
    type: SET_PROGRAM,
    data,
  };
};

const updateDataSelectProgram = (data) => {
  return {
    type: UPDATE_PROGRAM,
    data,
  };
};

const deleteDataSelectProgram = (data, categ) => {
  return {
    type: DELETE_PROGRAM,
    data,
    categ,
  };
};

/* --------------Преподаватели----------------- */

const setTeachersData = (data) => {
  return {
    type: SET_TEACHERS_DATA,
    data,
  };
};

const setTeacher = (data) => {
  return {
    type: SET_TEACHER,
    data,
  };
};

const updateDataSelectTeacher = (data) => {
  return {
    type: UPDATE_TEACHER,
    data,
  };
};

const deleteDataSelectTeacher = (data) => {
  return {
    type: DELETE_TEACHER,
    data,
  };
};

/* --------------Корпуса----------------- */

const setHullsData = (data) => {
  return {
    type: SET_HULLS_DATA,
    data,
  };
};

const setHull = (data) => {
  return {
    type: SET_HULL,
    data,
  };
};

const updateDataSelectHull = (data) => {
  return {
    type: UPDATE_HULL,
    data,
  };
};

const deleteDataSelectHull = (data) => {
  return {
    type: DELETE_HULL,
    data,
  };
};

/* ------------------------------- */

const setContractsData = (data) => {
  return {
    type: SET_CONTRACTS_DATA,
    data,
  };
};

const setContract = (data) => {
  return {
    type: SET_CONTRACT,
    data,
  };
};

const updateDataSelectContract = (data) => {
  return {
    type: UPDATE_CONTRACT,
    data,
  };
};

const deleteDataSelectContract = (data) => {
  return {
    type: DELETE_CONTRACT,
    data,
  };
};

/* ------------------------------- */

const setPatternsData = (data) => {
  return {
    type: SET_PATTERNS_DATA,
    data,
  };
};

const setPattern = (data) => {
  return {
    type: SET_PATTERN,
    data,
  };
};

const updateDataSelectPattern = (data) => {
  return {
    type: UPDATE_PATTERN,
    data,
  };
};

const deleteDataSelectPattern = (data) => {
  return {
    type: DELETE_PATTERN,
    data,
  };
};

/* ------------------------------- */

export const setStepHomeThunk = (step) => async (dispatch) => {
  debugger;
  dispatch(setStepHome(step));
};

/* ------------Программы------------------- */

export const setDataNewProgramThunk = (data, categ) => async (dispatch) => {
  let id = await apiFirebase.setDataNewProgram(data, categ);

  Promise.all([id]).then((id) => {
    dispatch(setProgram({ ...data, id: id[0] }));
    return true;
  });
};

export const updateDataSelectProgramThunk = (data, categ, id) => async (
  dispatch
) => {
  apiFirebase.updateDataSelectProgram(data, categ, id);
  dispatch(updateDataSelectProgram(data));
};

export const deleteDataSelectProgramThunk = (data, categ, id) => async (
  dispatch
) => {
  apiFirebase.deleteDataSelectProgram(data, categ, id);
  dispatch(deleteDataSelectProgram(data, categ));
};

export const getAllDataThunk = () => async (dispatch) => {
  debugger;
  let response1 = await apiFirebase.getDataPrograms("tech");
  let response2 = await apiFirebase.getDataPrograms("art");
  let response3 = await apiFirebase.getDataPrograms("sport");
  let response4 = await apiFirebase.getDataPrograms("social");
  let response5 = await apiFirebase.getDataPrograms("tourist");
  let response6 = await apiFirebase.getDataPrograms("science");

  let response7 = await apiFirebase.getDataTeachers();

  let response8 = await apiFirebase.getDataHulls();

  let response9 = await apiFirebase.getDataContracts();

  let response10 = await apiFirebase.getDataPatterns();

  Promise.all([
    response1,
    response2,
    response3,
    response4,
    response5,
    response6,
    response7,
    response8,
    response9,
  ]).then((data) => {
    dispatch(
      setProgramsData(
        response1.concat(response2, response3, response4, response5, response6)
      )
    );
    dispatch(setTeachersData(response7));
    dispatch(setHullsData(response8));
    dispatch(setContractsData(response9));
    dispatch(setPatternsData(response10));
  });
};

/* -------------Преподаватели------------------ */

export const setDataNewTeacherThunk = (data) => async (dispatch) => {
  let id = await apiFirebase.setDataNewTeacher(data);

  Promise.all([id]).then((id) => {
    dispatch(setTeacher({ ...data, id: id[0] }));
    return true;
  });
};

export const updateDataSelectTeacherThunk = (data, id) => async (dispatch) => {
  apiFirebase.updateDataSelectTeacher(data, id);
  dispatch(updateDataSelectTeacher(data));
};

export const deleteDataSelectTeacherThunk = (data, id) => async (dispatch) => {
  apiFirebase.deleteDataSelectTeacher(id);
  dispatch(deleteDataSelectTeacher(data));
};

/* ---------------Корпуса---------------- */

export const setDataNewHullThunk = (data) => async (dispatch) => {
  let id = await apiFirebase.setDataNewHull(data);

  Promise.all([id]).then((id) => {
    dispatch(setHull({ ...data, id: id[0] }));
    return true;
  });
};

export const updateDataSelectHullThunk = (data, id) => async (dispatch) => {
  apiFirebase.updateDataSelectHull(data, id);
  dispatch(updateDataSelectHull(data));
};

export const deleteDataSelectHullThunk = (data, id) => async (dispatch) => {
  debugger;
  apiFirebase.deleteDataSelectHull(id);
  dispatch(deleteDataSelectHull(data));
};

/* --------------Договоры----------------- */

export const setDataNewContractThunk = (data) => async (dispatch) => {
  let id = await apiFirebase.setDataNewHull(data);

  Promise.all([id]).then((id) => {
    dispatch(setPattern({ ...data, id: id[0] }));
  });
};

export const updateDataSelectContractThunk = (data, id) => async (dispatch) => {
  apiFirebase.updateDataSelectContract(data, id);
  dispatch(updateDataSelectContract(data));
};

export const deleteDataSelectContractThunk = (data, id) => async (dispatch) => {
  debugger;
  apiFirebase.deleteDataSelectContract(id);
  dispatch(deleteDataSelectContract(data));
};

/* ---------------Шаблоны---------------- */

export const setDataNewPatternThunk = (data) => async (dispatch) => {
  let id = await apiFirebase.setDataNewPattern(data);

  Promise.all([id]).then((id) => {
    dispatch(setContract({ ...data, id: id[0] }));
  });
};

export const updateDataSelectPatternThunk = (data, id) => async (dispatch) => {
  apiFirebase.updateDataSelectPattern(data, id);
  dispatch(updateDataSelectPattern(data));
};

export const deleteDataSelectPatternThunk = (data, id) => async (dispatch) => {
  debugger;
  apiFirebase.deleteDataSelectPattern(id);
  dispatch(deleteDataSelectPattern(data));
};

/* ------------------------------- */

export default Home;
