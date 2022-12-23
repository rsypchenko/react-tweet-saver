import { format } from "date-fns";
import { FORM_ERRORS } from "./constants";

export const formatDate = (date) => {
  try {
    return format(new Date(date), "yyyy/MM/dd");
  } catch (e) {
    console.error(e);
  }
  return "";
};

export const populateData = (res) => {
  if (!res || !res.data) return [];

  return res.data.map((tweet) => {
    const users = res?.includes?.users ?? [];
    const user = users.find((item) => item.id === tweet.author_id) ?? {
      name: "",
      username: "",
      profile_image_url: "",
    };
    return {
      ...tweet,
      text: replaceURLs(tweet.text),
      created_at: formatDate(tweet.created_at),
      user,
    };
  });
};

export const validateTextField = (text) => {
  let [isError, errorText] = [false, ""];

  if (text.length === 0) {
    isError = true;
    errorText = FORM_ERRORS.REQUIRED;
  }

  if (text.length > 50) {
    isError = true;
    errorText = FORM_ERRORS.MAX_LENGTH;
  }

  return [isError, errorText];
};

export const replaceURLs = (message) => {
  if (!message) return "";

  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message.replace(urlRegex, function (url) {
    var hyperlink = url;
    if (!hyperlink.match("^https?://")) {
      hyperlink = "http://" + hyperlink;
    }
    return `<a class="text-blue-500" href="${hyperlink}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
};
