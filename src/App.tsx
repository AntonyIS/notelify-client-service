import React ,{FC} from 'react';
import { Navbar } from './components/Navbar';
import { Contents } from './components/Contents/Contents';
import { Recommendations } from './components/Contents/Recommendations';
import { ContentProp } from './types/Content';

const contents : ContentProp[] = [
  {
    contentID:"1",
    creatorID:"1",
    title:"test title",
    body:"content body"
  },
  {
    contentID:"1",
    creatorID:"1",
    title:"test title",
    body:"content body"
  },
  {
    contentID:"1",
    creatorID:"1",
    title:"test title",
    body:"content body"
  },
  {
    contentID:"1",
    creatorID:"1",
    title:"test title",
    body:"content body"
  }
]

const App:FC = ()  =>{
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-md-8 col-lg-8 colxl-8">
            <Contents contents={contents}/>
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
