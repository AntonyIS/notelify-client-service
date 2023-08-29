import React ,{FC, useEffect, useState} from 'react';
import { ArticleEntity, UserEntity } from '../../Entities/Entities';
import { Link, useParams } from 'react-router-dom';
import { FetchContent, FetchUser, FetchUserArticles } from '../../Services/API';
import { ContentCardHeader } from './ArticleCardHeader';
import { UserHead } from '../Users/UserHead';


const cardStyle = {
    border: "none"
}

const linkStyle = {
    textDecoration: 'none',
    color:"#00000"
};
const headStringStlye = {
    fontSize:"10px"
}



export  const ContentDetail:FC = () => {
    const { user_id,article_id } = useParams<string>();
    const [article, setArticle] = useState<ArticleEntity>({})
    const [userArticles, setUserArticles] = useState<ArticleEntity[]>([])
    const [user, setUser] = useState<UserEntity>({})

    useEffect(() => {
        FetchContent(article_id).then(data => setArticle(data))
        FetchUser(user_id).then(data => setUser(data))
        FetchUserArticles(user_id).then(data => setUserArticles(data))
    }, [])

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className="card" style={cardStyle}>
                            <div className="card-body p-0">
                                <Link to={`/users/${user_id}`} style={linkStyle} className='text-dark'>
                                    <ContentCardHeader title={article.title} publication_date={article.publish_date} name={article.author_info?.name} />
                                </Link>
                                <p>
                                    {article.body}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="card" style={cardStyle}>
                            <div className="card-body">
                                <Link  to={`/users/${article.article_id}`} style={linkStyle} className='text-dark' key={article.article_id}>
                                    <ContentCardHeader name={article.author_info?.name} />
                                </Link>
                                <div className="row">
                                    {userArticles?.map((article:ArticleEntity) => (
                                        <Link to={`/posts/${article.article_id}/${article.article_id}`} style={linkStyle} className='text-dark' key={article.article_id}>
                                            <div className="col-12" >
                                                <div className="card mb-2" style={cardStyle}>
                                                    <div className="card-body p-0">
                                                    <h4>{article.title} <span style={headStringStlye}>{article.publish_date?.slice(0, 10)}</span></h4>
                                                    <UserHead id={article.article_id}/>
                                                    {article.body?.slice(0, 100)}...
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}