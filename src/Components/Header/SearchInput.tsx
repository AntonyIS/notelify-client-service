import React from "react";
import { SearchRoundButton } from "../../Styles/Styles";

export const SearchInput:React.FC = () => {
    return (
        <>
            <div className="form-group mb-0">
                <input 
                    type="input" 
                    className="form-control" 
                    placeholder="Search" 
                    style={SearchRoundButton} 
                />
            </div>
        </>
    )
}