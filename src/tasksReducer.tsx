import Task from "./types/Task.interface"
import TaskAction from './types/TaskAction.Type'

export default function tasksReducer(tasks: Task[], action: TaskAction) {
    const {type} = action    

    switch(type) {
        //add task
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    name: action.name,
                    completed: false
                }
            ]
        }
        // edit task
        case 'edited': {
            return tasks.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task, 
                        name: action.name
                    }
                } 
                return task
            })
        }
        // delete task
        case 'deleted' : {
            return tasks.filter(task => task.id !== action.id)
        }
        // change complete
        case 'toggled': {
            return tasks.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task, 
                        completed: !task.completed
                    }
                } 
                return task
            })
        }
        default: {
            // questo non viene raggiunto: quando utiliziamo una funzione di default, non viene raggiunta.. Quindi estraiamo la proprietà type, così so che type può essere solo una delle 4 casistiche, se ce n'è una quinda che non è prevista lancio un errore (per quedto qui type è never. ??)
            throw Error(`Azione non riconosciuta: ${type}`)
        }
    }
    
}