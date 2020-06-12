import React from 'react';

const SignIn=(props)=>{
    return(
        <div>
      <h1>  Please sign in to continue </h1>
      <button onClick={()=>props.history.push('/home')}>Go to home</button>
      <button onClick={()=>props.history.push('/shop')}>Go to shop</button>
      <button onClick={()=>props.history.push('/')}>Go to mainpage</button>
        </div>
    )
}

export default SignIn;