import { ACTIONS } from "./constants";

const getSavedTweets = () => {
  let savedTweets = localStorage.getItem("savedTweets");
  if (savedTweets) {
    return JSON.parse(savedTweets);
  }

  return [];
};

export const initialState = { tweets: [], loading: false, savedTweets: getSavedTweets() };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_TWEETS:
      return {
        ...state,
        tweets: action.payload,
      };
    case ACTIONS.SAVE_TWEET:
      const copy = [...state.tweets][action.payload];
      const savedTweets = [...state.savedTweets, copy];
      localStorage.setItem("savedTweets", JSON.stringify(savedTweets));
      return {
        ...state,
        savedTweets,
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTIONS.DELETE_SAVED_TWEET:
      const newSaved = [...state.savedTweets].filter(tweet => tweet.id !== action.payload)
      localStorage.setItem("savedTweets", JSON.stringify(newSaved));
      return {
        ...state,
        savedTweets: newSaved,
      };
    default:
      return state;
  }
};
