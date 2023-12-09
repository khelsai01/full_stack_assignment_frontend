import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]= useState("")
    const [pass,setPass]= useState("")

    const login = async(e)=>{
        e.preventDefault()
        try {
            const obj ={email,pass}
            let res = await fetch("https://weak-pear-handkerchief.cyclic.app/users/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                   
                },
                body:JSON.stringify(obj)
            });
            let data = await res.json();
            // console.log(data)
            localStorage.setItem("token",data.token)
            
        } catch (error) {
            throw new Error("Error to login")
        }
    }
  return (
    <div>
        <form onSubmit={login}>
            <input type="text"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <br/>
            <input type="password"  placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)} />
            <br/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login