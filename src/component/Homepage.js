import React from 'react';

const HomePage=(props)=>{
    return(
        <div>
      <h1>  Here you can filter your category </h1>
      <button onClick={()=>props.history.push('/shop')}>Go to shop</button>
      <button onClick={()=>props.history.push('/signin')}>Go to setting</button>
      <button onClick={()=>props.history.push('/')}>Go to mainpage</button>
        </div>
    )
}

export default HomePage;