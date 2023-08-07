
export interface ContentProp {
    content_id:string;
    creator_id:string;
    title:string;
    body:string;
    publication_date: string
}
export interface ContentProps {
    contents: ContentProp[];
}

export interface AuthorProp {
    firstname:string;
    lastname:string;
    handle:string;
    contents:ContentProp[];
    followers :number;
    following :number;
}
export interface ContentHead {
    user_imagePath?:string;
    user_firstname?:string;
    user_lastname?:string;
    content_title?:string;
    content_publication_date? :string;
}


// import React ,{FC, useEffect, useState} from 'react';
// import { Navbar } from './components/Navbar';
// import { Contents } from './components/Contents/Contents';
// import { Recommendations } from './components/Contents/Recommendations';
// import { ContentProp,ContentProps} from './types/Content';
// import { error } from 'console';

// const contents : ContentProp[] = [
//   {
//     contentID:"1",
//     creatorID:"1",
//     title:"test title",
//     body:"content body"
//   },
//   {
//     contentID:"1",
//     creatorID:"1",
//     title:"test title",
//     body:"content body"
//   },
//   {
//     contentID:"1",
//     creatorID:"1",
//     title:"test title",
//     body:"content body"
//   },
//   {
//     contentID:"1",
//     creatorID:"1",
//     title:"test title",
//     body:"content body"
//   }
// ]

// const App:FC = ()  =>{
//   const [contents,setContents] = useState<ContentProp[]>()
//   const [loading,setLoading] = useState<boolean>()

//   useEffect(()=>{
//     fetch("http://157.175.153.161:8081/v1/contents/")
//     .then(response => response.json())
//     .then(data => {
//       setContents(data)
//     
//       setLoading(false)
//     })
//     .catch(error => {
//       setLoading(false)
//     })
//   })
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12 col-md-12 col-md-8 col-lg-8 colxl-8">
//             <Contents contents={contents}/>
//           </div>
//           <div className="col-sm-12 col-md-12 col-md-4 col-lg-4 colxl-4">
//             <Recommendations />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
