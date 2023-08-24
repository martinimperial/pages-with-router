import {
    useRoutes,
     } from 'react-router-dom';
  
  

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