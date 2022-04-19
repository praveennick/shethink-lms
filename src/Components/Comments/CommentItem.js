import React from "react";
import "./CommentItem.css";

import { ReactComponent as LikeIcon } from "../../assets/icons/like-icon.svg";
import gamer from "../../assets/images/gamer.png";

function CommentItem() {
  return (
    <div className="commentItem">
      <div className="commentItem-up">
        <div className="commentItem-up-1">
          <img src={gamer} alt="" className="commentItem-image" />
          <p className="commentItem-comment">
            nice ankit, it is very informative video lecture, thanks for
            sharing.
          </p>
        </div>
        <LikeIcon className="commentItem-likeIcon" />
      </div>
      <div className="commentItem-down">
        <p className="commentItem-down-name">Praveen</p>
        <p className="commentItem-down-day">5 Days Ago</p>
      </div>
    </div>
  );
}

export default CommentItem;
