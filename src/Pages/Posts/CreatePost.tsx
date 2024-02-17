import React ,{FC,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FormData, FormErrors, Post, UserResponse } from '../../Types/Types';
import { InputStyle, RoundButton } from '../../Styles/Styles';
import { ResponsePage } from '../../components/Utils/ResponsePage';
import { InitializeUser } from '../../Services/userService';
import { CreateNewPost } from '../../Services/postService';


export  const CreatePost:FC = () => {
    // navigation to different pages
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
    const [error, setError] = useState<string>("")  
    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        let valid = true;

        if (!formData?.title?.trim()) {
            setErrors((errors) => ({ ...errors, title: 'Title is required' }));
            valid = false;
        }

        if (!formData?.subtitle?.trim()) {
            setErrors((errors) => ({ ...errors, subtitle: 'subtitle is required' }));
            valid = false;
        }

        if (!formData?.body?.trim()) {
            setErrors((errors) => ({ ...errors, body: 'body is required' }));
            valid = false;
        }

      
        if (valid) {
            const fetchData = async () =>  {
                const userResponse = await InitializeUser()
                if (userResponse.user === undefined) {
                    setError("Internal Server Error")
                }else if (userResponse.error !== undefined) {
                    setError(userResponse.error)
                }else{
                    let user: UserResponse = userResponse.user
                    let newPost:Post = {
                        article_id    :"",
                        title         :formData.title,
                        subtitle      :formData.subtitle,
                        introduction  :"",
                        body          :formData.body,
                        tags          :["Programming", "Computer Science"],
                        publish_date  :null,
                        updated_date  :null,
                        likes         :0,
                        dislikes      :0,
                        author_id     :user.user_id,
                        author        :user
                    }
                  
                    const postResponse = await CreateNewPost(newPost);
                    if (postResponse.error){
                        console.log(postResponse.error)
                        setError(postResponse.error)
                    }else if (postResponse.post !== undefined) {
                        navigate(`/posts/${postResponse.post.article_id}`);
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
                {
                    error ? (
                        <ResponsePage message={error} statusCode={"500"} /> 
                    ):(
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                    <div className="card" style={{border: "none"}}>
                                        <div className="card-body">
                                            <h3 className='fw-light'>Draft an article!</h3>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleInputChange}
                                                        className="form-control text-bg-light p-3 mb-2 fw-lighter" 
                                                        placeholder="Title" 
                                                        style={InputStyle} 
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
                                                        style={InputStyle} 
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
                                                        style={InputStyle} 
                                                    ></textarea>
                                                    <label 
                                                        className='fw-lighter'
                                                    >Body</label>
                                                    <span className='text text-danger fw-lighter'>{errors.body}</span>
                                                </div>
                                                <button type="submit" className="btn btn-info" style={RoundButton}>Submit</button>
                                            </form>
                                        </div>
                                    </div>
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
                                <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </>
    )
}