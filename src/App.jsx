import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {useState} from "react";
// import Header from './Header.jsx'
// import LogIn,{Profile,Setting} from './User.jsx'
import ToDo from './ToDo.jsx'
import User from './User.jsx'
// function App(){
//   const [counter,setCounter] = useState(0)
//   const name = "";
//   let x = 10;
//   let y = 20;
//   const userObj={
//     name:"vikas yadav",
//     email: "vikaskumar.yadav23@lpu.in"
//   }
//   const array =["vikas","Tikas","Pikas"]
// function operation(a,b,op){
//   if(op == "+"){
//     return a+b;
//   }
//   else if(op == "-"){
//     return a-b;
//   }
//   else{
//     return a*b;
//   }
// }
//   return (
//     // <div>
//     //   <Header/>
//     //   <LogIn/>
//     //   <Setting/>
//     //   <Profile/>
//     //   {/* <h1>{Userkey}</h1> */}
//     //   <h1>Counter Val:{counter}</h1>
//     //   <h1>Step by step</h1>
//     //   <button onClick={()=> setCounter(counter+1)}>Increase Counter</button>
//     // </div>
//     <div>
//       <ToDo/>
//     </div>
//     // <div>
// // USE of { } brackets
 //     //   <h1>JSX With curly braces</h1>
//     //   {/* condition */}
//     //   <h1>{name?name:"Tikas"}</h1>  
//     //    {/*operations  */}
//     //   <h1>{x+y}</h1>
//     //   {/* function */}
//     //   <div>{operation(2,3,'/')}</div>
//     //   {/* objects */}
//     //   <h1>{userObj.name}</h1>
//     //   <h1>{userObj.email}</h1>
//     //   {/* array */}
//     //   <h1>{array[1]}</h1>
//     // </div>
//   )
// }
// // Use case of STATE in React
// function App(){
  
//     const[fruit,setFruit] = useState("Apple");
//     const handleFruit=()=>{
//       setFruit("banana")
//     }
//   return (
//     <div>
//      <h1>State in Reactn Js</h1>
//      <ToDo/>
//      <h1>{fruit}</h1>
//      <button onClick={handleFruit}>Chnage Fruit Name</button>
//     </div>
//   ) 
// }
// export default App
// // USING SINGLE CONDITION IN REACT
// function App(){
//   const [display,setDisplay] = useState(true)
//   return(
//     <div>
//       <h1>Toggle in React js</h1>
//       <button onClick={()=>setDisplay(!display)}>Click</button>
//       {display?<User></User>:<h1>no user name</h1>}
      
//     </div>
//   )
// }
// export default App

// // USING MULTIPLE CONDITION IN REACT
// function App(){
//   const [count,setCount] = useState(3);
//   return (
//     <div> 
//       <h1> Multiple condition in React js</h1>
//       <button onClick={()=>setCount(count+1)}>Counter</button>
//       {
//        count==0?<h1>Condition 0</h1>
//       :count ==1?<h1>Condition 1</h1>
//       :count ==2?<h1>Condition 2</h1>
//       :count ==3?<h1>Condition 3</h1>
//       :count ==4?<h1>Condition 4</h1>
//       :<h1>Other Condition</h1>
//     }
//     </div>
//   )
   
// }
// export default App


// // PROPS IN REACT (Part-1) -> for linited items
// function App(){
//  let UserName = "Tikas";
//  let age = 23;
//  let email = "vikasvy369@gmail.com";
//   return(
//     <div>
//       <User name={UserName} age={age} email={email}/>
      
//     </div>
//   )
// }
// export default App
// // PROPS IN REACT (Part-1) -> for many items
function App(){
  let userObject = {
    name: "Vikas",
    age:"23",
    email:"Vikasvy369@gmail.com"
  }
  let userObject2 = {
    name: "tikas",
    age:"22",
    email:"Vikasvy246@gmail.com"
  }
  let userObject3 = {
    name: "Pikas",
    age:"21",
    email:"Vikaskumar.yadav23@lpu.in"
  }
  let College= ['DU', 'LPU','DRISHTI','LBSNAA','IG']
  return (
    <div>
      <h2>Props in React js</h2><hr/>
    {/* <User main={userObject}/><hr/>
    <User main={userObject2}/><hr/>
    <User main={userObject3}/><hr/> */}
    <User names = {College}/>
    </div>
  )
}
export default App