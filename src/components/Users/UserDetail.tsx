import {FC, useEffect, useState} from "react";
import { Link,useParams } from 'react-router-dom';


import { UserHead } from "./UserHead";
import { GetUser } from "../../internal/adapters/http/api";
import { UserEntity } from "../../internal/core/domain";


const linkStyle = {
    textDecoration: 'none',
    color:"#00000"
};
const headStringStlye = {
    fontSize:"10px"
}

const cardStyle = {
    border: 'none',
    borderBottom: '1px solid #dee2e6'
};

const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}


export  const UserDetail:FC = () => {
    // Get user ID from URL params
    const { user_id } = useParams<string>();
    // Get article using article_id 
    const [user, setUser] = useState<UserEntity>()
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user_id == undefined) {
                    setError("Undefined Article");
                } else {
                    const userData = await GetUser(user_id);
                    setUser(userData);
                }
            } catch (error) {
                setError(`An error occurred: ${error}`);
            }
        };
    
        fetchData();
    }, [user_id]);
 
    return (
        <div className="container mt-2">
            <div className="card fw-light text-dark" style={cardStyle}>
                <div className="card-body">
                    <div className="display-6 mt-0 pt-0 mb-3">
                        {user?.firstname} {user?.lastname}
                    </div>
                   <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
                           
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-light text-dark active" id="home-user-tab" data-bs-toggle="tab" data-bs-target="#home-user" type="button" role="tab" aria-controls="home-user" aria-selected="true">Home</button>
                                </li>
                                {/* <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-light text-dark" id="user-following-tab" data-bs-toggle="tab" data-bs-target="#user-following" type="button" role="tab" aria-controls="user-following" aria-selected="false">Following</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-light text-dark" id="user-followers-tab" data-bs-toggle="tab" data-bs-target="#user-followers" type="button" role="tab" aria-controls="user-followers" aria-selected="false">Followers</button>
                                </li> */}
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="mt-2 mb-2 tab-pane fade show active" id="home-user" role="tabpanel" aria-labelledby="home-user-tab">
                                    <>
                                    {user?.about}
                                    {/* {articles?.map((article:ArticleEntity) => (
                                        <Link to={`/posts/${user_id}/${article.article_id}`} style={linkStyle} className='text-dark' key={article.article_id}>
                                            <div className="col-12" >
                                                <div className="card mb-2" style={cardStyle}>
                                                    <div className="card-body p-0">
                                                    <h4>{article.title} <span style={headStringStlye}>{article.publish_date?.slice(0, 10)}</span> </h4>
                                                    <div>
                                                        <img src="/images/user1.png" style={imageStyle}/>
                                                        <span className="text-secondary pr-3">{article.author_info?.name} <span style={headStringStlye}>Following {article.author_info?.following} Followers {article.author_info?.followers}</span></span> 
                                                    </div>
                                                    {article.body?.slice(0, 400)}...
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </Link>
                                    ))} */}
                                    </>
                                </div>
                                <div className="mt-2 mb-2 tab-pane fade show" id="user-following" role="tabpanel" aria-labelledby="user-following-tab">
                                    <>
                                        {/* {users?.map((user:UserEntity) => (
                                            <Link to={`/users/${user.id}`} style={linkStyle} className='text-dark' key={user.id}>
                                                <div className="col-12" >
                                                    <div className="card mb-2" style={cardStyle}>
                                                        <div className="card-body p-3">
                                                        <UserHead id={user.id} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))} */}
                                    
                                    </>
                                </div>
                                <div className="mt-2 mb-2 tab-pane fade show" id="user-followers" role="tabpanel" aria-labelledby="user-followers-tab">
                                    <>
                                        {/* {users?.map((user:UserEntity) => (
                                            <Link to={`/users/${user.id}`} style={linkStyle} className='text-dark' key={user.id}>
                                                <div className="col-12" >
                                                    <div className="card mb-2" style={cardStyle}>
                                                        <div className="card-body p-3">
                                                        <UserHead id={user.id} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))} */}
                                    </>
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
                                            
                                            {/* <button className="btn btn-secondary">Following</button> */}
                                            <p>
                                                <span>0 Followers | 0 Following</span>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    About
                                    <p>{user?.about}</p>
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

