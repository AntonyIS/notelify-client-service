import React ,{FC, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { FetchPost,FetchUserPosts } from '../Services/apiService';
import { Post } from '../Types/Types';
import { BorderLessCard, ImageStyle, LinkStyle, PostDetailsImageStyle, RoundButton } from '../Styles/Styles';
import { ResponsePage } from '../components/ResponsePage';


export  const PostDetails:FC = () => {
    const { post_id } = useParams<string>();
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
                                    <Link to={`/users/${post?.author_id}`} style={LinkStyle} className='text-dark'>
                                        <div className='mb-3 fw-lighter'>
                                            <span className='mr-3'>
                                                <img 
                                                    src="https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0" 
                                                    alt="" style={ImageStyle} 
                                                />
                                            </span>
                                            <span>
                                                {post?.author.firstname} {post?.author.lastname}
                                            </span>
                                            <br />
                                            <span>
                                                Published {post?.publish_date}  
                                            </span>
                                            
                                            <br />
                                            
                                        </div>
                                    </Link>
                                    
                                    <img src={"/images/article.jpg"}  className="img-fluid mb-2" alt=""/>

                                    <h6 className='display-6 fw-light'>{post?.subtitle}</h6>
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
                                                    <div className="col-3">
                                                        <div className="card text-bg-light" style={BorderLessCard}>
                                                            <img 
                                                                src="https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0" 
                                                                alt="" style={PostDetailsImageStyle} 
                                                            />
                                                            <Link
                                                                to={`/users/${post?.author_id}`}
                                                                style={LinkStyle}
                                                                className="text-dark"
                                                                key={post?.author?.user_id}
                                                            >
                                                                <h6 className='fw-lighter'>Written by {post?.author.firstname} {post?.author.lastname}</h6>
                                                                <h6 className='fw-lighter'>Email {post?.author.email}</h6>
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
                                                {posts.map((postItem: Post) => (
                                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3" key={postItem.article_id}>
                                                        <Link
                                                            to={`/posts/${postItem.article_id}`}
                                                            style={LinkStyle}
                                                            className="text-dark"
                                                            key={postItem.article_id}
                                                        >
                                                        <div className="card" style={BorderLessCard} key={postItem.article_id}>
                                                            <img src="/images/article.jpg" className="card-img-top" alt="..." />
                                                            <div className="card-body p-1">
                                                                <Link
                                                                to={`/users/${postItem.author_id}`}
                                                                style={LinkStyle}
                                                                className="text-dark"
                                                                key={postItem?.author?.user_id}
                                                                >
                                                                    <img 
                                                                        src="https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0" 
                                                                        style={ImageStyle} alt="" 
                                                                    />
                                                                    <span className="text-secondary">
                                                                        {post?.author.firstname} {post?.author.lastname}
                                                                    </span>
                                                                </Link>
                                                                
                                                                <h5 className="fw-light">
                                                                    {postItem.title?.slice(0, 30)}...
                                                                </h5>
                                                                <p className="fw-lighter">
                                                                    {postItem.body?.slice(0, 100)}...
                                                                </p>
                                                            </div>
                                                        </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
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

