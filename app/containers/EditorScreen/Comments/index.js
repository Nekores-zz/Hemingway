/**
 *
 * Comments
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Comment from "../../../components/Comment";
/* eslint-disable react/prefer-stateless-function */
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: { text: "If you are looking for a restaurant that represents Tel Aviv, this is it. With its hipster atmosphere and delicious take on middle-eastern food. " } };
  }

  render() {
    return <div>
        <div className="_date">
          <p> Today, 12:33</p>
        </div>
        <ul>
          <li>
            <Comment background="#f9f9fb" commentSide textNote commentText={this.state.comment.text} />
          </li>
          <li>
            <Comment background="#f9f9fb" commentSide textNote commentText={this.state.comment.text} />
          </li>
        </ul>
      </div>;
  }
}

Comments.propTypes = {};

export default Comments;
