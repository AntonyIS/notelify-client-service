import React ,{FC} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './Pages/HomePage';
import { ArticleDetails } from './components/Articles/ArticleDetails';
import { UserDetail } from './components/Users/UserDetail';

const App:FC = ()  =>{

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/users/:user_id" element={<UserDetail/>}/>
            <Route path="/articles/:article_id" element={<ArticleDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
