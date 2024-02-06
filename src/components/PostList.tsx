import { FC } from "react";
import { Post, Posts } from "../Types/Types";
import { Link } from "react-router-dom";
import { BorderLessCard, ImageStyle, LinkStyle, RoundButton } from "../Styles/Styles";

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
                                                <h5 className="fw-light fw-bold">
                                                    {post.title} {" "}
                                                </h5>
                                                <p className="fw-lighter">
                                                    {post.body?.slice(0, 200)}...
                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col float-left">
                                                        <button className="btn btn-secondary mr-3" style={RoundButton}>Go Programming</button>
                                                    </div>
                                                    <div className="col-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
                                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
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

                                                <hr className="my-4" />
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