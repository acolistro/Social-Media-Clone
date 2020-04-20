import React from "react";
import Post from "./Post";

const masterPostList = [
  {
    title: 'Happy birthday!',
    name: 'Kim Seokjin',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'TGIF',
    name: 'Kim Taehyung',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Try this Recipe!',
    name: 'Min Yoongi',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

function PostList(){
  return (
    <React.Fragment>
      <hr/>
      {masterPostList.map((post, index) =>
        <Post names={post.title}
          location={post.name}
          issue={post.content}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostList;