import React ,{FC, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/home';
import { PostProp, UserProp } from './types/Types';
import { PostDetail } from './components/Posts/PostDetail';
import { UserDetail } from './components/Users/UserDetail';




const App:FC = ()  =>{
  const [posts,setPosts] = useState<PostProp[]>([])
  const [users,setUsers] = useState<UserProp[]>([])
  const [usersLoading,setUserLoading] = useState<boolean>(true)
  const [postsLoading,setPostsLoading] = useState<boolean>(true)
  const postURL:string = "http://127.0.0.1:8081/v1/contents/"
  const usersURL:string = "http://127.0.0.1:8080/v1/users/"
  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await fetch(postURL);
        const postsData:PostProp[] = await response1.json();
        setPosts(postsData);
        setPostsLoading(false)

        const response2 = await fetch(usersURL);
        const userData:UserProp[] = await response2.json();
        setUsers(userData);
        setUserLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route 
            path="/" 
                element={<Home  
                posts={posts} 
                users={users}
                usersLoading={usersLoading}
                postsLoading={postsLoading}
                />}
            />
            <Route path="/users/:id" element={<UserDetail/>}/>
            <Route path="/posts/:id" element={<PostDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
