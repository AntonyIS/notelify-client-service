export interface UserResponse {
    user_id        :string;
    firstname      :string;
    lastname       :string;
    email          :string;
    handle         :string;
    about          :string;
    profile_image  :string;
    following      :FollowUser[];
    followers      :FollowUser[];
}
export interface Post {
    article_id?     :string;
    title?         :string;
    subtitle?      :string;
    introduction?  :string;
    body?          :string;
    likes?         :number;
    dislikes?      :number;
    tags?          :string[];
    publish_date?  :null ;
    updated_date?  :null;
    author_id?     :string;
    author?        :UserResponse ;
}

export interface PostRequest {
    title?         :string;
    subtitle?      :string;
    introduction?  :string;
    body?          :string;
    likes?         :number;
    dislikes?      :number;
    tags?          :string[];
    author_id?     :string;
    author?        :UserResponse ;
}

export interface PostItem {
    post: Post
}


export interface PostItemID {
    post_id: string
}

export interface PostItemEdit {
    post_id: string
}


export interface Posts {
    posts: Post[]
}
export interface FollowUser {
    user_id        :string;
    firstname      :string;
    lastname       :string;
    email          :string;
    handle         :string;
    about          :string;
    profile_image  :string;
}
export interface User {
    user_id        :string;
    firstname      :string;
    lastname       :string;
    email          :string;
    handle         :string;
    about          :string;
    articles       :Post[];
    password       :string;
    profile_image  :string;
    following      :FollowUser[];
    followers      :FollowUser[];
}



export interface Users {
    users: User[]
}



export interface PostFormData {
    title: string;
    subtitle: string;
    body: string;
}

export interface UserFormData {
    firstname: string;
    lastname: string;
    email: string;
    about : string;
    profile_image: string
    password: string
}

export interface PostResponse {
    article_id:string
}

export interface LogMessage {
    LogLevel : string;
    Message : string;
    Service : string
}

export interface CodeResponse {
    code : string
}

export interface FormErrors {
    title: string;
    subtitle: string;
    body: string;
}

export interface FormData {
    author_id?: string;
    title?: string;
    subtitle?: string;
    body?: string;
    tags?: string[]
}


