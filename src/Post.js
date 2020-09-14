import { Avatar } from "@material-ui/core";
import { AccountCircle, ExpandMoreOutlined } from "@material-ui/icons";
import React from "react";
import "./Post.css";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeicon from "@material-ui/icons/NearMe";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar' />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>timestamp</p>
        </div>
      </div>

      <div className='post__bottom'>
        <p>{message}</p>
      </div>
      <div className='post__image'>
        <img src='{image}' alt='' />
      </div>
      <div className='div post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>Like</p>
        </div>

        <div className='post__option'>
          <NearMeicon />
          <p>Like</p>
        </div>

        <div className='post__option'>
          <AccountCircle />
          <ExpandMoreOutlined />
          <p>Like</p>
        </div>
      </div>
    </div>
  );
}
export default Post;
