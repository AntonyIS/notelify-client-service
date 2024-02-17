import { FC, useEffect, useState } from "react";
import { Post } from "../../Types/Types";
import { PostList } from "../../components/Post/PostList";
import { PostListRec } from "../../components/Post/PostListRec";
import { ResponsePage } from "../../components/Utils/ResponsePage";
import { BorderLessCard, LinkStyle, RoundButton } from "../../Styles/Styles";
import { Link } from "react-router-dom";
import { GetPosts } from "../../Services/postService";


export const Home:FC = () => {
    const [posts,setPosts] = useState<Post[]>([])
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        try {
            const fetchPosts = async () => {
                const postsResponse = await GetPosts()
                if (postsResponse.error){
                    console.log(postsResponse.error)
                    setError(postsResponse.error)
                }else{
                    setPosts(postsResponse.posts || [])
                    setIsLoggedIn(true)
                    setError("")
                } 
            }   
            fetchPosts()
        }catch(error){
            console.log(error)
            setError(`Error fetching posts : ${error}`)
        }
    }, [])
    
    return <>
        <div className="container fw-light">
            {
                error ? (
                    <div>
                        <ResponsePage message={error}  statusCode={"500"}/>
                    </div>
                ): (
                    <>
                        {
                            isLoggedIn ? (
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
                            ):(
                                <></>
                            )
                        }
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <PostList posts={posts} />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <PostListRec  posts={posts}/>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    </>
}