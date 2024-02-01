import { ARTICLES_URL, USERS_URL } from "../Config/Config";
import { Post, User} from "../Types/Types";

export const CreateNewPost = async (post:Post): Promise<string> => {
    try{
        const response = await fetch(`${ARTICLES_URL}/`, {
            method: "POST",
            headers: {"Content-Type": "appilication/json"},
            body: JSON.stringify(post)
        })

        if (!response.ok){
            console.log("Network response was not ok")
            throw new Error('Network response was not ok');
        }

        const payload:Post = await response.json()
        const post_id:string = payload.article_id 
        return post_id

    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

export const FetchPost = async (articleID:string): Promise<Post>=>{
    try {
        const response = await fetch(`${ARTICLES_URL}/${articleID}`)
        if (!response.ok){
            console.log("Error: unable to fetch articles")
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const post:Post = await response.json()
        return post
    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

export const FetchPosts = async (): Promise<{ posts?: Post[], error?: string }> => {
    try {
        const response = await fetch(`${ARTICLES_URL}/`)
        if (!response.ok){
            console.log("Error: unable to fetch articles")
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const res = await response.json()
        const articles:Post[] = await Promise.all(
            res.map(async (article:Post)=>{
                return {...article}
            })
        )
        return { posts: articles, error: undefined };
    }catch(error) {
        console.log(error)
        return { posts: undefined, error: "Internal Server Error!" };
    }
}

export const FetchUserPosts = async (author_id:string): Promise<Post[]>=>{
    try {
        const response = await fetch(`${ARTICLES_URL}/author/${author_id}`)
        if (!response.ok){
            console.log("Error: unable to fetch articles")
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const post:Post[] = await response.json()
        return post
    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

export const FetchUsers = async (): Promise <User[]> => {
    try {
        const response = await fetch(`${USERS_URL}/`)
        if (!response.ok){
            console.log("Error: unable to fetch users")
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const res = await response.json()
        const users = await Promise.all(
            res.map(async (article:Post)=>{
                return {...article}
            })
        )

        return users
    }catch(error) {
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

export const FetchUser = async (userID:string): Promise<User>=>{
    try {
        const response = await fetch(`${USERS_URL}/${userID}`)
        if (!response.ok){
            console.log("Error: unable to fetch user")
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const user:User = await response.json()
        return user
    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

