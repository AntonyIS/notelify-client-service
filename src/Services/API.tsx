import { ArticleEntity, UserEntity } from "../Entities/Entities";

let articlesURL:string = "/v1/articles/"
let authorArticlesURL:string = "/v1/articles/author/"
let usersURL:string = "/v1/users/"


export const FetchUsers =():Promise<UserEntity[]> => {
    return fetch(usersURL)
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
    return fetch(`${usersURL}${id}`)
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
    return fetch(articlesURL)
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
   
    return fetch(`${authorArticlesURL}${user_id}`)
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
    return fetch(`${articlesURL}${id}`)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error('Error fetching articles:',error)
        return []
    })
}