import React ,{FC,useEffect,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormData, FormErrors, Post, User } from '../Types/Types';
import { CreateNewPost, FetchPost, FetchUsers, InitializeUser, UpdatePost } from '../Services/apiService';
import { InputStyle, RoundButton } from '../Styles/Styles';
import { ResponsePage } from '../components/ResponsePage';

export const PostEdit: FC = () => {
    const { post_id = "" } = useParams<{ post_id?: string }>();
    const [post, setPost] = useState<Post>();
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = await FetchPost(post_id);
                if (postResponse.error) {
                    setError(postResponse.error);
                } else {
                    setPost(postResponse.post);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
                setError("Error fetching post");
            }
        };

        if (post_id) {
            fetchPost();
        }

    }, [post_id]);

    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        author_id: '',
        title: '',
        subtitle: '',
        body: '',
        tags: ["Programming", "Computer Science"]
    });

    useEffect(() => {
        if (post) {
            setFormData({
                author_id: post.author_id,
                title: post.title,
                subtitle: post.subtitle,
                body: post.body,
                tags: post.tags
            });
        }
    }, [post]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Perform update logic here using formData and existing post ID
            const updatedPost: Post = {
                ...post,
                title: formData.title,
                subtitle: formData.subtitle,
                body: formData.body,
                // Update other fields as needed
            };
    
            // Example: Assuming you have an UpdatePost function in your API service
            await UpdatePost(updatedPost);
    
            // After successful update, navigate to post detail page
            navigate(`/posts/${post_id}`);
        } catch (error) {
            console.error("Error updating post:", error);
            setError("Error updating post");
        }
    }

    return (
        <>
            <div>
                {
                    error ? (
                        <ResponsePage message={error} statusCode={"500"} />
                    ) : post ? (
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                    <div className="card" style={{ border: "none" }}>
                                        <div className="card-body">
                                            <h3 className='fw-light'>Edit Post</h3>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleInputChange}
                                                        className="form-control text-bg-light p-3 mb-2 fw-lighter"
                                                        placeholder="Title"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="subtitle"
                                                        value={formData.subtitle}
                                                        onChange={handleInputChange}
                                                        className="form-control text-bg-light p-3 mb-2 fw-lighter"
                                                        placeholder="Subtitle"
                                                    />
                                                </div>
                                                <div className="form-floating">
                                                    <textarea
                                                        name="body"
                                                        value={formData.body}
                                                        onChange={handleInputChange}
                                                        className="form-control text-bg-light p-3 mb-2 fw-lighter"
                                                        placeholder="Body"
                                                    ></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-info">Update</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card" style={{ border: "none" }}>
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
                    ) : (
                        <div>Loading...</div>
                    )
                }

            </div>
        </>
    )
}
