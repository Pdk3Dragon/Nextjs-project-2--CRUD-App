"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function EditTopicForm({topic}) {
  const [newTitle, setNewTitle] = useState(topic.title);
  const [newDescription, setNewDescription] = useState(topic.description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!newTitle || !newDescription){
      return alert("Title and Description are required")
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${topic?._id}`, {
        method:"PUT",
        headers:{
          "Content-type" : "application/json"
        },
        body: JSON.stringify({ newTitle, newDescription })
      });

      if(res.ok){
        router.push('/')
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
                onChange={e => setNewTitle(e.target.value)}
                value={newTitle}
            />
            <input 
                type="text" 
                className='border border-slate-500 px-8 py-2'
                placeholder='Topic Description'
                onChange={e => setNewDescription(e.target.value)}
                value={newDescription}
            />

            <button type='submit' className='bg-green-600 font-bold text-white py-2 px-5 w-fit'>Update Topic</button>
        </form>
    </div>
  )
  
}

export default EditTopicForm