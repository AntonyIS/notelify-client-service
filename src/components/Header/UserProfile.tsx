import React from "react";
import { User } from "../../Types/Types";
interface UserProps {
    user: User | null;
}

const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
}
export const UserProfile:React.FC<UserProps> = ({user}) => {
    return (
        <>
            <div className="m-2">
                <img src={user?.profile_image}  style={imageStyle} alt={user?.firstname} />
            </div>
        </>
    )
}