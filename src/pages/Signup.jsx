import React, { useState } from 'react'

const Signup = () => {
    const [email,setEmail]= useState("")
    const [pass,setPass]= useState("")
    const [username,setUsername]= useState("")


    const register = async(e)=>{
        e.preventDefault()
        try {
            const obj ={email,pass,username}
            let res = await fetch("https://weak-pear-handkerchief.cyclic.app/users/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(obj)
            });
            let data = await res.json();
            console.log(data)
           
            
        } catch (error) {
            throw new Error("Error to  register the new user")
        }
    }
  return (
    <div>
        <form onSubmit={register}>
        <input type="text"  placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} required />
        <br/>
            <input type="text"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <br/>
            <input type="password"  placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)} />
            <br/>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup