import React, { useEffect, useState } from "react"
import { Post } from "../../Types/Types"
import { BorderLessCard, ImageStyle, LinkStyle, PostDetailsImageStyle, RoundButton } from "../../Styles/Styles"
import { useParams } from "react-router-dom";
import { GetPost } from "../../Services/postService";
import { ResponsePage } from "../../components/Utils/ResponsePage";
import { Link } from "react-router-dom";


export const PostEdit:React.FC = () => {
    const { post_id = "" } = useParams<{ post_id?: string }>();
    const [post, setPost] = useState<Post>()
    const [error, setError] = useState("");

    useEffect(() => {
        if (post_id === undefined){
            console.log("Post ID is undefined")
            setError("Post ID is undefined")
        }else{
            const fetchPost = async () => {
                const postResponse = await GetPost(post_id)
                if (postResponse.error){
                    setError(postResponse.error)
                }else{
                    setPost(postResponse.post)
                    setError("");
                }
            }
            fetchPost()
        }

    }, [post_id]);
    return (
        <>
        {
            error ? (
                <div>
                     <ResponsePage message="Post not found" statusCode={"404"} />
                </div>
            ):(
                <div>
                    <div className='container'>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <div className="card p-2" style={BorderLessCard}>
                                    <h4 className="display-3 fw-bold">
                                        {post?.title}
                                    </h4>
                                    <h5 className='fw-light'>{post?.subtitle}</h5>
                                    <Link to={`/users/${post?.author_id}`} style={LinkStyle} className='text-dark'>
                                        <div className='mb-3 fw-lighter'>
                                            <span className='mr-3'>
                                                <img 
                                                    src={post?.author?.profile_image} 
                                                    alt="" style={ImageStyle} 
                                                />
                                            </span>
                                            <span>
                                                {post?.author?.firstname} {post?.author?.lastname} {"     .    "} 
                                                <Link to={`/users/${post?.author_id}`} style={LinkStyle} className='text-dark'>
                                                    <span className="btn btn-info" style={RoundButton}>
                                                        Follow 
                                                    </span>
                                                </Link>
                                            </span>
                                            <br />
                                            <span>
                                                {/* Published {post?.publish_date}   */}
                                            </span>
                                           
                                            <br />
                                            
                                        </div>
                                    </Link>
                                    {/* {post && post.article_id && <PostFooter post_id={post.article_id} />} */}

                                    <img src={"/images/article.jpg"}  className="img-fluid mb-2" alt=""/>
                                    <p className='fw-lighter'>{post?.body}</p>
                                </div>
                               
                                <div className='text-center mb-2'>
                                    <p>. . . </p>
                                    {post?.tags?.map((tag:String)=>(
                                        <button className="btn btn-info m-1" style={RoundButton}>{tag}</button>
                                    ))}
                                </div>
                            
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                        </div>
                    </div>

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
                                                            <Link
                                                                to={`/users/${post?.author_id}`}
                                                                style={LinkStyle}
                                                                className="text-dark"
                                                                key={post?.author?.user_id}
                                                            >
                                                                <img src={post?.author?.profile_image}   alt="" style={PostDetailsImageStyle} 
                                                                />
                                                                <h3 className='fw-lighter fw-bold'>
                                                                    {post?.author?.firstname} {post?.author?.lastname}
                                                                </h3>
                                                            </Link>
                                                                <div className="row align-items-center">
                                                                    <div className="col float-left">
                                                                        <Link
                                                                            to={`/users/${post?.author_id}`}
                                                                            style={LinkStyle}
                                                                            className="text-dark"
                                                                            key={post?.author?.user_id}
                                                                        >
                                                                            <span>
                                                                                3.2k Follower 
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                                                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                                                                </svg>
                                                                            </span>
                                                                            <span className='m-1'>
                                                                                Editor for Golang Engineering
                                                                            </span>
                                                                        </Link>
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
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <Link
                                                        to={`/users/${post?.author_id}`}
                                                        style={LinkStyle}
                                                        className="text-dark"
                                                        key={post?.author?.user_id}
                                                    >
                                                      <p className='fw-lighter'>{post?.author?.about}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <hr />
                                            
                                           
                                        </div>
                                    </div>                        
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}