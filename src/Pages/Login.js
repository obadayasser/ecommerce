import React, { useState } from 'react'
import Header from '../Components/Header'
import di from '../Assets/dl.beatsnoop 1.png'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension'
import { auth, db } from '../FireBase/FireBase'
import { doc, setDoc } from 'firebase/firestore/lite'
import { toast } from 'react-toastify'
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


    const handleSign =async (e) => {
      e.preventDefault()

      try{
      await  signInWithEmailAndPassword(auth,email,password)
        const user = auth.currentUser;

        if (user) {
          setDoc(doc(db,"Users", user.uid),{
            email:email,
            password:password
          })
          navigate('/')
        }
        
        toast.success("user login Succesfully!!",{
          position:"top-center",
        })

      }catch(err){
        console.log(err.message)
        toast.error(err.message,{
          position:"bottom-center"
        })
      }

   }
  return (
    
    <>
    <Header/>
    <div className='sign-up'>
    <div className='image'>
        <img src={di}></img>
    </div>
    <div className='form'>
        <h1>Log in to Exclusive</h1>
        <h5>Enter your details below</h5>
       <form onSubmit={handleSign}>
       <input type='email' placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <hr/>
        <input type='password' placeholder='Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <hr/>
        <button className='create' type='submit'>Log In</button>
       </form>
        <p>I don't have an account?<Link to={'/sign'}>sign up</Link> </p>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login
