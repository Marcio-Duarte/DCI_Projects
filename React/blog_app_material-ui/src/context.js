import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const blogServerURL = 'http://localhost:5000/posts';

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(blogServerURL)
        setPosts(result.data.posts);
      } catch (error) {
        return error
      }
    })();
  }, [])

  const addPost = (post) => {
    const newPost = { id: Date.now(), username: post.userName, title: post.title, content: post.content }

    axios.post(blogServerURL, newPost)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log('response: ', error.response);
      });
    setPosts(
      (prevState) => prevState.concat(newPost)
    )
  }

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  )
}
