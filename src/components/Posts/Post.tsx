import {FC, useEffect, useState} from "react";
import { PostProp, UserProp } from "../../types/Types";
import { PostHead } from "./PostHead";


const cardborder = {
    border: 'none',
    borderBottom: '1px solid #dee2e6'
};
export  const Post:FC<PostProp> = ({content_id,creator_id,title,body,publication_date}) => {
    const userURL:string =  `http://127.0.0.1:8080/v1/users/${creator_id}`
    const [user, setUser] = useState<UserProp>()

    useEffect(() => {
        async function fetchData() {
          try {
            const response1 = await fetch(userURL);
            const data:UserProp = await response1.json();
            setUser(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);


    return (
        <div className="card mb-2" style={cardborder}>
            <div className="card-body" key={content_id}>
                <PostHead 
                    content_title={title} 
                    content_publication_date={publication_date} 
                    user_imagePath="/images/user1.png"
                    user_firstname={user?.firstname}
                    user_lastname={user?.lastname}
                />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                        <p className="fw-light"> {body.slice(0, 300)}</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <img src="/images/user1.png" style={{
                            width: '100px',     
                            height: '100px',   
                            borderRadius: "50%"
                            }}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}