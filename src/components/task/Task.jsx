import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./Task.css"

const Task = (props) => {

    const taskBody = props.taskBody;
    const id = props.id;
    const [isFinished,setIsFinished] = useState(props.isFinished);

    let buttonIconStyle = {
        opacity: isFinished ? "1" : "0"
    }

    const changeFinishedState = () => {

        setIsFinished((state) => !state);

        fetch(`http://localhost:8000/tasks/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                taskBody: taskBody,
                isFinished: isFinished,
                id: id,
            }),
            headers: {"Content-Type": "application/json"}
        })
    }

    const handleDelete = () => {
        fetch(`http://localhost:8000/tasks/${id}`, {method:"DELETE"});
    }

    return ( 
        <div className={"task flex "+(isFinished ? "finished" : "")}>
            <p className="task-body">{taskBody}</p>
            <div className="task-left">
                <button className="delete-btn" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
                <button className="task-btn" onClick={changeFinishedState}>
                    <FontAwesomeIcon style={buttonIconStyle} icon={faCheck}/>
                </button>
            </div>
        </div>
     );
}
 
export default Task;