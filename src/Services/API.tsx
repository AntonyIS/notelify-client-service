import { ArticleEntity, UserEntity } from "../internal/core/domain"


let ARTICLES_URL = '127.0.0.1:8001/v1/articles'
let USERS_URL = '/v1/users'

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