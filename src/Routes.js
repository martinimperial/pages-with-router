import {
    useRoutes,
     } from 'react-router-dom';
  
import About from './pages/About'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostLists from './pages/PostLists'
import Post from './pages/Post'
import NoMatch from './pages/NoMatch'
  

function Routes() {
    const element = useRoutes([
      { path: "/", element: <Home/> },
      { path: "/posts",
        element: <Posts/>,
        children: [
          { index: true, element: <PostLists/> },
          { path: ":slug", element: <Post/> }
        ],
      },
      { path: "/about", element: <About/> },
      { path: "*", element: <NoMatch/>}
    ]);
    return element;
  }

  export default Routes;
  