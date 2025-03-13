import React, { useState } from 'react'
import Header from '../Components/Header'
import di from '../Assets/dl.beatsnoop 1.png'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension'
import { auth, db } from '../FireBase/FireBase'
import { doc, setDoc } from 'firebase/firestore/lite'
import { toast } from 'react-toastify'

const Sign = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

    const handleSign =async (e) => {
      e.preventDefault()

      try{
      await  createUserWithEmailAndPassword(auth,email,password)
        const user = auth.currentUser;

        if (user) {
          setDoc(doc(db,"Users", user.uid),{
            name:name,
            email:email,
            password:password
          })
            navigate('/login')
        }

        toast.success("user register Succesfully!!",{
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
        <h1>Create an account</h1>
        <h5>Enter your details below</h5>
       <form onSubmit={handleSign}>
       <input type='text' placeholder='Name' 
       value={name}
       onChange={(e) => setName(e.target.value)} required
       />
       <hr/>
        <input type='email' placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} required
        />
        <hr/>
        <input type='password' placeholder='Password'  required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <hr/>
        <button  className='create' type='submit'>Create Account</button>
       </form>
        <button  className='google' type='button'><i className="fa-brands fa-google"></i>Sign up with Google</button>
        <p>Already have account?<Link to={'/login'}>Log In</Link> </p>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Sign
