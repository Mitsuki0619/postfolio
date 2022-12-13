import { PostItem } from "components/molecules/PostItem";
import React from "react";

// データ取得(例)
const datas = [
  {
    avatar: "",
    name: "ユーザー1",
    username: "user_1",
    posttime: 1,
    textcontent: "hello !",
  },
  {
    avatar: "",
    name: "ユーザー2",
    username: "user_3",
    posttime: 2,
    textcontent: "hello !!",
  },
];

export const PostList = () => {
  return (
    <>
      {datas.map((data) => (
        <PostItem
          key={data.posttime}
          avatar={data.avatar}
          name={data.name}
          username={data.username}
          posttime={data.posttime}
          textcontent={data.textcontent}
        />
      ))}
    </>
  );
};
