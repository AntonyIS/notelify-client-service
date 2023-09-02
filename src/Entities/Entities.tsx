export interface ArticleEntity {
    article_id? :string;
    title? :string;
    subtitle? :string;
    introduction? :string;
    body? :string;
    publish_date? :string;
    author_info? :AuthorInfo;
    tags? :string[];
}

export interface AuthorInfo {
    id? :string;
    name? :string;
    bio? :string;
    profile_picture? :string;
    social_links? :string[];
    following? :number;
    followers? :string;
}


export  interface UserEntity {
    id?: string;
    firstname?: string;
    lastname?: string;
    email?:string;
    handle?:string
    about?:string
    profile_image?:string;
    following?:string;
    followers?:string;
    contents?:ArticleEntity[];
}

export interface ArticleListProps {
    articles?: ArticleEntity[];
}

export interface ContentAndUser {
    content?: ArticleEntity;
    user?: UserEntity;
}
export interface ContentCardHead {
    title?:string;
    publication_date?: string
    name?: string;
    following?:string;
    followers?:string;
}

export interface UserCardHead {
    firstname?: string;
    lastname?: string;
    following?:string;
    followers?:string;
    profile_image?:string;
}

export interface userID {
    id? :string
}