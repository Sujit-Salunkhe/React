import React from 'react';

// function Greet(){
//     return <h1>hello vishwas</h1>

// }
const Greet =(propes)=> {
    console.log(propes)
return(
    <div>
<h1> Hello {propes.name} also know as {propes.superhero} </h1>
{propes.children}
</div>
)
}
export default Greet
