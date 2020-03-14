import { combineReducers } from "redux";

const defaultState = {
  categories: [
    {
      movieId: "",
      movieName: ""
    }
  ]
};

const categories = (state = defaultState.categories, action) => {
  switch (action.type) {
    case "Set_Categories":
      return { ...state, action };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ categories });

export default rootReducer;
