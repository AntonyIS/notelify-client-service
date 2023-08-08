import {FC} from "react";
import { PostHead } from "../Posts/PostHead";


export  const Recommendations:FC = () => {
    return (
        <div className="mt-2 mb-2">
             <h4>
                Recommendations
            </h4>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-2">
                        <div className="card-body">
                            <PostHead 
                                content_title="Introduction to ReactJS" 
                                content_publication_date= ""
                                user_imagePath="/images/user1.png"
                                user_firstname="John"
                                user_lastname="Doe"
                            />
                            <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus repellat sequi </p>
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            <PostHead 
                                    content_title="Project Management 101: Back to Basics" 
                                    content_publication_date= ""
                                    user_imagePath="/images/user1.png"
                                    user_firstname="Mary"
                                    user_lastname="Doe"
                                />
                                <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus repellat sequi </p>
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                        <PostHead 
                            content_title="How To Secure Your Golang Application" 
                            content_publication_date= ""
                            user_imagePath="/images/user1.png"
                            user_firstname="Steve"
                            user_lastname="Doe"
                        />
                        <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus repellat sequi </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}