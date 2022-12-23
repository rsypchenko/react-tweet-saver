const baseUrl = "http://localhost:3000/tweets/";

export const fetchTweets = (text, count) => {
  return fetch(`${baseUrl}?text=${text}&count=${count}`);
};
