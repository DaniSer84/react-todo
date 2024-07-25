 import { createContext, useContext, useReducer } from "react";
import tasksReducer from './tasksReducer';
import Task from "./types/Task.interface";
import FilterFunction from "./types/FilterFunction.type";
import TaskAction from "./types/TaskAction.Type";

type TaskContextType = Task[]

export const TasksContext = createContext<TaskContextType>(null!)
export const TasksDispatchContext = createContext<React.Dispatch<TaskAction>>(null!)

// l'argomento di JSON.parse non può essere null, quindi facciamo che o ritorna tasks o stringa vuota
const initialData = JSON.parse(localStorage.getItem('tasks') || '') || []

type TaskProviderProps = {
    children: JSX.Element
}

// children sarà un elemento di tipo jsx, cioè tutti i children (App)
function TaskProvider({children}: TaskProviderProps) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialData)

    // voglio ritornare i due provader da Esercizio
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch} >
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export function useTasks() {
    return useContext(TasksContext)
}

export function useFilterTasks(filter: FilterFunction) {
    // il filtro che arriva sarà una delle funzioni di FILTERS
    let tasks = useContext(TasksContext)
    const filteredTaskList: Task[] = tasks.filter(filter)
    return filteredTaskList
} 

export default TaskProvider