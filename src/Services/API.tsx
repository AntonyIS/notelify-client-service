import { ArticleEntity, UserEntity } from "../Entities/Entities";

let ARTICLES_URL:string = "/v1/articles/"
let USERS_URL:string = "/v1/users/"
let USERS_ARTICLES_URL:string = "/v1/articles/author/"

console.log(process.env)
// Load environment-specific variables
if (process.env.NODE_ENV === 'development') {
    USERS_URL = "http://127.0.0.1:8000/v1/users/"
    ARTICLES_URL = "http://127.0.0.1:8001/v1/articles/"
    USERS_ARTICLES_URL = "http://127.0.0.1:8001/v1/articles/author/"
}


export const FetchUsers =():Promise<UserEntity[]> => {
    return fetch(USERS_URL)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error('Error fetching users:', error)
        return []
    })
}

export const FetchUser = (id?:string):Promise<UserEntity> => {
    return fetch(`${USERS_URL}${id}`)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error('Error fetching user:',error)
        return []
    })
}


export const FetchContents =():Promise<ArticleEntity[]> => {
    return fetch(ARTICLES_URL)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error('Error fetching articles:',error)
        return []
    })
}

export const FetchUserArticles =(user_id?:string):Promise<ArticleEntity[]> => {
   
    return fetch(`${USERS_ARTICLES_URL}${user_id}`)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error('Error fetching articles:',error)
        return []
    })
}

export const FetchContent =(id?:string):Promise<ArticleEntity> => {
    return fetch(`${ARTICLES_URL}${id}`)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error('Error fetching articles:',error)
        return []
    })
}