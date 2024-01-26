export interface ArticleEntity {
    article_id    :string;
    title         :string;
    subtitle      :string;
    introduction  :string;
    body          :string;
    tags          :string[];
    publish_date  :string;
    author_id     :string;
    author        : UserEntity ;
}

export interface UserEntity {
    user_id        :string;
    firstname      :string;
    lastname       :string;
    email          :string;
    handle         :string;
    about          :string;
    articles       :string;
    password       :string;
    profile_image  :string;
    following      :number;
    followers      :number;
}


export interface ArticleFormData {
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

export interface ArticleList {
    articles: ArticleEntity[];
}
  

export interface LogMessage {
    LogLevel : string;
    Message : string;
    Service : string
}