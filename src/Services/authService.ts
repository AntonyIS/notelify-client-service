import {CLIENT_ID,GITHUB_CALL_BACK_URL,REDIRECT_URI } from "../Config/Config";
export const InitiateGitHubLogin = (): void => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user%20email`;
};

export const InitiateLinkedInLogin = (): void => {
    window.location.href = `http://localhost:3000/posts/draft`;
};
  
export const HandleGitHubCallback = async (code: string): Promise<void> => {
   
    interface OauthCode {
        code : string
    } 
    let oauthCode: OauthCode = {
        code : code
    }
    console.log("GITHUB_CALL_BACK_URL",GITHUB_CALL_BACK_URL)
    try {
        const response = await fetch(GITHUB_CALL_BACK_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(oauthCode),
        });

     
        if (!response.ok) {
            console.log("GitHub Callback Error")
            throw new Error(`GitHub Callback Error: ${response.statusText}`);
        }
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        console.log(data)
       
    } catch (error) {
        console.log('GitHub Callback Error:', error);
        throw new Error(`GitHub Callback Error: ${error}`);
    }
};