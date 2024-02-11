import React ,{FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ResponsePage } from '../components/ResponsePage';
import { FetchUser, FetchUserPosts } from '../Services/apiService';
import { Post, User } from '../Types/Types';
import { RoundButton } from '../Styles/Styles';
import { PostList } from '../components/Posts/PostList';



const imageStyle = {
    width: '100px',     
    height: '100px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}


export  const UserProfile:FC = () => {
    const { user_id } = useParams<string>();
    const [user, setUser] = useState<User>()
    const [posts, setPosts] = useState<Post[]>([])
    const [error, setError] = useState("");
   
    useEffect(() => {
        if (user_id === undefined){
            console.log("Post ID is undefined")
            setError("Post ID is undefined")
        }else{
            const fetchPost = async () => {
                const postResponse = await FetchUser(user_id)
                if (postResponse.error){
                    console.log(postResponse.error)
                }else{
                    setUser(postResponse.user)
                    setError("")
                }
            }
            fetchPost()

            const fetchPosts = async () => {
                const postsResponse = await FetchUserPosts(user_id)
                if (postsResponse.error){
                    console.log(postsResponse.error)
                    setError(postsResponse.error)
                }else{
                    setPosts(postsResponse.posts || [])
                    setError("")
                } 
            }   
            fetchPosts()
        }

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
                                        <h1 className="display-6">
                                            {user?.firstname} {user?.lastname}
                                        </h1>
                                        <h4>
                                            {user?.about}
                                        </h4>
                                        {/* <p>
                                            Followers {user?.followers} Following {user?.following}
                                        </p> */}
                                        <button className="btn btn-info" style={RoundButton}>Follow</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="card mb-2" style={{border: "none"}}>
                                    <div className="card-body p-0">
                                        <ul className="nav nav-underline">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#user-home-tab">Home</a>
                                            </li>
                                        </ul>
                                        <div id="user-home-tab">
                                            <PostList posts={posts} />
                                        </div>
                                    </div>
                                </div>
                                
                               
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="card mb-2  p-0" style={{border: "none"}}>
                                    <div className="card-body">
                                        <img src={user?.profile_image} style={imageStyle} alt="" />
                                        <h6 className="">
                                            {user?.firstname} {user?.lastname}
                                        </h6>
                                        {/* <p>
                                            {user?.followers} Followers
                                        </p> */}
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

