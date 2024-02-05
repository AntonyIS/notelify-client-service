export interface Post {
    article_id    :string;
    title         :string;
    subtitle      :string;
    introduction  :string;
    body          :string;
    tags          :string[];
    publish_date  :null ;
    updated_date  :null;
    author_id     :string;
    author          :User ;
}

export interface Posts {
    posts: Post[]
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
    following      :number;
    followers      :number;
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
    author_id: string;
    title: string;
    subtitle: string;
    body: string;
    tags: string[]
}

