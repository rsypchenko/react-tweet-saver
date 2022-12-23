import deleteIcon from "../../assets/delete.svg";

export const SavedTweet = ({ tweet, deleteHandle }) => {
  return (
    <div className="flex py-4 px-0 w-full border-b-2 last:border-b-0">
      <img
        className="w-12 h-12 rounded-xl"
        src={tweet.user.profile_image_url}
        alt="profile"
      />
      <div className="flex ml-2 w-full">
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex font-bold">{tweet.user.name}</div>
              <div className="ml-2 text-gray-500">@{tweet.user.username}</div>
            </div>
            <div className="ml-2 text-gray-500">{tweet.created_at}</div>
          </div>
          <div className="flex relative">
          <div className="flex w-5/6" dangerouslySetInnerHTML={{ __html: tweet.text }}></div>
            <button
              onClick={() => deleteHandle(tweet.id)}
              className="flex flex-col justify-center align-middle border-2 rounded-full w-8 h-8 absolute right-0 top-0"
            >
              <img className="h-4 w-4 self-center" src={deleteIcon} alt="delete tweet"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
