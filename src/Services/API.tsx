import { ArticleEntity, UserEntity } from "../Entities/Entities";

let ARTICLES_URL = process.env.REACT_APP_ARTICLES_API_URL
let USERS_URL = process.env.REACT_APP_USERS_API_URL


export const FetchUsers =():Promise<UserEntity[]> => {
    return fetch(`${USERS_URL}/`)
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
    return fetch(`${USERS_URL}/${id}/`)
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
    return fetch(`${ARTICLES_URL}/`)
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
    return fetch(`${ARTICLES_URL}/author/${user_id}/`)
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
    return fetch(`${ARTICLES_URL}/${id}`)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error('Error fetching articles:',error)
        return []
    })
}