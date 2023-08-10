"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";

export default function HomePage() {

  const reply_in_comment = [
    <Reply userImagePath={"/profileImages/puppy.jpg"} username = {"หมาน้อย"} commentText="จริงค้าบบบบบบบ" likenum = {2}/>, 
    <Reply userImagePath={"/profileImages/popcat.png"} username = {"Cat Meme"} commentText="ยิซ่าาาาาา" likenum = {2}/>
  ]

    //test
    const cout = (() => {
      reply_in_comment.map((x) =>{
        return <Reply userImagePath={x.userImagePath} username = {x.username} commentText = {x.commentText} likeNum = {x.likeNum}/>
      });
    });

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner profile = "/profileImages/handsome.jpg" ownerName = "Koorawit Piboon 650612076" ownerText = "ไม่ชอบทำหน้าเว็ปเลย" like = {100}/>

        {/* Comment Example */}
        <Comment userImagePath="/profileImages/lisa.jpg" commentText="จริงค่า" username="Lisa" likeNum = {999}  replies = {reply_in_comment}/>

        {/* Reply Example */}
        {/* <Reply userImagePath={"/profileImages/puppy.jpg"} username = {"หมาน้อย"} commentText="จริงค้าบบบบบบบ" likenum = {2}/> */}
        <Reply userImagePath={"/profileImages/puppy.jpg"} username = {"หมาน้อย"} replyText="จริงค้าบบบบบบบ" likeNum = {0}/>, 
        <Reply userImagePath={"/profileImages/popcat.png"} username = {"Cat Meme"} replyText="ยิซ่าาาาาา" likeNum = {2}/>

        <Comment userImagePath="/profileImages/charliebrown.jpg" commentText="บ้าไปแล้ว" username="Charlie Brown" likeNum = {0}/>



        {/* map-loop render Comment component here */}
        
        
      </div>
    </div>
  );
}
