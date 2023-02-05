
import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState();
  const handleFileChange = (e) => {
  };
  const uploadImage = async (e) => {
  };
  const sendTweet = async (event) => {
  };
  return (
    <div className="tweetBox">
      <form onSubmit={(e) => sendTweet(e)}>
        <div className="tweetBox__input">
          <Avatar src="./avatar.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div>
          <label for="file">
            <span>Optional: Enter image URL</span>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
              className=""
            />
            <pre> {tweetImage?.name} </pre>
          </label>
        </div>
        <Button type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}
export default TweetBox;