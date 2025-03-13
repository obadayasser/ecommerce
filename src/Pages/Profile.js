import React from 'react'
import Header from '../Components/Header'

const Profile = () => {
  return (
<>
<Header/>
<div className='profile'> 
      <div className='details'>
        <div>
        <a href='/'><li>home</li></a> / <a href='/profile'><li>my Account</li></a>
        </div>
        <div> <h1>welcome{/* {name} */}</h1></div>
      </div>
    </div>
</>
  )
}

export default Profile
