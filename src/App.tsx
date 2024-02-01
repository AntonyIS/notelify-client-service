import React ,{FC} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { CreatePost } from './Pages/CreatePost';
import { PostDetails } from './Pages/PostDetails';
import { UserProfile } from './Pages/UserProfile';
import { Header } from './components/Header';

const App:FC = ()  =>{
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:article_id" element={<PostDetails/>}/>
            <Route path="/posts/draft" element={<CreatePost/>}/>
            <Route path="/users/:user_id" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
