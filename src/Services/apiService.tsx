import { ARTICLES_URL, USERS_URL } from "../Config/Config";
import { Post, User} from "../Types/Types";

export const CreateNewPost = async (post:Post): Promise<{post_id?: string, error?:string}> => {
    try{
        const response = await fetch(`${ARTICLES_URL}/`, {
            method: "POST",
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

export const FetchPost = async (articleID:string): Promise<{ post?: Post,error?: string }>=>{
    try {
        const response = await fetch(`${ARTICLES_URL}/${articleID}`)
        if (!response.ok){
            console.log("Error: unable to fetch articles")
            return { post: undefined, error: "Error: unable to fetch posts" };
        }
        const post:Post = await response.json()
        return { post: post, error: undefined };
    }catch(error){
        console.log(error)
        return { post: undefined, error: "Internal Server Error!" };
    }
}

export const FetchPosts = async (): Promise<{ posts?: Post[], error?: string }> => {
    try {
        const response = await fetch(`${ARTICLES_URL}/`)
        if (!response.ok){
            console.log("Error: unable to fetch posts");
            return { posts: undefined, error: "Error: unable to fetch posts" };
        }
        const res = await response.json()
        const posts:Post[] = await Promise.all(
            res.map(async (article:Post)=>{
                return {...article}
            })
        )
        return { posts: posts, error: undefined };
    }catch(error) {
        console.log(error)
        return { posts: undefined, error: "Internal Server Error!" };
    }
}

export const FetchUserPosts = async (author_id:string): Promise<{ posts?: Post[], error?: string }>=>{
    try {
        const response = await fetch(`${ARTICLES_URL}/author/${author_id}`)
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

export const FetchUsers = async (): Promise <{users?: User[], error?:string}> => {
    try {
        const response = await fetch(`${USERS_URL}/`)
        if (!response.ok){
            console.log("Error: unable to fetch users")
            return { users:undefined, error: "Error: unable to fetch users"}
        }
        const res = await response.json()
        const users = await Promise.all(
            res.map(async (article:Post)=>{
                return {...article}
            })
        )
        return { users:users, error: undefined}
    }catch(error) {
        console.log(error)
        return { users: undefined, error: "Internal Server Error!" };
    }
}

export const FetchUser = async (userID:string): Promise<{user?: User, error?:string}>=>{
    try {
        const response = await fetch(`${USERS_URL}/${userID}`)
        if (!response.ok){
            console.log("Error: unable to fetch user")
            return {user: undefined, error: "Error: unable to fetch user"}
        }
        const user:User = await response.json()
        return {user: user, error: undefined}
    }catch(error){
        console.log(error)
        return { user: undefined, error: "Internal Server Error!" };
    }
}

