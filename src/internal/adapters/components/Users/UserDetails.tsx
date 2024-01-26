import React ,{FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { GetAuthorArticles, GetUser } from '../../http/api';
import { ArticleEntity, UserEntity} from '../../../core/domain';
import { ResponsePage } from '../ResponsePages/ResponsePage';
import { ArticleList } from '../Articles/ArticleList';



const imageStyle = {
    width: '100px',     
    height: '100px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}


const roundButton = {
    borderRadius: "60px"
}

export  const UserDetails:FC = () => {
    // Get user ID from URL params
    const { user_id } = useParams<string>();
    // Get user using user_id 
    const [user, setUser] = useState<UserEntity>()
    const [articles, setArticles] = useState<ArticleEntity[]>([])
    const [error, setError] = useState("");
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user_id === undefined) {
                    setError("Undefined user");
                } else {
                    const userData = await GetUser(user_id);
                    const authorArticles = await GetAuthorArticles(userData.user_id);
                    setUser(userData);
                    setArticles(authorArticles);
                }
            } catch (error) {
                setError(`An error occurred: ${error}`);
            }
        };
    
        fetchData();
    }, [user_id]);

    return (
        <>
        {
            error ? (
                <div>
                     <ResponsePage message="User not found" statusCode={"404"} />
                </div>
            ):(
                <div>
                    <div className='container'>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <div className="card" style={{border: "none"}}>
                                    <div className="card-body p-0 mb-3">
                                        <h1 className="fw-light display-6">
                                            {user?.firstname} {user?.lastname}
                                        </h1>
                                        <h4 className='fw-light'>
                                            {user?.about}
                                        </h4>
                                        <p className='fw-light'>Followers {user?.followers} Following {user?.following}</p>
                                        <button className="btn btn-info fw-light" style={roundButton}>Follow</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="card mb-2" style={{border: "none"}}>
                                    <div className="card-body p-0">
                                        <ul className="nav nav-underline">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#user-home-tab">Home</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link" href="#user-about-tab">About</a>
                                            </li> */}
                                        </ul>
                                        <div id="user-home-tab">
                                            <ArticleList articles={articles} />
                                        </div>
                                        <div id="user-about-tab">
                                            {/* <ArticleList articles={articles} /> */}
                                        </div>
                                    </div>
                                </div>
                                
                               
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="card mb-2  p-0" style={{border: "none"}}>
                                    <div className="card-body fw-light">
                                        <img src={user?.profile_image} style={imageStyle} alt="" />
                                        <h6 className="">
                                            {user?.firstname} {user?.lastname}
                                        </h6>
                                        <p>{user?.followers} Followers</p>
                                        <p>
                                            {user?.about}
                                        </p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                      
                     </div>
                </div>
            )
        }
        </>
    )
}

