import { useEffect, useState } from "react";
import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,

}) => {

  const [textLike, setTextLike] = useState(null);

  useEffect(() => {
    if(likeNum > 0) setTextLike(
      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">{likeNum} คน</span>
      </div>
    )
  },[likeNum])

    // const cout = (() =>{
    //     replies.map((x) => {
    //       return <Reply userImagePath = {x.userImagePath} username = {x.username} replyText = {x.replyText} likeNum = {x.likeNum}/>
    //     })
    // });


  return (
    <div>
        <div className="d-flex gap-2 my-2">
          <img
            src= {userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
            {textLike}
            {/* {cout()} */}
          </div>
        </div>
    </div>
  );
};
