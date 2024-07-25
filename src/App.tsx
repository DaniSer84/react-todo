import './App.css'
import TodoList from './components/TodoList'
import Filters from './components/Filters'
import Form from './components/Form'
import { useState, useEffect } from 'react'
import { useTasks } from './tasksContext'
import Filter from './types/Filter.type'
import FiltersType from './types/FiltersType.type'

const FILTERS: FiltersType = {
    Tutti: () => true,
    Rimasti: (task) => !task.completed,
    Completati: (task) => task.completed
}

export default function App() {

    // questa sintassi significa che lo stato può essere solo una delle 3 stringhe definite in type Fileter, se metto una stringa vuota o altro mi da errore. 
    const [filter, setFilter] = useState<Filter>('Tutti')
    const tasks = useTasks()

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    return (
        <>
            <div className='main-container'>
                <h2 className='main-title'>I miei task</h2>
                <div className='task-app'>
                    <Form/>
                    <Filters
                        setFilter={setFilter}
                        filters={FILTERS}
                        filter={filter}
                    />
                    <TodoList
                    // filter corrisponde ad una chiave dell'oggetto FILTERS (una delle funzioni) -> l'oggetto viene selezionato in base a una viariabile che abbiamo messo nello state, che corrisponde ad una stringa, che viene dal pulsante. Vado a tipizzare sopra --> 
                        selectedFilter={FILTERS[filter]}
                    />
                </div>
            </div>
        </>
    )
}