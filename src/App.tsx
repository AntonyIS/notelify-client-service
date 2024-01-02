import React ,{FC} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './internal/adapters/components/Navbar/Navbar';
import { HomePage } from './Pages/HomePage';
import { ArticleDetails } from './internal/adapters/components/Articles/ArticleDetails';

const App:FC = ()  =>{

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/articles/:article_id" element={<ArticleDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
