import React from "react";
import { RoundButton } from "../../Styles/Styles";

export const DraftPostButton:React.FC = () => {
    return (
        <>
             <button type="button" className="btn btn-outline-secondary fw-light text-dark m-1" style={RoundButton}>
                Draft an article
            </button>
        </>
    )
}