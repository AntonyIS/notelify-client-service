import React ,{FC} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './internal/adapters/components/Navbar/Navbar';
import { HomePage } from './Pages/HomePage';
import { ArticleDetails } from './internal/adapters/components/Articles/ArticleDetails';
import { AddNewArticle } from './internal/adapters/components/Articles/AddNewArticle';
import { UserDetails } from './internal/adapters/components/Users/UserDetails';

const App:FC = ()  =>{

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/articles/:article_id" element={<ArticleDetails/>}/>
            <Route path="/articles/draft" element={<AddNewArticle/>}/>
            <Route path="/users/:user_id" element={<UserDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
