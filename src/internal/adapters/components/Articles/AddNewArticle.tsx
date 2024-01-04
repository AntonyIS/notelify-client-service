import React ,{FC, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';



const inputStyle = {
    border: "none"
}

const roundButton = {
    borderRadius: "60px"
}
export  const AddNewArticle:FC = () => {

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
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control text-bg-light p-3 mb-2 fw-lighter" id="title" aria-describedby="titleHel" placeholder="Title" style={inputStyle} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control text-bg-light p-3 mb-2 fw-lighter" id="title" aria-describedby="titleHel" placeholder="Subtitle" style={inputStyle} />
                                        </div>
                                        <div className="form-floating">
                                            <textarea className="form-control text-bg-light p-3 mb-2 fw-lighter" placeholder="Leave a comment here" id="floatingTextarea2" style={inputStyle} ></textarea>
                                            <label className='fw-lighter'>Body</label>
                                        </div>
                                        <button type="submit" className="btn btn-info" style={roundButton}>Submit</button>
                                    </form>
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