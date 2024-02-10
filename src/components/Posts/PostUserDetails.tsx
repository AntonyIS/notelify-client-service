import React ,{FC} from 'react';
import { Link, } from 'react-router-dom';
import { PostItem } from '../../Types/Types';
import { BorderLessCard,LinkStyle, PostDetailsImageStyle, RoundButton } from '../../Styles/Styles';

export const PostUserDetails:FC<PostItem> = ({post}) => {
    return <>
        <div className='text-bg-light'>
            <div className='container'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div style={BorderLessCard}>
                            <div className="">
                                <div className="user-profile p-2 mb-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card text-bg-light" style={BorderLessCard}>
                                                <img 
                                                    src="https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0" 
                                                    alt="" style={PostDetailsImageStyle} 
                                                />
                                                <h3 className='fw-lighter fw-bold'>
                                                    {post?.author?.firstname} {post?.author?.lastname}
                                                </h3>
                                                    <div className="row align-items-center">
                                                    <div className="col float-left">
                                                        <span>
                                                            3.2k Follower 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                                                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                                            </svg>
                                                        </span>
                                                        <span className='m-1'>
                                                            Editor for Golang Engineering
                                                        </span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button className="btn btn-info mr-3" style={RoundButton}>Follow</button>

                                                    </div>
                                                    <div className="col-auto">
                                                    <button className="btn btn-info" style={RoundButton}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-right-dots" viewBox="0 0 16 16">
                                                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                                        </svg>
                                                    </button>
                                                    </div>
                                                
                                                </div>
                                                <Link
                                                    to={`/users/${post?.author_id}`}
                                                    style={LinkStyle}
                                                    className="text-dark"
                                                    key={post?.author?.user_id}
                                                >
                                                
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className='fw-lighter'>{post?.author?.about}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                </div>
            </div>
        </div>
    </>
}