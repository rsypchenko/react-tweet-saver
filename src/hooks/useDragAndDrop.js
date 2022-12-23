import { useRef } from "react";
import { ACTIONS, NOTIFICATIONS } from "../constants";
import { toast } from "react-toastify";

export const useDragAndDrop = ({ dispatch, tweets, savedTweets }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();

    const index = dragItem.current;

    if (savedTweets.includes(tweets[index])) {
      toast.error(NOTIFICATIONS.TWEET_EXISTS);
      return;
    }

    dispatch({ type: ACTIONS.SAVE_TWEET, payload: index });

    dragItem.current = null;
    dragOverItem.current = null;

    toast.success(NOTIFICATIONS.TWEET_SAVED);
  };

  return { dragStart, dragEnter, dragOver, drop };
};
