import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string
};

export default Post;