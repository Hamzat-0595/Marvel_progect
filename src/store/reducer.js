import { SAVE_CHARATERS, SELECT_CHARATER } from "./constants";

import { SAVE_COMICS } from "./constants";

const initialState = {
  characters: [],
  selectedCharacter: null,
  comics: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CHARATERS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
      };

    case SELECT_CHARATER:
      return {
        ...state,
        selectedCharacter: action.payload,
      };
    case SAVE_COMICS:
      return {
        ...state,
        comics: [...state.comics, ...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
