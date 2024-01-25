import React ,{FC,useState} from 'react';
import { GetUsers, PostArticle } from '../../http/api';
import { useNavigate } from 'react-router-dom';


const inputStyle = {
    border: "none"
}

const roundButton = {
    borderRadius: "60px"
}

interface FormData {
    author_id: string;
    title: string;
    subtitle: string;
    body: string;
    tags: string[]
}

interface FormErrors {
    title: string;
    subtitle: string;
    body: string;
}



export  const AddNewArticle:FC = () => {
    const navigate = useNavigate();
 
    
    const [formData, setFormData] = useState<FormData>({
        author_id: '',
        title: '',
        subtitle: '',
        body: '',
        tags: ["Programming", "Computer Science"]
    });

    const [errors, setErrors] = useState<FormErrors>({
        title: '',
        subtitle: '',
        body: ''
    })

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        let valid = true;

        if (!formData.title.trim()) {
            setErrors((errors) => ({ ...errors, title: 'Title is required' }));
            valid = false;
        }

        if (!formData.subtitle.trim()) {
            setErrors((errors) => ({ ...errors, subtitle: 'subtitle is required' }));
            valid = false;
        }

        if (!formData.body.trim()) {
            setErrors((errors) => ({ ...errors, body: 'body is required' }));
            valid = false;
        }

      
        if (valid) {
            // Send data to the article service
            
            const fetchData = async () =>  {
                const users =  await GetUsers()
              
                if ('error' in users) {
                    console.log(`Internal server error:Users service error`);
                }else{
                    if (Array.isArray(users) && users.length > 0) {
                        let user = users[0]
                       
                        formData.author_id = user.user_id
                       
                        const response = await PostArticle(formData);

                        navigate(`/articles/${response.article_id}`);
                    }
                }
            }
            
            fetchData()
            setFormData(
                { 
                    author_id: '',
                    title: '',
                    subtitle: '',
                    body: '',
                    tags: [],
                }
            )
        }

    }
    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="card" style={{border: "none"}}>
                                <div className="card-body">
                                    <h3 className='fw-light'>Draft an article</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="title"
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                className="form-control text-bg-light p-3 mb-2 fw-lighter" 
                                                placeholder="Title" 
                                                style={inputStyle} 
                                            />
                                            <span className='text text-danger fw-lighter'>{errors.title}</span>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="subtitle"
                                                value={formData.subtitle}
                                                onChange={handleInputChange}
                                                className="form-control text-bg-light p-3 mb-2 fw-lighter" 
                                                placeholder="Subtitle" 
                                                style={inputStyle} 
                                            />
                                            <span className='text text-danger fw-lighter'>{errors.subtitle}</span>
                                        </div>
                                        <div className="form-floating">
                                            <textarea 
                                                name="body"
                                                value={formData.body}
                                                onChange={handleInputChange}
                                                className="form-control text-bg-light p-3 mb-2 fw-lighter" 
                                                placeholder="Leave a comment here" 
                                                style={inputStyle} 
                                            ></textarea>
                                            <label 
                                                className='fw-lighter'
                                            >Body</label>
                                            <span className='text text-danger fw-lighter'>{errors.body}</span>
                                        </div>
                                        <button type="submit" className="btn btn-info" style={roundButton}>Submit</button>
                                    </form>
                                </div>
                            </div>
                            <hr />
                            <div className="card" style={{border: "none"}}>
                                <div className="card-body">
                                    <h1 className="fw-light">{formData.title}</h1>
                                    <h3 className="fw-light">{formData.subtitle}</h3>
                                    <p className="fw-lighter text-bg-light">
                                        {formData.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}