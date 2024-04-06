import { useState } from "react";
import "./AllComment.css";
import Form from "./Form";

export default function AllComment(){
    let[comment,setComment]=useState([
        {
            username:"@vj",
            rating:4,
            remarks:"well done"
        }
    ]);

    let addNewComment=(comment)=>{
        setComment((currComment)=>[...currComment,comment]);
    };

    return(
        <>
        <div>
            <h2>All Comments</h2>
            {comment.map((comment,idx)=>(
            <div className="Comment" key={idx}>
                <p>{comment.remarks}</p>
                <p>(Rating= {comment.rating})</p>
                <p>-by {comment.username}</p>
            </div>
            ))}
        </div>
        <hr></hr>
        <Form addNewComment={addNewComment} />
        </>
    )
}