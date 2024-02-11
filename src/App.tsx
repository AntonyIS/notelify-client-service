import React ,{FC} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { PostPage } from './Pages/PostPage';
import { UserProfile } from './Pages/User';
import { Header } from './components/Header/Header';
import { PostCreate } from './Pages/PostCreate';
import { PostEdit } from './Pages/PostEdit';


const App:FC = ()  =>{
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:post_id" element={<PostPage/>}/>
            <Route path="/posts/draft" element={<PostCreate/>}/>
            <Route path="/posts/edit/:post_id" element={<PostEdit/>}/>
            <Route path="/users/:user_id" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
