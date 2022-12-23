import React, { useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";

import Header from "./components/Header";
import TweetPanel from "./components/TweetPanel";
import SavedTweets from "./components/SavedTweets";
import { SavedTitle } from "./components/SavedTweets/SavedTitle";
import { SidePanel } from "./components/SidePanel/SidePanel";
import Search from "./components/Search";

import { useDragAndDrop } from "./hooks/useDragAndDrop";

import { fetchTweets } from "./api";
import { initialState, reducer } from "./store";
import { populateData } from "./utils";

import { EMPTY_RESULTS, NOTIFICATIONS, ACTIONS } from "./constants";

import "react-toastify/dist/ReactToastify.css";

const TWEETS_LIMIT = 10;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tweets, savedTweets, loading } = state;
  const { dragStart, dragEnter, dragOver, drop } = useDragAndDrop({
    dispatch,
    tweets,
    savedTweets,
  });

  const searchTweets = (searchText) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });

    fetchTweets(searchText, TWEETS_LIMIT)
      .then((response) => response.json())
      .then((res) => {
        const tweets = populateData(res);
        dispatch({ type: ACTIONS.SET_TWEETS, payload: tweets });
      })
      .catch(() => {
        dispatch({ type: ACTIONS.SET_TWEETS, payload: [] });
        toast.error(NOTIFICATIONS.FETCH_ERROR);
      })
      .finally(() => {
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      });
  };

  const deleteSavedTweet = (id) => {
    dispatch({ type: ACTIONS.DELETE_SAVED_TWEET, payload: id });
    toast.info(NOTIFICATIONS.TWEET_DELETED);
  };

  return (
    <div className="flex flex-col p-4 h-screen font-Dosis">
      <Header />
      <div className="flex flex-col sm:flex-row h-5/6">
        <SidePanel>
          <Search onSearch={searchTweets} loading={loading} />
          <TweetPanel
            loading={loading}
            tweets={tweets}
            dragStart={dragStart}
            dragEnter={dragEnter}
            emptyResultMessage={EMPTY_RESULTS.TWEETS}
          />
        </SidePanel>
        <SidePanel isLeft>
          <SavedTitle />
          <SavedTweets
            tweets={savedTweets}
            drop={drop}
            dragOver={dragOver}
            deleteSavedTweet={deleteSavedTweet}
            emptyResultMessage={EMPTY_RESULTS.SAVED_TWEETS}
          />
        </SidePanel>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
