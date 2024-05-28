import { useState,useEffect } from "react";
import Todo from "./components/Todo";

const localData = () => {
  let list = localStorage.getItem("data")
  if(list){
    return JSON.parse(list)
  }else{
    return []
  }
}

function App() {
  const [newTask,setNewTask]=useState("")
  const [todoList,setToDoList]=useState(localData())

  // add task
  const addTask=(e)=>{
    e.preventDefault()
    if(!newTask){
      alert("please enter something")
    }else{
      let task={
        id:todoList.length===0? 1:todoList[todoList.length-1].id+1,
        taskName:newTask,
        completed:false

      }
      let newToDoList=[...todoList,task]
      setToDoList(newToDoList)
      setNewTask("")
    }
  }

  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(todoList))
  })




  // delete task
  const deleteTask=(id)=>{
    let newTodoList= todoList.filter((item) => {
      return item.id !== id
    })
    setToDoList(newTodoList)
  }

  // edit task
 const editTask=(id)=>{
  let changeTask=todoList.find((item)=>{
    return item.id===id
  })
  let newTodoList=todoList.filter((item)=>{
    return item.id!==id

  })
  setNewTask(changeTask.taskName)
  setToDoList(newTodoList)

 }

 const isComplete=(id)=>{
  setToDoList(todoList.map((item)=>{
    if(item.id===id){
      return {...item,completed:true}
    }
    else{
      return item
    }
  }))


 }

  return (
    <div className="flex flex-col justify-start items-center py-24 bg-[#111111] text-white min-h-screen">
      <h1 className="text-4xl font-semibold text-cyan-300">TO DO APP</h1>
      <form className="mt-10 flex gap-4">
      <input onChange={(e)=>{setNewTask(e.target.value)}} value={newTask} type="text" placeholder="Enter the task" className="text-white border-none outline-none w-[300px] rounded-md tracking-wider px-4 py-2 bg-gray-700"/>
      <button onClick={addTask} className="px-7 py-3 bg-lime-900 py-2 rounded-md">add</button>
      </form>
      <div className="pt-10">
     
     {
      todoList && todoList.map((item)=>{
        return (
         <Todo key={item.id} taskName={item.taskName} id={item.id} editTask={editTask}  deleteTask={deleteTask} completed={item.completed} isComplete={isComplete}/>
        )
      })
     }
      </div>
    </div>
  );
}

export default App;

