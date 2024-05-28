import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

const Todo = ({ taskName,id,deleteTask, editTask,completed,isComplete}) => {
  return (
    <div className='flex justify-between w-[300px]'>
            <h1 className={`cursor-pointer ${completed?"line-through text-lime-500" :"text-gray-300 hover:text-white"}`}><span className="mr-2">{id}</span>{taskName}</h1>
            <DoneIcon onClick={()=>{isComplete(id)}} className='text-lime-500'/>
            <EditIcon onClick={()=>{editTask(id)}} className='text-pink-500'/>
            <DeleteIcon onClick={()=>{deleteTask(id)}} className='text-red-500'/>

            
    </div>
  )
}

export default Todo