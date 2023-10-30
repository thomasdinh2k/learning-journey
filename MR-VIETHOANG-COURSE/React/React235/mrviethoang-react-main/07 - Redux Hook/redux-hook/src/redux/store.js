import { legacy_createStore as createStore } from "redux";

const defaultState = {
  num: 10,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_NUMBER":
      return { ...state, num: Math.round(Math.random() * 10) };
    case "RESET":
      return { ...state, num: 10 };
  }
};

const store = createStore(reducer);

export default store;