import React from 'react'


//functional component

// function Greet(){
//     return <h1>Hello Riya</h1>
// }


const Greet = (props) => {
    console.log(props)
return (
 <div>
  <h1>Hello {props.name} a.k.a. {props.Designation}</h1>
  {props.children}
 </div>
)

}


//JSX should return only one unit of HTML so provide div tag
export default Greet;