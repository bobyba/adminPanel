import { apiIMBD } from "../api/api";
import { apiFirebase } from "../api/api-cloud";

const SET_STEP_PROFILE = "SET_STEP_PROFILE",
  SET_USER_DATA_FOR_FORM = "SET_USER_DATA_FOR_FORM",
  SET_USER_DATA_FOR_OFFERSSUB = "SET_USER_DATA_FOR_OFFERSSUB",
  SET_USER_DATA_FOR_OFFER_INFO = "SET_USER_DATA_FOR_OFFER_INFO",
  SET_USER_DATA_FOR_TIMETABLE = "SET_USER_DATA_FOR_TIMETABLE";

let initialState = {
  stepProfile: "main",
  selectedUserDataForTimetable: {},
  selectedUserDataForForm: {},
  selectedChildOffersData: {},
  selectedUserDataForOfferInfo: {},

  userData: {
    parents: [
      {
        id: "0",
        fio: "Eлена Владимировна Шпак",
        id1part: "2515",
        id2part: "123321",
        phoneNumber: "+7 123 321 3232",
        email: "mailru@mail.ru",
      },
      {
        id: "1",
        fio: "Сергей Владимирович Шпак",
        id1part: "3232",
        id2part: "432234",
        phoneNumber: "+7 912 321 1232",
        email: "mailru@mail.ru",
      },
    ],
    child: [
      {
        id: "0",
        fio: "Костя Шпак",
        birthday: "31.12.2020",
        snils: "42069148805",
        typeDocument: "Паспорт",
        id1part: "2515",
        id2part: "312444",
        timeTableData: [
          {
            title: "Химия",
            start: "2020-12-20T14:30:00",
          },
          {
            title: "Физика",
            start: "2020-12-23T14:30:00",
          },
          {
            title: "Матеш",
            start: "2020-12-24T14:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-25T14:30:00",
            end: "2020-12-25T15:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-26T14:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-27T14:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-25T14:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-25T14:30:00",
          },
        ],
        paidOffers: [
          {
            nameCourse: "Химия",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
          {
            nameCourse: "Физика",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
          {
            nameCourse: "Матеш",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
        ],
        phoneNumber: "+7123123123",
        email: "main@email.com",
      },
      {
        id: "1",
        fio: "Костя Шпак",
        birthday: "31.11.2012",
        snils: "42069148805",
        typeDocument: "Паспорт",
        id1part: "4343",
        id2part: "111321",
        timeTableData: {},
        paidOffers: [
          {
            nameCourse: "Ректал",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
        ],
        phoneNumber: "+79143211232",
        email: "sad@dsa.ds",
      },
    ],
  },
};

const ProfileUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_PROFILE: {
      let stateCopy = {
        ...state,
        stepProfile: action.step,
      };
      return stateCopy;
    }
    case SET_USER_DATA_FOR_TIMETABLE: {
      let stateCopy = {
        ...state,
        selectedUserDataForTimetable: action.userData.timeTableData,
      };
      return stateCopy;
    }
    case SET_USER_DATA_FOR_FORM: {
      let stateCopy = {
        ...state,
        selectedUserDataForForm: action.userData,
      };
      return stateCopy;
    }
    case SET_USER_DATA_FOR_OFFERSSUB: {
      let stateCopy = {
        ...state,
        selectedChildOffersData: action.userData.paidOffers,
      };
      return stateCopy;
    }
    case SET_USER_DATA_FOR_OFFER_INFO: {
      let stateCopy = {
        ...state,
        selectedUserDataForOfferInfo: action.userData,
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

/* ------------------------- */

const setStepProfile = (step) => {
  return {
    type: SET_STEP_PROFILE,
    step,
  };
};

const setUserDataForTimetable = (userData) => {
  return {
    type: SET_USER_DATA_FOR_TIMETABLE,
    userData,
  };
};

const setUserDataForForm = (userData) => {
  return {
    type: SET_USER_DATA_FOR_FORM,
    userData,
  };
};

const setUserDataForOffersSub = (userData) => {
  return {
    type: SET_USER_DATA_FOR_OFFERSSUB,
    userData,
  };
};

const setUserDataForOfferInfo = (userData) => {
  return {
    type: SET_USER_DATA_FOR_OFFER_INFO,
    userData,
  };
};

/* ------------------------------- */

export const setStepProfileThunk = (step) => async (dispatch) => {
  dispatch(setStepProfile(step));
};

export const setUserDataForTimeTableThunk = (userData) => async (dispatch) => {
  dispatch(setStepProfile("timeTableSub"));
  dispatch(setUserDataForTimetable(userData));
};

export const selectFormUserThunk = (userData) => async (dispatch) => {
  dispatch(setStepProfile("personalForm"));
  dispatch(setUserDataForForm(userData));
};

export const selectChildOffersThunk = (userData) => async (dispatch) => {
  dispatch(setStepProfile("offersSub"));
  dispatch(setUserDataForOffersSub(userData));
};

export const selectChildOfferForOfferInfoThunk = (userData) => async (
  dispatch
) => {
  dispatch(setStepProfile("offerInfo"));
  dispatch(setUserDataForOfferInfo(userData));
};
/* ------------------ */

export default ProfileUser;
