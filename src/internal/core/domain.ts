export interface ArticleEntity {
    article_id    :string;
    title         :string;
    subtitle      :string;
    introduction  :string;
    body          :string;
    tags          :string[];
    publish_date  :string;
    author_id   :string;
    author : UserEntity ;
}

export interface UserEntity {
    user_id        :string;
    firstname      :string;
    lastname       :string;
    email          :string;
    handle         :string;
    about          :string;
    articles       :string;
    password        : string;
    profile_image  :string;
    following      :number;
    followers      :number;
}



