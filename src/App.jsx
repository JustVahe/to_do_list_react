import { useState, useEffect} from 'react'
import DateComponent from './components/date/Date'
import './App.css'
import Task from './components/task/Task'
import CreateButton from './components/create/CreateButton';

function App() {

  const [data,setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/tasks")
        .then((response) => {
            if (!response.ok) {
                throw Error("Fetch is wrong!")
            }
            return response.json();
        })
        .then((data) => {
            setData(() => data);
        });
    }, [data])

  return (
    <div className="body" style={}>
      <DateComponent />
      {data && data.map((item) => <Task taskBody = {item.taskBody} isFinished = {item.isFinished} key = {item.id} id = {item.id}/>)}
      <CreateButton currentID = {data && (data.length - 1)}/>
    </div>
  )
}

export default App;


{/*  */}