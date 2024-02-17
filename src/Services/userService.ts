import { USERS_URL } from "../Config/Config";
import { User, UserResponse} from "../Types/Types";


export const CreateUser = async (user:User): Promise<{user?: User, error?:string}> => {
    // Creates a user with userID after a successful GET request else returns an error
    try{
        const response = await fetch(`${USERS_URL}`, {
            method: "POST",
            headers: {"Content-Type": "appilication/json"},
            body: JSON.stringify(user)
        })

        if (!response.ok){
            console.log("Network response was not ok")
            return {
                user:undefined, 
                error: "Network response was not ok"
            }
        }

        const payload:User = await response.json()
        return {
            user:payload,
            error: undefined
        }

    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

export const GetUsers = async (): Promise <{users?: User[], error?:string}> => {
    // Returns a users after a successful GET request else returns an error
    try {
        const response = await fetch(`${USERS_URL}`)
        if (!response.ok){
            console.log("Error: unable to fetch users")
            return { 
                users:undefined,
                error: "Error: unable to fetch users"
            }
        }
        const res = await response.json()
        const users = await Promise.all(
            res.map(async (user:User)=>{
                return {...user}
            })
        )
        return { 
            users:users, 
            error: undefined
        }
    }catch(error) {
        console.log(error)
        return { 
            users: undefined, 
            error: "Internal Server Error!" 
        };
    }
}

export const GetUser = async (userID:string): Promise<{user?: User, error?:string}>=>{
    // Returns a user with userID after a successful GET request else returns an error
    try {
        const response = await fetch(`${USERS_URL}${userID}`)
        if (!response.ok){
            console.log("Error: unable to fetch user")
            return {
                user: undefined, 
                error: "Error: unable to fetch user"
            }
        }
        const user:User = await response.json()
        return {
            user: user, 
            error: undefined
        }
    }catch(error){
        console.log(error)
        return { 
            user: undefined, 
            error: "Internal Server Error!" 
        };
    }
}

export const UpdateUser = async (user:User): Promise<{user?: User, error?:string}> => {
    // Updates user after a successful PUT request else returns an error
    try{
        const response = await fetch(`${USERS_URL}${user.user_id}`, {
            method: "PUT",
            headers: {"Content-Type": "appilication/json"},
            body: JSON.stringify(user)
        })

        if (!response.ok){
            console.log("Network response was not ok")
            return {
                user:undefined, 
                error: "Network response was not ok"
            }
        }

        const payload:User = await response.json()
        return {
            user:payload , 
            error: undefined
        }

    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}

export const DeleteUser = async (userID:string): Promise<{error?: string }>=>{
    // Deletes a post with userID after a successful DELETE request else returns an error
    try {
        const response = await fetch(`${USERS_URL}${userID}`, {
            method: 'DELETE',
          });
        if (!response.ok){
            console.log("Error: unable to delete articles")
            return { 
                error: "Error: unable to delete posts" 
            };
        }
        return {error: undefined };
    }catch(error){
        console.log(error)
        return {
            error: "Internal Server Error!" 
        };
    }
}

export const DeleteUsers = async (): Promise<{error?: string }>=>{
    // Deletes a users after a successful DELETE request else returns an error
    try {
        const response = await fetch(`${USERS_URL}`, {
            method: 'DELETE',
          });
        if (!response.ok){
            console.log("Error: unable to delete articles")
            return { error: "Error: unable to delete posts" };
        }
        return {error: undefined };
    }catch(error){
        console.log(error)
        return {error: "Internal Server Error!" };
    }
}


export const InitializeUser = async (): Promise<{user?: UserResponse, error?:string}> => {
    try{
        const fetchUsers = async () => {
            // Get all users  from backend
            const userResponse = await GetUsers()
            // Check if Users is undefined
            if(userResponse.users === undefined ){
                return {
                    user: undefined,
                    error : "Internal server error!"
                }
            }else if (userResponse.error) {
                return {
                    user: undefined,
                    error : userResponse.error
                }
            }else{
                let users : User[] = userResponse.users
                if (users.length === 0) {
                    // Create a new user 
                    const newUser:User = {
                        user_id: "",
                        firstname : "Antony",
                        lastname : "Injila",
                        email : "antony@notelify.com",
                        handle : "antony@notelify",
                        about : "Passionate Go, Python, Typescript developer. Drone enthusiast",
                        articles : [],
                        password : "Antony",
                        profile_image : "https://media.licdn.com/dms/image/D4D03AQHxabz4XmY-cg/profile-displayphoto-shrink_200_200/0/1706858865855?e=1712188800&v=beta&t=ocQIemmfhPCtbB1eQdesHsX5_t-LeeJnm2L0jiIEZg0",
                        following :[],
                        followers : [],
                    }
                   
                    let newUserResponse = await CreateUser(newUser)
                
                    if (newUserResponse.user === undefined){
                        return {
                            user: undefined,
                            error : "Internal server error!"
                        }
                    }else if (newUserResponse.error) {
                        return {
                            user: undefined,
                            error : newUserResponse.error
                        }
                    }else{
                        let userObj:User = newUserResponse.user
                        let user:UserResponse = {
                            user_id        :userObj.user_id,
                            firstname      :userObj.firstname,
                            lastname       :userObj.lastname,
                            email          :userObj.email,
                            handle         :userObj.handle,
                            about          :userObj.about,
                            profile_image  :userObj.profile_image,
                            following      :userObj.following,
                            followers      :userObj.followers
                        }

                        return {
                            user: user,
                            error : undefined
                        }
                    }
                }else{
                    return {
                        user: users[0],
                        error: undefined,
                    }
                }
            }
        }   
        return await fetchUsers()
    }catch(error){
        console.log(error)
        throw new Error (`ERROR : ${error}`)
    }
}
