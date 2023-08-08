import {FC, useEffect, useState} from "react";
import { Link,useParams } from 'react-router-dom';
import { PostProp, UserProp } from "../../types/Types";
import { UserHead } from "./UserHead";
import { LoadingSpinner } from "../Utils/loadingSpinner";
import { Post } from "../Posts/Post";


const LinklinkStyle = {
    textDecoration: 'none',
 };
  

const linkStyle = {
    border: 'none',
};
  
export  const UserDetail:FC = () => {
    const { id } = useParams();
    const [user,setUser] = useState<UserProp>()
    const loading:boolean = false
    const authorURL:string = `http://127.0.0.1:8080/v1/users/${id}`
   
    useEffect(() => {
        async function fetchData() {
          try {
            const response1 = await fetch(authorURL);
            const data:UserProp = await response1.json();
            setUser(data);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);

      console.log(user)
    return (
        <div className="container mt-2">
            <div className="card fw-light text-dark" style={linkStyle}>
                <div className="card-body">
                    <div className="display-6 mt-0 pt-0 mb-3">
                        {user?.firstname} {user?.lastname}
                    </div>
                   <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
                           
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-light text-dark active" id="about-user-tab" data-bs-toggle="tab" data-bs-target="#about-user" type="button" role="tab" aria-controls="about-user" aria-selected="true">Home</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-light text-dark" id="user-following-tab" data-bs-toggle="tab" data-bs-target="#user-following" type="button" role="tab" aria-controls="user-following" aria-selected="false">Following</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-light text-dark" id="user-followers-tab" data-bs-toggle="tab" data-bs-target="#user-followers" type="button" role="tab" aria-controls="user-followers" aria-selected="false">Followers</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="mt-2 mb-2 tab-pane fade show active" id="about-user" role="tabpanel" aria-labelledby="about-user-tab">
                                <>
                                    {user?.contents?.map((post:PostProp) => (
                                        <Link to={`/posts/${post.content_id}`} style={LinklinkStyle} >
                                            <Post
                                                content_id={post.content_id} 
                                                creator_id={post.creator_id} 
                                                title={post.title} 
                                                body={post.body} 
                                                publication_date={post.publication_date} 
                                            />
                                        </Link>
                                    ))}
                                </>
                                </div>
                                <div className="mt-2 mb-2 tab-pane fade show" id="user-followers" role="tabpanel" aria-labelledby="user-followers-tab">
        
                                </div>
                                <div className="mt-2 mb-2 tab-pane fade show" id="user-following" role="tabpanel" aria-labelledby="user-following-tab">
        
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="/images/user1.png" style={{
                                                width: '120px',     
                                                height: '120px',   
                                                borderRadius: "50%"
                                                }}
                                        />
                                        </div>
                                        <div className="col-8">
                                            <h3>{user?.firstname} {user?.lastname}</h3>
                                            
                                            <button className="btn btn-secondary">Following</button>
                                            <p>
                                                <span>0 Followers | 0 Following</span>

                                            </p>
                                            {/* <p>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-twitter" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-medium" viewBox="0 0 16 16">
                                                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                                                    </svg>
                                                </span>
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    About
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati optio tempora, aliquam sunt perspiciatis consequuntur aspernatur corrupti quasi itaque ut voluptates odio error enim, autem aut. Quaerat, at odit.</p>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    Interests
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati optio tempora, aliquam sunt perspiciatis consequuntur aspernatur corrupti quasi itaque ut voluptates odio error enim, autem aut. Quaerat, at odit.</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

