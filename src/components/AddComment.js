import React, { Component } from 'react';
import './AddComment.css'


  
  
  
  class CommentBox extends React.Component {
    constructor() {
      super();
  
      this.state = {
        showComments: false,
        comments: [
          {
            id: "",
            author: "Camille Johnson",
            body:"AMAZING!"
          }
        ]
      };
    }
    // Get Comments
    _getComments() {
  
      return this.state.comments.map(comment => {
        return (
          <Comment 
            author={comment.author} 
            body={comment.body} 
            key={comment.id} />
        );
      });
    }
  
    _getCommentTitle(commentCount) {
      if (commentCount === 0) {
        return "No comments yet";
      
      } else {
        return `${commentCount}`;
      }
    }
  
    render() {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = `Afficher`;
  
      if (this.state.showComments) {
        buttonText = "Masquer";
      }
      if (this.state.showComments) {
        commentNodes = (
          <div className="comment-list">
            {comments}
          </div>
        );
      }
      return (
        <div className="comment-box container">
        <p className="commentNumber">
              {this._getCommentTitle(comments.length)} commentaires
          </p>
          {comments}
          {commentNodes}
          <CommentForm addComment={this._addComment.bind(this)} />
          
        
          
        </div>
      );
    }
  
    _addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) });
    }
  
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
  }

  class Comment extends React.Component {
    _getUpperCase(name) {
      return name.toUpperCase();
    }
    render() {
      return (
        <div className="comment">
         
        
          <div className="comment-header">
            <h3 className="commentAuthorName">
              {this._getUpperCase(this.props.author)}
            </h3>
          </div>
          <div className="comment-body">
            <blockquote className="quote">
            {this.props.body}
            </blockquote>
          </div>
         
      
        </div>
      );
    }
  }

  class CommentForm extends React.Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <label></label>
          <div className="comment-form-fields">
                <div className="containerNameComment">
                    <input className="authorComment"
                     placeholder="Nom..."
                    ref={input => (this._author = input)}
                    />{" "}
                    <br />
                    <textarea className="contentComment"
                    placeholder="Commentaire..."
                    ref={textarea => (this._body = textarea)}
                     />
                </div>
          
                <div className="comment-form-actions">
                    <button className="ctaSubmitComment" type="submit">Publier</button>
                </div>
          </div>
        </form>
      );
    }
  
    _handleSubmit(event) {
      event.preventDefault();
  
      let author = this._author;
      let body = this._body;
  
      this.props.addComment(author.value, body.value);
    }
  }


export default CommentBox