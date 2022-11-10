import React from 'react';

import './index.css';

function Post({postId, title, date, author, text}) {
  return <article>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <p>{author}</p>
    <p>{text}</p>
  </article>;
}

export default Post;
