import React, { useState } from 'react'

const Notepost = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

    const addNote =async(e)=>{
        e.preventDefault();
        const payload ={
            title, body
        }
        try {
            let res = await fetch(`https://weak-pear-handkerchief.cyclic.app/notes/add`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    authorization:`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify(payload)
            })
            let data = await res.json();
            console.log(data)
        } catch (error) {
            throw new Error("Not able to add note")
        }
    }
  return (
    <div>
        <form onSubmit={addNote}>
            <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <br />
            <input type="text" placeholder='body' value={body} onChange={(e)=>setBody(e.target.value)} />
            <br />
            <button>Submit note</button>
        </form>
    </div>
  )
}

export default Notepost