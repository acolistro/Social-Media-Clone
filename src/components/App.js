import React from 'react';
import './../App.css';
import Header from "./Header";
import PostList from "./PostList";

function App() {
  return (
    <React.Fragment>
    <Header />
    <PostList />
  </React.Fragment>
  );
}

export default App;
