import React, { useState } from 'react';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const handleAddComment = () => {
    if (text.trim()) {
      const newComment = {
        id: Date.now(),
        content: text,
        time: new Date().toLocaleString(),
      };
      setComments([newComment, ...comments]);
      setText('');
    }
  };

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="container">
      <h1>💬 Comment Box</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handleAddComment}>Post Comment</button>

      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <small>{comment.time}</small>
            <button className="delete-btn" onClick={() => handleDelete(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
