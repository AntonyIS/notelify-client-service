const ENV = process.env.REACT_APP_ENV || "development";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

if (!CLIENT_ID) {
    console.error("CLIENT_ID is not set in the environment variables.");
}

let USERS_URL = "/users/v1/";
let POSTS_URL = "/posts/v1/";
let LOGGING_URL = "/logger/v1/";
let REDIRECT_URI = "http://localhost:3000";
let GITHUB_CALL_BACK_URL = "http://users:8000/users/v1/github/login/callback";

if (ENV === "development") {
    USERS_URL = "http://127.0.0.1:8000/users/v1/";
    POSTS_URL = "http://127.0.0.1:8001/posts/v1/";
    LOGGING_URL = "http://127.0.0.1:8002/logger/v1/";
    REDIRECT_URI = "http://localhost:3000";
    GITHUB_CALL_BACK_URL = "http://localhost:8000/users/v1/github/login/callback";
}
let GITHUB_OAUTH = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`;

export { USERS_URL, POSTS_URL, LOGGING_URL, REDIRECT_URI, GITHUB_CALL_BACK_URL, GITHUB_OAUTH, CLIENT_ID };
