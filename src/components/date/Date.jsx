import { useState } from "react";
import "./Date.css"

const DateComponent = () => {

    const today = new Date();
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const [day, setDay] = useState(today.getDate());
    const [month,setMonth] = useState(today.getMonth());
    const [year,setYear] = useState(today.getFullYear());
    const [daytype,setDaytype] = useState(today.getDay());

    return ( 
        <div className="date flex">
            <div className="left">
                <h2 className="date-day">{day}</h2>
                <p className="date-month-and-year">
                    {months[month]} <br />
                    <span className="year">{year}</span>
                </p>
            </div>
            <div className="right">
                <p className="date-day-type">{days[daytype]}</p>
            </div>
        </div>
     );
}
 
export default DateComponent;