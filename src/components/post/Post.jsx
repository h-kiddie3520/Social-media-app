import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImage" src="assets/user.png" alt="" />
            <span className="postUserName">Alex Joyce</span>
            <span className="postDate">5min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey its my first post</span>
          <img className="postImage" src="assets/post1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" className="likeIcon" />
            <img src="assets/heart.jpg" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight"></div>
          <span className="postCommentText">9 comments</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
