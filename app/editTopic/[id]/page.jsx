"use client"

import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicDetails = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to fetch Topic Details")
  }
  return res.json();

  } catch (error) {
        console.log(error, "===GET all Topic Details Error");
    
  }
}

async function EditTopicPage({params}) {
  const { id } = params;
  console.log("🚀 ~ file: page.jsx:6 ~ EditTopicPage ~ id:", id);
  const { topic } = await getTopicDetails(id);
  console.log("🚀 ~ file: page.jsx:25 ~ EditTopicPage ~ topic:", topic);
  return (
    <EditTopicForm topic={topic} />
  )
}

export default EditTopicPage
