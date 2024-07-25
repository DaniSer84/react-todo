import Button from "./Button"
import { useState, useRef, useEffect, useContext } from "react"
import { TasksDispatchContext } from "../tasksContext"
import Task from "../types/Task.interface"

type TaskTypeProps = {
    task: Task
}

export default function Todo({task}: TaskTypeProps) {

    const dispatch = useContext(TasksDispatchContext)
    const editInputRef = useRef<HTMLInputElement>(null!)
    const [isEditing, setIsEditing] = useState(false)
    const [newTaskName, setNewTaskName] = useState(task.name)

    // useEffect è una funzione e un array con delle dependencies per triggerare questa funzione.  
    useEffect(() => {
        if (isEditing) {
            editInputRef.current.focus()
        }
        // se noi ritorniamo qualcosa, il valore di return viene eseguito quando il componente viene smontato: il componente viene creato (montato) e ogni volta che facciamo il re-render, è come se il componente venisse smontato, o se navigo in un altra sezione dell'app e quel componente non viene più visualizzato. Questa funzione di return può fare qualsiasi cosa: in questo caso non servirebbe a nulla, ma se per esempio facciamo una fetch a un sito esterno, stiamo eseguendo una richiesta http, la promise rimane pending, ma se io continuo a re-renderizzare il compnente praticamente continuo a creare delle ipotetiche chiamate http, con il ritorno posso chiudere quella chiamata, quindi può servire per ottimizzare il traffico.
        // return (
        //     console.log('smontato')
        // )
    }, [isEditing])
    
    function handleNewTaskName(e: React.ChangeEvent<HTMLInputElement>) {
        setNewTaskName(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch({
            type: 'edited',
            id: task.id,
            name: newTaskName
        })
        setIsEditing(false)
    }

    function deleteTask(id: string) {
        dispatch({
            type: 'deleted',
            id
        })
    }

    function toggleTaskCompletion(id: string) {
        dispatch({
            type: 'toggled',
            id
        })
    }

    let taskView = (
        <div className='task'>
            <input 
                type='checkbox' 
                onChange={() => toggleTaskCompletion(task.id)}
                checked={task.completed}
            />
            <span>{task.completed ? (<del className="done">{task.name}</del>) : (task.name)}
            </span>
            <Button 
                action={'Modifica'}
                handleClick={() => setIsEditing(true)}
                isActive={false}
                type=""
            />
            <Button 
                action={'Elimina'}
                handleClick={() => deleteTask(task.id)}    
                isActive={false}
                type=""
            />
        </div>)

    let taskEdit = (
        <div className='task'>
            <form onSubmit={handleSubmit} id="form">
                <label htmlFor=''>
                    Modifica la task:
                </label>
                <input 
                    type='search'
                    value={newTaskName}
                    onChange={handleNewTaskName}
                    ref={editInputRef}
                />
            </form>
            <Button 
                action={'Cancella'}
                handleClick={() => setIsEditing(false)}
                isActive={false}
                type=""
            />
            <Button 
                action={'Salva'}
                type='submit'
                handleClick={handleSubmit}    
                isActive={false}
            />
        </div>
    )
    
    return (
        <li>
            {isEditing ? taskEdit : taskView}
        </li>
    )
}