import { FC } from "react";
import { Post, Posts } from "../Types/Types";
import { Link } from "react-router-dom";
import { BorderLessCard, ImageStyle, LinkStyle } from "../Styles/Styles";

export const PostList:FC<Posts> = ({posts}) => {
    return (
        <>
           <div className="mt-2">
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post: Post) => (
                        <Link to={`/posts/${post.article_id}`} style={LinkStyle} key={post.article_id} className="text-dark">
                            <div className="card mb-2" style={BorderLessCard}>
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                            <Link to={`/users/${post.author_id}`} style={LinkStyle} key={post.article_id} className="text-dark">
                                                <img 
                                                    src="https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0" 
                                                    style={ImageStyle} 
                                                    alt={post.author?.firstname}
                                                />
                                                <span className="text-secondary pr-3">
                                                    {post.author?.firstname} {post.author?.lastname} 
                                                </span>
                                            </Link>
                                            <>
                                                <h5 className="fw-light">
                                                    {post.title} {" "}
                                                    <p style={{"fontSize": "10px"}}>
                                                    </p> {" "}
                                                </h5>
                                                <p className="fw-lighter">
                                                    {post.body?.slice(0, 200)}...
                                                </p>
                                            </>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                            <img src="/images/article.jpg" className="img-fluid float-left" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
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
        </>
    )
}