import React ,{FC,useEffect, useState} from 'react';
import { ArticleEntity, ArticleListProps } from '../../Entities/Entities';
import { Link } from 'react-router-dom';
import { FetchContents } from '../../Services/API';




const linkStyle = {
    textDecoration: 'none',
    color:"#00000"
};
const headStringStlye = {
    fontSize:"10px"
}

const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}

const cardStyle = {
    border: 'none',
    borderBottom: '1px solid #dee2e6',
    padding: "0px 0px 0px 0px"
};

export  const ContentList:FC = () => {
    const [articles, setArticles] = useState<ArticleEntity[]>([])
    useEffect(() => {
        FetchContents().then(data => setArticles(data))
    }, [])

    return (
        <>  
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark active" id="golang-tab" data-bs-toggle="tab" data-bs-target="#golang" type="button" role="tab" aria-controls="golang" aria-selected="true">Go Programming</button>
                </li>
                {/* <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="following-tab" data-bs-toggle="tab" data-bs-target="#following" type="button" role="tab" aria-controls="following" aria-selected="false">following</button>
                </li> */}
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="aws-tab" data-bs-toggle="tab" data-bs-target="#aws" type="button" role="tab" aria-controls="aws" aria-selected="false">AWS</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="k8-tab" data-bs-toggle="tab" data-bs-target="#k8" type="button" role="tab" aria-controls="k8" aria-selected="false">Kubernetes</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="Python-tab" data-bs-toggle="tab" data-bs-target="#Python" type="button" role="tab" aria-controls="Python" aria-selected="false">Python</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="javascript-tab" data-bs-toggle="tab" data-bs-target="#javascript" type="button" role="tab" aria-controls="javascript" aria-selected="false">ReactJS & Typscript</button>
                </li>
            </ul>
            <div className="tab-content mt-3" id="myTabContent">
                <div className="mt-2 mb-2 tab-pane fade show active" id="golang" role="tabpanel" aria-labelledby="golang-tab">
                    <div className="row">
                        {articles?.map((article:ArticleEntity) => (
                            <Link to={`/posts/${article.author_info?.author_id}/${article.article_id}`} style={linkStyle} className='text-dark' key={article.article_id}>
                                <div className="col-12" >
                                    <div className="card mb-2" style={cardStyle}>
                                        <div className="card-body p-0">
                                        <h4>{article.title} <span style={headStringStlye}>{article.publish_date?.slice(0, 10)}</span> </h4>
                                        <div>
                                            <img src="/images/user1.png" style={imageStyle}/>
                                            <span className="text-secondary pr-3">{article.author_info?.name} <span style={headStringStlye}>Following {article.author_info?.following} Followers {article.author_info?.followers}</span></span> 
                                        </div>
                                        {article.body?.slice(0, 400)}...
                                        </div>
                                    </div>
                                  
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            

            
        </>
    )
}