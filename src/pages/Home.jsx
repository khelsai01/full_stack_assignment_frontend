import React, { useEffect, useState } from 'react'

const Home = () => {
    const [note, setNote] = useState([]);

    const noteList=()=>{
        fetch("https://weak-pear-handkerchief.cyclic.app/notes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => res.json()).then((data) => {
            console.log(data);
           setNote(data)
        }).catch((error) => {
            throw new Error("Error to get note")
        })
    }
    const deletNote = (id)=>{
        // console.log(id)
        fetch(`https://weak-pear-handkerchief.cyclic.app/notes/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => res.json()).then((data) => {
            console.log(data);
           noteList()
        }).catch((error) => {
            throw new Error("Error To delete the note")
        })

    }
    useEffect(() => {
        noteList()
    }, [])

    return (
        <div>
            { note.length>0?
                note?.map((el)=>(
                    <div key={el._id}>
                        <h4>Title: {el.title}</h4>
                        <p>{el.body}</p>
                        <p>{el.username}</p>
                        
                        <button>Toggle</button>
                        <button onClick={()=>deletNote(el._id)}>Delete</button>

                    </div>
                )):<h1>Note is note create by user</h1>
            }
        </div>
    )
}

export default Home