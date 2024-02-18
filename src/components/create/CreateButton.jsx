import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./CreateButton.css"
import { useEffect, useRef, useState } from 'react'

const CreateButton = ({currentID}) => {

    const [isCreationEnabled,setIsCreationEnabled] = useState(false);
    const [task,setTask] = useState(null);

    const body = { taskBody: task,isFinished:false, id:(currentID+1)};

    const inputRef = useRef(null);

    function handleCreate() {
        if(task === null) inputRef.current.focus();
        else {
            fetch(`http://localhost:8000/tasks`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body : JSON.stringify(body)
            })
        }
    }

    return ( 
        <>
            <button className={`create-button`} onClick={() => setIsCreationEnabled((current) => !current)}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <div className={"create-div " + (isCreationEnabled ? "enabled" : "")}>
                <input onChange={(event) => setTask(event.target.value)} ref={inputRef} type="text" className="create-input" placeholder='Enter the task'/>
                <button onClick={handleCreate} className="create-btn">Create Task</button>
            </div>
        </>
     );
}
 
export default CreateButton;