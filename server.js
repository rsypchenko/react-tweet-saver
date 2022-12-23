import express from "express";
import cors from "cors";
import config from './config.js';
import { Client } from "twitter-api-sdk";

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

async function main(text) {
  const client = new Client(
    config.access_token
  );

  const response = await client.tweets.tweetsRecentSearch({
    query: text,
    expansions: ["author_id"],
    "tweet.fields": ["created_at"],
    "user.fields": ["name", "username", "profile_image_url"],
    "place.fields": ["country", "country_code", "full_name"],
  });

  return response;
}

app.get("/tweets", async (req, res) => {
  try {
    const data = await main(req.query.text);
    res.json(data);
  } catch(e) {
    console.log(e.error.detail);
    res.status(e.status).json({ message: e.error.detail});
  }
});

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
