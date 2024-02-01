import { FC } from "react";
import { Post, Posts } from "../Types/Types";
import { Link } from "react-router-dom";
import { BorderLessCard, ImageStyle, LinkStyle } from "../Styles/Styles";

export const PostListRecommendations:FC<Posts> = ({posts}) => {
    return (
        <>
            <div className="mt-2">
                {Array.isArray(posts) && posts.map((post: Post) => (
                    <Link to = {`/posts/${post.article_id}`} style={LinkStyle} key={post.article_id} className="text-dark">
                        <div className="card mb-2" style={BorderLessCard}>
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <Link to={`/users/${post.author_id}`} style={LinkStyle} key={post.article_id} className="text-dark">
                                            <img 
                                                src="https://media.licdn.com/dms/image/D4D03AQGU0BGeCfHasQ/profile-displayphoto-shrink_200_200/0/1693855758295?e=1710374400&v=beta&t=PAreRp1IorvWM8bSjIx7_DSzQdX0AhWWXp75lAYxepc" 
                                                style={ImageStyle} 
                                                alt={post.author?.profile_image}
                                            />
                                            <span className="text-secondary pr-3">
                                                {post.author?.firstname} {post.author?.lastname} 
                                            </span>
                                        </Link>
                                        <>
                                            <h5 className="fw-light">
                                                {post.title} {" "}
                                                <p style={{"fontSize": "10px"}}>
                                                    {/* {post.publish_date} */}
                                                    {/* {articleItem.body?.slice(0, 100)}... */}
                                                </p> {" "}
                                            </h5>
                                            <p className="fw-lighter">
                                                {post.body?.slice(0, 200)}...
                                            </p>
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}