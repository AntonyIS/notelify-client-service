import {FC} from "react";
import { UserProp, UserPropType } from "../../types/Types";
import { Link } from "react-router-dom";
import { User } from "./User";
import { LoadingSpinner } from "../Utils/loadingSpinner";

const linkStyle = {
    textDecoration: 'none',
};


export  const UserList:FC<UserPropType> = ({users, loading}) => {
    return (
        <div className="">
            <div className="row">
                <div className="col-12">
                    {loading ? (
                        <LoadingSpinner />
                    ): (
                        <>
                            {users?.map((user:UserProp) => (
                                <Link to={`/users/${user.id}`} style={linkStyle} >
                                    
                                    <User 
                                        id={user.id}
                                        firstname={user.firstname}
                                        lastname={user.lastname}
                                        handle={user.handle}
                                        contents ={user.contents}
                                        followers ={user.followers} 
                                        following={user.following}
                                    />
                                </Link>
                            ))}
                        </>
                    )}
                    
                    
                </div>
            </div>
        </div>
     )
}