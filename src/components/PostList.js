import React from "react";
import Ticket from "./Ticket";

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Prop types are throwing an error'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
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