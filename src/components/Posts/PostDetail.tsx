import {FC, useEffect, useState} from "react";
import { Link,useParams } from 'react-router-dom';
import { PostProp, UserProp } from "../../types/Types";
import { PostHead } from "./PostHead";



const LinklinkStyle = {
    textDecoration: 'none',
 };
  

const linkStyle = {
    border: 'none',
};
  
export  const PostDetail:FC = () => {
    const { id } = useParams();
    const [post,setPost] = useState<PostProp>()
    const [user,setUser] = useState<UserProp>()
    const contentURL:string =  `http://127.0.0.1:8081/v1/contents/${id}`

    useEffect(() => {
        async function fetchData() {
          try {
            const response1 = await fetch(contentURL);
            const data:PostProp = await response1.json();
            setPost(data);
            let creator_id:string = data.creator_id
            let authorURL:string = `http://127.0.0.1:8080/v1/users/${creator_id}`
            const response2 = await fetch(authorURL);
            const data2 = await response2.json();
            setUser(data2);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);


    return (
        <div className="container mt-2">
            <div className="card" style={linkStyle}>
                <div className="card-body">
                   <div className="row">
                        <PostHead 
                            content_title={post?.title} 
                            content_publication_date={post?.publication_date} 
                            user_imagePath="/images/user1.png"
                            user_firstname={user?.firstname}
                            user_lastname={user?.lastname}
                        />
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <p className="fw-light text-dark">{post?.body}</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="display-6">
                                {user?.firstname} {user?.lastname}
                            </div>
                            {user?.contents?.map((item:PostProp) => (
                                
                               <Link to={`/posts/${item.content_id}`} style={LinklinkStyle} key={item.content_id}>
                                    <div className="card mb-2">
                                        <div className="card-body fw-light text-dark">
                                            <PostHead 
                                                content_title={item.title} 
                                                content_publication_date={item.publication_date} 
                                                user_imagePath="/images/user1.png"
                                                user_firstname={user?.firstname}
                                                user_lastname={user?.lastname}
                                            />
                                            <p className="fst-normal">{item.body.slice(0, 100)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

