import { FC, useState } from "react";
import { Post } from "../../Types/Types";
import { Link } from "react-router-dom";
import { BorderLessCard, ImageStyle, LinkStyle, RoundButton } from "../../Styles/Styles";
import { UpdatePost } from "../../Services/postService";
import { PostFooter } from "./PostFooter";
// import { PostFooter } from "./PostFooter";
interface postsProps {
    posts : Post [],
    isLoggedIn : Boolean
}
export const PostList:FC<postsProps> = ({posts, isLoggedIn}) => {
    const [post, setPost] = useState<Post>()

    const handleLike = async (post: Post) => {
        if (post !== undefined){
            const updatedPost = { ...post, likes: (post.likes || 0) + 1 };
            setPost(updatedPost);
            UpdatePost(updatedPost)
        }
    };

    const handleDisLike = async (post: Post) => {
        if (post !== undefined){
            const updatedPost = { ...post, dislikes: (post.dislikes || 0) + 1 };
            setPost(updatedPost);
            UpdatePost(updatedPost)
        }
    };
    return (
        <>
           <div className="mt-2">
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post: Post) => (
                        <div className="card mb-2" style={BorderLessCard}>
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                        <Link to={`/users/${post.author_id}`} style={LinkStyle} key={post.article_id} className="text-dark">
                                            <img src={post?.author?.profile_image}                                                style={ImageStyle} 
                                                alt={post.author?.firstname}
                                            />
                                            <span className="text-secondary pr-3">
                                                {post.author?.firstname} {post.author?.lastname} 
                                            </span>
                                        </Link>
                                        <>
                                        <Link to={`/posts/${post.article_id}`} style={LinkStyle} key={post.article_id} className="text-dark">
                                            <h5 className="fw-light fw-bold">
                                                {post.title} {" "}
                                            </h5>
                                            <p className="fw-lighter">
                                                {post.body?.slice(0, 200)}...
                                            </p>
                                        </Link>
                                        
                                        {post && post.article_id && <PostFooter post={post} />}

                                        <hr className="my-4" />
                                        </>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <img src="/images/article.jpg" className="img-fluid float-left" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        <div className="card text-bg-light mb-3" style={BorderLessCard}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <h6 className=''>Draft an Article ?</h6>
                                        <Link to={`/posts/draft`} style={LinkStyle}>
                                            <button className="btn btn-info" style={RoundButton}>Draft</button>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={BorderLessCard}>
                        <div className="card-body p-0">
                                <h1 className="display-6">
                                    No posts available
                                </h1>
                            </div>
                        </div>
                    </>
                    
                )}
            </div>
        </>
    )
}