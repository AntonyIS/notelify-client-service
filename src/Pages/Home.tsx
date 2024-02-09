import { FC, useEffect, useState } from "react";
import { Post } from "../Types/Types";
import { FetchPosts } from "../Services/apiService";
import { DraftPost } from "../components/DraftPost";
import { PostListRecommendations } from "../components/PostListRecommendations";
import { ResponsePage } from "../components/ResponsePage";
import { PostList } from "../components/Posts/PostList";

export const Home:FC = () => {
    const [posts,setPosts] = useState<Post[]>([])
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {

        try {
            const fetchPosts = async () => {
                const postsResponse = await FetchPosts()
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
                                <DraftPost />
                            ):(
                                <></>
                            )
                        }
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <PostList posts={posts} />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <PostListRecommendations  posts={posts}/>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    </>

}