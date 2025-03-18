import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt} from 'react-icons/hi'

const getAllTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store",
        });

        if(!res.ok){
            throw new Error("Failed to fetch Topics")
        }
        return res.json();
    } catch (error) {
        console.log(error, "===GET all Topics Error");
    }
}

async function TopicList() {
    const { topics } = await getAllTopics()


  return (
    <div>
        {topics.map((topic, key) => (
        <div key={key} className='p-4 border border-slate-300 my-3 flex justify-between items-start gap-5'>
            <div>
                <h2 className='font-bold text-2xl'>{topic?.title}</h2>
                <div>{topic?.description}</div>
                <div>{topic?.createdAt}</div>
            </div>
            <div className='flex gap-2'>
                <RemoveBtn id={topic?._id} />
                <Link href={`/editTopic/${topic?._id}`} >
                    <HiPencilAlt className='text-green-500' size={24}/>
                </Link>
            </div>
        </div>

        ))}
        

    </div>
  )
}

export default TopicList