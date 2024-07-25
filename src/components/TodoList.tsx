import TaskCounter from './TaskCounter'
import { useFilterTasks } from '../tasksContext'
import Todo from './Todo'
import FilterFunction from '../types/FilterFunction.type'

type TodoListProps = {
    selectedFilter: FilterFunction
}

// la prop che gli arriva è una FilterFunction:
export default function TodoList({selectedFilter}: TodoListProps) {

    const taskList = useFilterTasks(selectedFilter)
    return (
        <div>
            <TaskCounter list={taskList}/>
            {
            taskList.length > 0 ?
            <ul  className='task-container'>
            {taskList.map(task => (
                <Todo
                    key={task.id}
                    task={task}
                />
            ))}
            </ul> :
            <h3 className='task-container'>* Nessun task in questa lista *</h3>
            }
        </div>
    )
}