import { PostItem } from "components/molecules/PostItem";
import React from "react";
import { useRecoilValue } from "recoil";
import { postListQuery } from "states/postList";

// データ取得(例)
const datas = [
  {
    avatar: "",
    name: "ユーザー1",
    user_name: "user_1",
    post_time: "2時間前",
    content:
      "これはダミーテキストです。This is a Dummy Text.これはダミーテキストです。This is a Dummy Text.これはダミーテキストです。This is a Dummy Text.これはダミーテキストです。This is a Dummy Text.",
  },
  {
    avatar: "",
    name: "ユーザー2",
    user_name: "user_3",
    post_time: "5分前",
    content: "hello !!",
  },
];

export const PostList = () => {
  const postList = useRecoilValue(postListQuery);
  console.log(postList);

  return (
    <>
      {datas.map((data) => (
        <PostItem
          key={data.post_time}
          avatar={data.avatar}
          name={data.name}
          userName={data.user_name}
          postTime={data.post_time}
          textContent={data.content}
        />
      ))}
    </>
  );
};
