import React ,{FC, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Contents } from './components/Contents/Contents';
import { Recommendations } from './components/Contents/Recommendations';
import { ContentProp } from './types/Content';
import { Home } from './components/Home/home';
import { Content } from './components/Contents/Content';




const App:FC = ()  =>{
  const [contents,setcontents] = useState<ContentProp[]>([])

  useEffect(() => {
    fetch('http://157.175.153.161:8081/v1/contents/')
      .then(response => response.json())
      .then(data => {
        setcontents(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home  contents={contents}/>}/>
            <Route path="/posts/:id" element={<Content/>}/>
        </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
