import React, { useState } from 'react'

function NewTask({onAdd}) {
  const[enteredTask, setEnteredTask] = useState('')  
  
  function handleClick(){
    onAdd(enteredTask)
    setEnteredTask('')
  }

  return (
    <div className='flex items-center gap-4'>
        <input className='w-64 px-2 py-1 rounded-sm bg-stone-200' value={enteredTask} onChange={(e)=>setEnteredTask(e.target.value)} onClick={handleClick} />
        <button className='text-stone-700 hover:text-stone-950'>Add Task</button>
    </div>
  )
}

export default NewTask