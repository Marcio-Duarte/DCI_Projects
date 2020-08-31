import React from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { BlogContext } from './context';
import NotFoundPage from './components/NotFoundPage'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Form from './components/Form'
import ShowAllPosts from './components/ShowAllPosts'
import PostDetails from './components/PostDetails'
import BlogContextProvider from './context'

export default function App() {
  return (
    <div >
      <BlogContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newpost" component={Form} />
          <Route exact path="/allposts" component={ShowAllPosts} />
          <Route path="/post/:username/:id" children={<MatchPost />} />
          <Route component={NotFoundPage} />
        </Switch >
      </BlogContextProvider>
    </div >
  );
}

function MatchPost() {
  const { username, id } = useParams();
  const { posts } = React.useContext(BlogContext);
  const post = posts.filter(post => post.username === username && post.id === +id);

  if (post[0]) {
    return <PostDetails data={post[0]} />
  }
  return <NotFoundPage />
}
