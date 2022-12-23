import { TweetItem } from "./TweetItem";

export const TweetPanel = ({
  tweets,
  loading,
  emptyResultMessage,
  dragStart,
  dragEnter,
}) => {
  if (loading) {
    return (
      <div className="flex justify-center h-full rounded-md w-full border-2 p-4 mt-4">
        <div className="lds-ripple flex justify-center mt-10">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full rounded-md w-full border-2 p-4 mt-4 overflow-y-auto">
      {tweets.length == 0 && (
        <div className="flex justify-center align-middle p-10">
          {emptyResultMessage}
        </div>
      )}
      {tweets.map((tweet, index) => (
        <TweetItem
          index={index}
          key={tweet.id}
          tweet={tweet}
          dragEnter={dragEnter}
          dragStart={dragStart}
        />
      ))}
    </div>
  );
};
