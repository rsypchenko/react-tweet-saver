import { SavedTweet } from "./SavedTweet";

export const SavedTweets = ({
  tweets,
  drop,
  dragOver,
  emptyResultMessage,
  deleteSavedTweet,
}) => {
  return (
    <div
      className="flex flex-col h-full rounded-md w-full border-2 p-4 mt-4 overflow-y-auto"
      onDrop={drop}
      onDragOver={(e) => dragOver(e)}
    >
      {tweets.length == 0 && (
        <div className="flex justify-center align-middle p-10">
          {emptyResultMessage}
        </div>
      )}
      {tweets.map((tweet) => (
        <SavedTweet
          key={tweet.id}
          tweet={tweet}
          deleteHandle={deleteSavedTweet}
        />
      ))}
    </div>
  );
};
