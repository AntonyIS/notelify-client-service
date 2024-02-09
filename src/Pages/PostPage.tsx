import React ,{FC, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { FetchPost,FetchUserPosts } from '../Services/apiService';
import { Post } from '../Types/Types';
import { BorderLessCard, ImageStyle, LinkStyle, PostDetailsImageStyle, RoundButton } from '../Styles/Styles';
import { ResponsePage } from '../components/ResponsePage';
import { PostCard } from '../components/Posts/PostCard';




export  const PostPage:FC = () => {
    const { post_id = "" } = useParams<{ post_id?: string }>();
    const [post, setPost] = useState<Post>()
    const [posts, setPosts] = useState<Post[]>([])
    const [error, setError] = useState("");
   
    useEffect(() => {
        if (post_id === undefined){
            console.log("Post ID is undefined")
            setError("Post ID is undefined")
        }else{
            const fetchPost = async () => {
                const postResponse = await FetchPost(post_id)
                if (postResponse.error){
                    console.log(postResponse.error)
                    setError(postResponse.error)
                }else{
                    setPost(postResponse.post)

                    if (postResponse.post?.author_id !== undefined) {
                        const postsResponse = await FetchUserPosts(postResponse.post?.author_id);
                        if (postsResponse.error) {
                            console.log(postsResponse.error);
                            setError(postsResponse.error);
                        } else {
                            console.log(postsResponse.posts)
                            setPosts(postsResponse.posts || []);
                            setError("");
                        }
                    } else {
                        console.error("user_id is undefined");
                    }
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
                                                    src="https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0" 
                                                    alt="" style={ImageStyle} 
                                                />
                                            </span>
                                            <span>
                                                {post?.author.firstname} {post?.author.lastname} {"     .    "} 
                                                <Link to={`/users/${post?.author_id}`} style={LinkStyle} className='text-dark'>
                                                    <span className="text text-info">
                                                        Follow 
                                                    </span>
                                                </Link>
                                            </span>
                                            <br />
                                            <span>
                                                {/* Published {post?.publish_date}   */}
                                            </span>
                                            <hr />
                                            <div className="row align-items-center">
                                                <div className="col float-left">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hand-thumbs-up mr-3" viewBox="0 0 16 16">
                                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                                        </svg> 320
                                                    </span>

                                                   <span className="m-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                                                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                                        </svg>23
                                                   </span>
                                                </div>
                                                
                                                <div className="col-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                                    </svg>
                                                </div>
                                                <div className="col-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                                                    </svg>
                                                </div>
                                                <div className="col-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                                    </svg>
                                                </div>
                                            </div>

                                            <hr />
                                            <br />
                                            
                                        </div>
                                    </Link>
                                    <img src={"/images/article.jpg"}  className="img-fluid mb-2" alt=""/>
                                    <p className='fw-lighter'>{post?.body}</p>
                                </div>
                               
                                <div className='text-center mb-2'>
                                    <p>. . . </p>
                                    {post?.tags.map((tag:String)=>(
                                        <button className="btn btn-info mr-3" style={RoundButton}>{tag}</button>
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
                                                            <img 
                                                                src="https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0" 
                                                                alt="" style={PostDetailsImageStyle} 
                                                            />
                                                            <h3 className='fw-lighter fw-bold'>
                                                                {post?.author.firstname} {post?.author.lastname}
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
                                                    <p className='fw-lighter'>{post?.author.about}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            
                                            <div className="row">
                                                {Array.isArray(posts) && posts.length > 0 ? (
                                                    posts.map((post: Post) => (
                                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                            <PostCard post={post} />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="card" style={BorderLessCard}>
                                                        <div className="card-body p-0">
                                                            <h1 className="display-6">
                                                                No posts available
                                                            </h1>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>                        
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                            </div>
                        </div>
                    </div>
                   
                    <div className='mt-2 pt-2'>
                        <div className='container'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <h3 className='m-2'>
                                    Recommendation from Medium
                                </h3>
                                    <div className="row">
                                        {Array.isArray(posts) && posts.length > 0 ? (
                                            posts.map((post: Post) => (
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <PostCard post={post} />
                                                </div>
                                            ))
                                        ) : (
                                            <div className="card" style={BorderLessCard}>
                                                <div className="card-body p-0">
                                                    <h1 className="display-6">
                                                        No posts available
                                                    </h1>
                                                </div>
                                            </div>
                                        )}
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
