import {FC} from "react";
import { Link } from "react-router-dom";
import { PostProp, PostPropType } from "../../types/Types";
import { Post } from "./Post";
import { LoadingSpinner } from "../Utils/loadingSpinner";




const linkStyle = {
    textDecoration: 'none',
};

const cardborder = {
    border: 'none',
    borderBottom: '1px solid #dee2e6'
};

export  const PostList:FC<PostPropType> = ({posts, loading}) => {
    return (
        <div className="">
            <div className="row">
                <div className="col-12">
                {loading ? (
                    <LoadingSpinner /> 
                    ) : (
                    <>
                        {posts?.map((post:PostProp) => (
                        <Link to={`/posts/${post.content_id}`} style={linkStyle} >
                            <Post
                                content_id={post.content_id} 
                                creator_id={post.creator_id} 
                                title={post.title} 
                                body={post.body} 
                                publication_date={post.publication_date} 
                            />
                        </Link>
                    ))}
                    </>
                )}
                </div>
            </div>
        </div>
     )
}