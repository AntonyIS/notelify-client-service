import {CLIENT_ID,GITHUB_CALL_BACK_URL,REDIRECT_URI } from "../Config/Config";

export const InitiateGitHubLogin = (): void => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`;
};
  
export const HandleGitHubCallback = async (code: string): Promise<void> => {

    try {
        const response = await fetch(GITHUB_CALL_BACK_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ code }),
        });

        if (!response.ok) {
            console.log("GitHub Callback Error")
            throw new Error(`GitHub Callback Error: ${response.statusText}`);
        }
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
        console.log(data)
    } catch (error) {
        console.log('GitHub Callback Error:', error);
        throw new Error(`GitHub Callback Error: ${error}`);
    }
};