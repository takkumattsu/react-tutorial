import React, { Component } from 'react'
import Comment from './Comment'

/**
 * コメントリスト
 */
export default class CommentList extends Component {
  render() {
    const commentNodes = this.props.data.map((comment) => {
      return(
        <Comment author={comment.author}>{comment.text}</Comment>
      )
    })
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    )
  }
}