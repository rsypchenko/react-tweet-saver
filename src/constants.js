export const FORM_ERRORS = {
  REQUIRED: "Query should not be empty",
  MAX_LENGTH: "Maximum query length should be less than 50 chars",
};

export const EMPTY_RESULTS = {
  TWEETS: "Empty data, please use search to find tweets",
  SAVES_TWEETS:
    "No savedTweets tweets, please use drag & drop to add savedTweets tweets",
};

export const ACTIONS = {
    SET_TWEETS: "SET_TWEETS",
    SAVE_TWEET: "SAVE_TWEET",
    SET_LOADING: "SET_LOADING",
    DELETE_SAVED_TWEET: "DELETE_SAVED_TWEET",
}

export const NOTIFICATIONS = {
  TWEET_SAVED: "Tweet saved",
  TWEET_DELETED: "Tweet deleted",
  TWEET_EXISTS: "Tweet already exists",
  FETCH_ERROR: "Tweets loading error"
}