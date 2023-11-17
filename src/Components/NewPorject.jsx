import React, {useRef} from 'react'
import Input from './Input'
import Modal from './Modal'

function NewPorject({onAdd, onCancel}) {
  const modal = useRef()
  const title = useRef()
  const description = useRef()
  const duedate = useRef()

  function handleSave(){
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = duedate.current.value

    if(enteredTitle.trim() === '' || 
    enteredDescription.trim() === '' || 
    enteredDueDate.trim() === ''){
        modal.current.open()
        return;
    }

    onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate
    })
  }

  return(
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className='text-xl font-bold text-stone-500 mt-4 my-4' >Invalid Input</h2>
        <p className='text-stone-400 mb-4'>OOps ... Looks like you forgot to enter a value</p>
        <p className='text-stone-400 mb-4'>Please make sure you enter a valid input</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
    <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
            <button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
        <li>
            <button className='px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button></li>
    </menu>
    <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" isTextarea/>
        <Input ref={duedate} label="Due Date" type='date' />
    </div>
  </div>
    </>
    
  )
  
}

export default NewPorject