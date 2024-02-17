import React ,{FC} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { CreatePost } from './Pages/Posts/CreatePost';
import { PostPage } from './Pages/Posts/PostPage';
import { PostEdit } from './Pages/Posts/PostEdit';
import { UserPage } from './Pages/Users/UserPage';


const App:FC = ()  =>{
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:post_id" element={<PostPage/>}/>
            <Route path="/posts/draft" element={<CreatePost/>}/>
            <Route path="/posts/edit/:post_id" element={<PostEdit/>}/>
            <Route path="/users/:user_id" element={<UserPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
