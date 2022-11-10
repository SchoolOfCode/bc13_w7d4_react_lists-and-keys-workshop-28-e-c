import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
    {samplePosts.map(({postId, title, date, author, text, highlights}) => {
      return <Post title={title} key={postId} date={date} author={author} text={text} highlights={highlights}
      />
    })}
  </main>;
}

export default Main;
