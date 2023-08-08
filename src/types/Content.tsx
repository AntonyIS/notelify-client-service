
export interface ContentProp {
    content_id:string;
    creator_id:string;
    title:string;
    body:string;
    publication_date: string
}
export interface ContentProps {
    contents: ContentProp[];
}

export interface AuthorProp {
    firstname:string;
    lastname:string;
    handle:string;
    contents:ContentProp[];
    followers :number;
    following :number;
}
export interface ContentHead {
    user_imagePath?:string;
    user_firstname?:string;
    user_lastname?:string;
    content_title?:string;
    content_publication_date? :string;
}

