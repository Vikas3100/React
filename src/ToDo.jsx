import Image from './aqwert.avif'
import {useState} from "react";
// function ToDo(){
//     function callFun(){
//         alert("function called")
//     }
//     return (
//         <div>
//             <h1>Vikas Kumar Yadav</h1>
//             <img src= {Image}
//             alt =" Vikas Yadav"
//             className = "Photo"></img>
//         <ul>
//             <li>I am B.Tech CSE Student</li>
//             <li>My Minor is Machine Learning</li>
//             <li>Have Projects on Machine Learning</li>
//         </ul>
//         <button onClick={callFun}>CLICK ME</button>
//         </div>
//     )
// }

function ToDo(){
    const [count,setCount] = useState(0)
    const [rCounter,setRCounter] = useState(10)
    return (
        <div>
            <h1>Counter:{count}</h1>
            <h1>rCounter:{rCounter}</h1>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <button onClick={()=>setRCounter(rCounter-1)}>Reduce Counter</button>

        </div>
    )
}

export default ToDo;