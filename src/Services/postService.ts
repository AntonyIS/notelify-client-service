import { POSTS_URL } from "../Config/Config";
import { Post} from "../Types/Types";

export const CreateNewPost = async (post:Post): Promise<{post?: Post, error?:string}> => {
    // Creates a new post after a successful POST request else return an error
    try{
        const response = await fetch(`${POSTS_URL}`, {
            method: "POST",
            headers: {"Content-Type": "appilication/json"},
            body: JSON.stringify(post)
        })
    
        if (!response.ok){
            console.log(response.statusText)
            return {
                post:undefined, 
                error: response.statusText
            }
        }

        const payload:Post = await response.json()
        return {
            post:payload , 
            error: undefined
        }

    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

export const GetPost = async (postID:string): Promise<{ post?: Post,error?: string }>=>{
    // Returns a post with postID after a successful GET request else returns an error
    try {
        const response = await fetch(`${POSTS_URL}${postID}`)
        if (!response.ok){
            console.log("Error: unable to fetch articles")
            return { 
                post: undefined, 
                error: "Error: unable to fetch posts" 
            };
        }
        const post:Post = await response.json()
        return { 
            post: post, 
            error: undefined 
        };
    }catch(error){
        console.log(error)
        return { 
            post: undefined, 
            error: "Internal Server Error!" 
        };
    }
}

export const GetPosts = async (): Promise<{ posts?: Post[], error?: string }> => {
    // Returns a posts after a successful GET request else returns an error
    try {
        const response = await fetch(`${POSTS_URL}`)
    
        if (!response.ok){
            console.log("Error: unable to fetch posts");
            return { posts: undefined, error: "Error: unable to fetch posts" };
        }
        const res = await response.json()
        
        const posts:Post[] = await Promise.all(
            res.map(async (post:Post)=>{
                return {...post}
            })
        )

        return { posts: posts, error: undefined };
    }catch(error) {
        console.log(error)
        return { posts: undefined, error: "Internal Server Error!" };
    }
}

export const UpdatePost = async (post:Post): Promise<{post_id?: string, error?:string}> => {
    // Returns a updated post after a successful PUT request else returns an error
    try{
        const response = await fetch(`${POSTS_URL}${post.article_id}`, {
            method: "PUT",
            headers: {"Content-Type": "appilication/json"},
            body: JSON.stringify(post)
        })

        if (!response.ok){
            console.log("Network response was not ok")
            return {post_id:"", error: "Network response was not ok"}
        }

        const payload:Post = await response.json()
        return {post_id:payload.article_id , error: undefined}

    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

export const UserPosts = async (author_id:string): Promise<{ posts?: Post[], error?: string }>=>{
    // Returns posts with authorID after a successful GET request else returns an error
    try {
        const response = await fetch(`${POSTS_URL}author/${author_id}`)
        if (!response.ok){
            console.log("Error: unable to fetch posts");
            return { posts: undefined, error: "Error: unable to fetch posts" };
        }
        const posts:Post[] = await response.json()
        return { posts: posts, error: undefined };
    }catch(error){
        console.log(error)
        return { posts: undefined, error: "Internal Server Error!" };
    }
}

export const DeletePost = async (postID:string): Promise<{error?: string }>=>{
    // Deletes a post with postID after a successful DELETE request else returns an error
    try {
        const response = await fetch(`${POSTS_URL}${postID}`, {
            method: 'DELETE',
          });
        if (!response.ok){
            console.log("Error: unable to delete articles")
            return { error: "Error: unable to delete posts" };
        }
        return {error: undefined };
    }catch(error){
        console.log(error)
        return {error: "Internal Server Error!" };
    }
}

export const DeletePosts = async (): Promise<{error?: string }>=>{
    // Deletes a posts after a successful DELETE request else returns an error
    try {
        const response = await fetch(`${POSTS_URL}`, {
            method: 'DELETE',
          });
        if (!response.ok){
            console.log("Error: unable to delete articles")
            return { error: "Error: unable to delete posts" };
        }
        return {error: undefined };
    }catch(error){
        console.log(error)
        return {error: "Internal Server Error!" };
    }
}


