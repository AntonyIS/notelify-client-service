const ENV = process.env.REACT_APP_ENV
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

console.log(ENV)
console.log(CLIENT_ID)

let USERS_URL="/users/v1";
let ARTICLES_URL="/articles/v1";
let LOGGING_URL="/logging/v1/client";
let REDIRECT_URI="/";
let GITHUB_CALL_BACK_URL = "/users/v1/github/login/callback";

if (ENV === "development") {
    USERS_URL="http://127.0.0.1:8000/users/v1";
    ARTICLES_URL="http://127.0.0.1:8001/articles/v1";
    LOGGING_URL="http://127.0.0.1:8002/logging/v1/client";
    REDIRECT_URI="http://localhost:3000";
    GITHUB_CALL_BACK_URL = "http://localhost:8000/users/v1/github/login/callback";
}

let GITHUB_OAUTH = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`;

export {USERS_URL,ARTICLES_URL,LOGGING_URL,REDIRECT_URI,GITHUB_CALL_BACK_URL,GITHUB_OAUTH,CLIENT_ID};