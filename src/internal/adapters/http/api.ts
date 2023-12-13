import { ArticleEntity, UserEntity } from "../../core/domain"

let ARTICLES_URL = process.env.REACT_APP_ARTICLES_API_URL
let USERS_URL = process.env.REACT_APP_USERS_API_URL


// HTTP GET request for all articles
export const  GetArticles = async () : Promise <ArticleEntity[]> => {
    try {
        const URL = `${ARTICLES_URL}/v1/articles/`
        const response = await fetch(URL)

        if (!response.ok) {
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const articles = await response.json()
        
        const allArticles = await Promise.all(
            articles.map(async (article:ArticleEntity) => {
                const authorId = article.author_id
                // Check if authorId is defined before using it
                if (authorId !== undefined) {
                    // Now TypeScript knows that authorId is a string
                    // and you can safely use it as such
                    const userData = await GetUser(authorId);
                    if (userData !== undefined) {
                        return { ...article, author: userData };
                    }else{
                        return { ...article, author: {} };
                    }
                } else {
                    // Handle the case where authorId is undefined
                    console.error("Author ID is undefined");
                    return { ...article, author: {} };
                }
            })
        );
        return allArticles
    }catch (error) {
        throw new Error (`ERROR : ${error}`)
    }
}

// HTTP GET an Article
export const GetArticle = async (article_id:string) : Promise <ArticleEntity> => {
    try {
        const response = await fetch(`${ARTICLES_URL}/v1/articles/${article_id}`)

        if (!response.ok) {
            throw new Error (`HTTP error!: ${response.ok}`)
        }
        const article = await response.json()

        const author = await GetUser(article.author_id);
        if (author !== undefined) {
            article.author = author
            return { ...article, author: author };
        }else{
            return { ...article, author: {} };
        }
    }catch(error) {
        throw new Error (`ERROR : ${error}`)
    }
}

// HTTP GET an Article
export const GetUserArticles = async (article_id:string) : Promise <ArticleEntity> => {
    try {
        const response = await fetch(`${ARTICLES_URL}/v1/articles/author/${article_id}`)

        if (!response.ok) {
            throw new Error (`HTTP error!: ${response.ok}`)
        }
        const article = await response.json()
        return article
    }catch(error) {
        throw new Error (`ERROR : ${error}`)
    }
}
// HTTP GET request for all users
export const  GetUsers = async () : Promise <UserEntity[] | { error: string}> => {
    try {
        const URL = `${USERS_URL}/v1/users/`
        const response = await fetch(URL)

        if (!response.ok) {
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const users = await response.json()
    
        return users
    }catch (error) {
        return {"error": `ERROR : ${error} Server`}
    }
}

// HTTP GET user
export const GetUser = async (user_id: string): Promise<UserEntity> => {
    try {
        const URL = `${USERS_URL}/v1/users/${user_id}`;
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
        }

        const user = await response.json();
        return user;
    } catch (error) {
        throw new Error(`ERROR: ${error}`);
    }
};
