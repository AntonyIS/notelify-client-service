import React ,{FC, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { CreatePost } from './Pages/Posts/CreatePost';
import { PostPage } from './Pages/Posts/PostPage';
import { PostEdit } from './Pages/Posts/PostEdit';
import { UserPage } from './Pages/Users/UserPage';
import { Login } from './Pages/Authentication/Login';
import { SignUp } from './Pages/Authentication/Signup';
import { RedirectOauth } from './Pages/Authentication/RedirectOauth';
import { User } from './Types/Types';


const App:FC = ()  =>{
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle user login
  // const handleLogin = (userData: User) => {
  //   setUser(userData);
  //   setIsLoggedIn(true);
  //   localStorage.setItem('user', JSON.stringify(userData));
  // };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} user={user} />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:post_id" element={<PostPage/>}/>
            <Route path="/posts/draft" element={<CreatePost/>}/>
            <Route path="/posts/edit/:post_id" element={<PostEdit/>}/>
            <Route path="/users/:user_id" element={<UserPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/github/oauth2/callback" element={<RedirectOauth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
