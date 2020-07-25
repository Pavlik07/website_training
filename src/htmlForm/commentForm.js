import React from 'react';
import './comment.css';

function CommentForm() {
    return (
        <div className="textarea">
            <textarea className="comment" name="comment" rows="3">Добавьте комментарий...</textarea>
            <p><input className="send" type="submit" value="Отправить" /> </p> 
        </div>
    );
  }
  
  export default CommentForm;