import { FC } from "react";
import { BorderLessCard, ImageStyle, LinkStyle } from "../../Styles/Styles";
import { Link } from "react-router-dom";
import { PostItem } from "../../Types/Types";
import { PostFooter } from "./PostFooter";


export const PostCard:FC<PostItem> = ({post}) => {
    return (
        <>
            <div className="card mt-1" style={BorderLessCard} key={post.article_id}>
                <div className="card-body p-1 text-bg-light">
                    <Link 
                        to={`/posts/${post.article_id}`} 
                        style={LinkStyle} 
                        key={post.article_id} 
                        className="text-dark"
                    >
                        <img src="/images/article.jpg" className="card-img-top" alt="..." />
                    </Link>
                    <Link
                        to={`/users/${post.author_id}`}
                        style={LinkStyle}
                        className="text-dark mt-1"
                        key={post?.author?.user_id}
                    >
                        <div className="mt-2">
                            <img 
                                src={post.author?.profile_image} 
                                style={ImageStyle} alt="" 
                            />
                            <span className="text-secondary">
                                {post?.author?.firstname} {post?.author?.lastname}
                            </span>
                        </div>
                    </Link>
                    
                  
                    <div>
                        <Link 
                            to={`/posts/${post.article_id}`} 
                            style={LinkStyle} 
                            key={post.article_id} 
                            className="text-dark"
                        >
                            <h5 className="fw-light fw-bold">
                                {post?.title?.slice(0, 30)} {"..."}
                            </h5>
                            <p className="fw-lighter">
                                {post?.body?.slice(0, 200)}...
                            </p>
                        </Link>
                    </div>
                    {post && post.article_id && <PostFooter post={post} />}

                    <hr className="my-4" />
                </div>
            </div>
        </>
    )
}