// function User(){
//     return(
//         <div>User Component</div>
//     )
// }
// function LogIn(){
//     return (
//         <div>
//             <h1>LOGIN USER</h1>
//         </div>
//     )
// }
// export function Profile(){
//     return (
//         <div>
//             <h1>User Profile</h1>
//         </div>
//     )
// }
// export function Setting(){
//     return(
//         <div>
//             <h1>Settings</h1>
//         </div>
//     )
// }
// export default  LogIn;
// // Props in React Js
// function User({main, main2}){
    
//     return (
//         <div>
//             <h1>Name: {main.name}</h1>
//             <h1>Age: {main.age}</h1>
//             <h1>E-mail: {main.email}</h1>
            

//         </div>
//     )
// }
// export default User
// // Props using Arrays

function User({names}){
    return (
        <div>
            <h1> College: {names[0]}</h1>
            <h1> College: {names[1]}</h1>
            <h1> College: {names[2]}</h1>
            <h1> College: {names[4]}</h1>
        </div>
    )
}
export default User