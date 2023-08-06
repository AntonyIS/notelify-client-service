import React ,{FC, useState, useEffect} from 'react';
import { Navbar } from './components/Navbar';
import { Contents } from './components/Contents/Contents';
import { Recommendations } from './components/Contents/Recommendations';
import { ContentProp } from './types/Content';




const App:FC = ()  =>{
  const [contents,setcontents] = useState<ContentProp[]>([])
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('http://157.175.153.161:8081/v1/contents/')
      .then(response => response.json())
      .then(data => {
        setcontents(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-md-8 col-lg-8 colxl-8">
            {loading ? (
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <Contents contents={contents}/>
            )}
            
          </div>
          <div className="col-sm-12 col-md-12 col-md-4 col-lg-4 colxl-4">
            <Recommendations />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
