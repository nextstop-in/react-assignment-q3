import React from 'react';


const ShopPage=(props)=>{
    return(
        <div>
      <h1>  Here you can buy any movie of your coice </h1>
      <button onClick={()=>props.history.push('/home')}>Go to home</button>
      <button onClick={()=>props.history.push('/signin')}>Go to setting</button>
      <button onClick={()=>props.history.push('/')}>Go to mainpage</button>
        </div>
    )
}

export default ShopPage;