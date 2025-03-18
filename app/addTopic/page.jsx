'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !description){
      return alert("Title and Description are required")
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method:"POST",
        headers:{
          "Content-type" : "application/json"
        },
        body: JSON.stringify({ title, description })
      });

      if(res.ok){
        router.push('/')
        router.refresh()
      }else{
        throw new Error("Failed to create a topic")
      }
    } catch (error) {
      console.log(error, "error in create");
    }

  }
  
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input 
                type="text" 
                className='border border-slate-500 px-8 py-2'
                placeholder='Topic Title'
                onChange={e => setTitle(e.target.value)}
                value={title}
            />
            <input 
                type="text" 
                className='border border-slate-500 px-8 py-2'
                placeholder='Topic Description'
                onChange={e => setDescription(e.target.value)}
                value={description}
            />

            <button type='submit' className='bg-green-600 font-bold text-white py-2 px-5 w-fit'>Add Topic</button>
        </form>
    </div>
  )
}

export default AddTopic