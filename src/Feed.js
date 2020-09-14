import React from "react";
import faker from "faker";

import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={faker.image.avatar()}
        message={faker.hacker.phrase}
        timestamp='timestamp'
        username='GG'
        image={faker.image.cats()}
      />
      <Post
        profilePic={faker.image.avatar()}
        message={faker.hacker.phrase}
        timestamp='timestamp'
        username='GG'
        image={faker.image.cats()}
      />
      <Post
        profilePic={faker.image.avatar()}
        message={faker.hacker.phrase}
        timestamp='timestamp'
        username='GG'
        image={faker.image.cats()}
      />

      <Post
        profilePic={faker.image.avatar()}
        message={faker.hacker.phrase}
        timestamp='timestamp'
        username='GG'
        image={faker.image.cats()}
      />
    </div>
  );
}

export default Feed;
