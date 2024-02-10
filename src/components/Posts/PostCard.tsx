import { FC } from "react";
import { BorderLessCard, ImageStyle, LinkStyle } from "../../Styles/Styles";
import { Link } from "react-router-dom";
import { PostItem } from "../../Types/Types";
import { PostFooter } from "./PostFooter";


export const PostCard:FC<PostItem> = ({post}) => {
    return (
        <>
            <div className="card" style={BorderLessCard} key={post.article_id}>
                <div className="card-body p-1 text-bg-light">
                    <img src="/images/article.jpg" className="card-img-top" alt="..." />
                    <Link
                    to={`/users/${post.author_id}`}
                    style={LinkStyle}
                    className="text-dark"
                    key={post?.author?.user_id}
                    >
                        <img 
                            src="https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0" 
                            style={ImageStyle} alt="" 
                        />
                        <span className="text-secondary">
                            {post?.author?.firstname} {post?.author?.lastname}
                        </span>
                    </Link>
                    
                  
                    <div>
                        <h5 className="fw-light fw-bold">
                            {post?.title?.slice(0, 30)} {"..."}
                        </h5>
                        <p className="fw-lighter">
                            {post?.body?.slice(0, 200)}...
                        </p>
                    </div>
                    {post && post.article_id && <PostFooter post_id={post.article_id} />}

                    <hr className="my-4" />
                </div>
            </div>
        </>
    )
}