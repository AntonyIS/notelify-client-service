import {FC} from "react";
import { Spinner } from "../../../../types/Types";



export  const LoadingSpinner:FC = () => {
    return (
        <div className="mt-5 p-5">
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}


