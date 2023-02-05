
import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([1,2,3,4]);

  useEffect(() => {
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={"post.text"}
            displayName={"post.displayName"}
            username={"post.username"}
            verified={"post.verified"}
            text={"post.text"}
            avatar={"./logo192.png"}
            image={"./logo192.png"}
          />
        ))}
      </FlipMove>
    </div>
  );
}
export default Feed;