
export interface PostProp {
    content_id:string;
    creator_id:string;
    title:string;
    body:string;
    publication_date: string
}

export interface PostPropType {
    posts?:PostProp[];
    loading?: boolean
}

export interface UserPropType {
    users?:UserProp[];
    loading?: boolean;
}

export interface AppProps {
    users?: UserProp[];
    posts?: PostProp[];
    usersLoading?: boolean;
    postsLoading?:boolean;
}

export interface Spinner {
   classType?:string
   loading?:boolean
}


export interface UserProp {
    id?:string;
    firstname?:string;
    lastname?:string;
    about?:string;
    handle?:string;
    contents?:PostProp[];
    followers ?:number;
    following ?:number;
}

export interface PostHeader {
    user_imagePath?:string;
    user_firstname?:string;
    user_lastname?:string;
    content_title?:string;
    content_publication_date? :string;
}