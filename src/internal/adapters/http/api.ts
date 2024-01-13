import { ArticleEntity, UserEntity } from "../../core/domain"

const ENV = process.env.REACT_APP_ENV

let ARTICLES_URL=""
let USERS_URL=""

if (ENV === "docker") {
    ARTICLES_URL="/v1/articles/"
    USERS_URL="/v1/users/"
}else{
    ARTICLES_URL="http://127.0.0.1:8001/v1/articles/"
    USERS_URL="http://127.0.0.1:8000/v1/users/"
}


interface ArticleFormData {
    title: string;
    subtitle: string;
    body: string;
}

interface UserFormData {
    firstname: string;
    lastname: string;
    email: string;
    about : string;
    profile_image: string
    password: string
}

interface postResponse {
    article_id:string
}

export const  PostArticle = async (article:ArticleFormData): Promise <postResponse> => {
    try {
        const URL = `${ARTICLES_URL}`
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(article),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        return {
            "article_id" :responseData.article_id
        }
    }catch (error) {
        throw new Error (`ERROR : ${error}`)
    }
}
// HTTP GET request for all articles
export const  GetArticles = async () : Promise <ArticleEntity[]> => {
    const URL = `${ARTICLES_URL}`
  
    try {
        
        const response = await fetch(URL)
        
        if (!response.ok) {
            console.log(`HTTP error!: ${response.status}`)
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const articles = await response.json()
        
        const allArticles = await Promise.all(
            articles.map(async (article:ArticleEntity) => {
                const authorId = article.author_id
                // Check if authorId is defined before using it
                if (authorId !== undefined) {
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
// HTTP GET request for all articles
export const  GetAuthorArticles = async (user_id:String) : Promise <ArticleEntity[]> => {
    try {
        const URL = `${ARTICLES_URL}author/${user_id}`
        const response = await fetch(URL)

        if (!response.ok) {
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const articles = await response.json()
        
        const allArticles = await Promise.all(
            articles.map(async (article:ArticleEntity) => {
                const authorId = article.author_id
                if (authorId !== undefined) {
                    article.author = await GetUser(authorId);

                    return article
                } else {
                    // Handle the case where authorId is undefined
                    console.error("Author ID is undefined");
                    return { ...article, author: {} };
                }
            })
        );
            console.log(allArticles, "ALLL")
        return allArticles
    }catch (error) {
        throw new Error (`ERROR : ${error}`)
    }
}
// HTTP GET an Article
export const GetArticle = async (article_id:string) : Promise <ArticleEntity> => {
    const URL = `${ARTICLES_URL}${article_id}`
   
    try {
        const response = await fetch(URL)

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
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}
// HTTP POST User
export const PostUser = async (): Promise<void> => {
    let user:UserFormData  = {
        firstname: "Marco",
        lastname: "Injila",
        email: "marcoinjila@mail.com",
        about: "Passionate Go and Python developer. Drone Enthusiast.",
        profile_image: "https://media.licdn.com/dms/image/D4D03AQGU0BGeCfHasQ/profile-displayphoto-shrink_200_200/0/1693855758295?e=1710374400&v=beta&t=PAreRp1IorvWM8bSjIx7_DSzQdX0AhWWXp75lAYxepc",
        password: "pass1234"
    }
    

    try {
        const URL = `${USERS_URL}`
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
       
    }catch (error) {
        throw new Error (`ERROR : ${error}`)
    }
};
// HTTP GET an Article
export const GetUserArticles = async (article_id:string) : Promise <ArticleEntity> => {
    try {
        const response = await fetch(`${ARTICLES_URL}/author/${article_id}`)

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
        const URL = `${USERS_URL}`
        const response = await fetch(URL)

        if (!response.ok) {
            throw new Error(`HTTP error!: ${response.status}`)
        }
        const users = await response.json()
        
        return users
    }catch (error) {
        console.log("GET USERS ERROR::: ",error)
        return {"error": `ERROR : ${error} Server`}
    }
}
// HTTP GET user
export const GetUser = async (user_id: string): Promise<UserEntity> => {
    try {
        const URL = `${USERS_URL}${user_id}`;
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.log("GET USER ERROR::: ",error)
        throw new Error(`ERROR: ${error}`);
    }
};
