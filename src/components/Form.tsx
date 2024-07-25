import { TasksDispatchContext } from "../tasksContext"
import Button from "./Button"
import { useRef, useContext } from "react"
import { nanoid } from 'nanoid'


export default function Form() {
    // gli fornisco il context: faccio una const: dispatch mi consentirà di eseguire i dispatch direttamente da Form
    const dispatch = useContext(TasksDispatchContext)
    // const [name, setName] = useState('')
    const inputRef = useRef<HTMLInputElement>(null!)
    // function handleChange(e) {
    //     // dentro l'evento ci sono tutte le proprietà, tra cui il target e il value. 
    //     // console.log(e.target.value)
    //     // A questo punto posso impostare la variabile name utilizzando il value:
    //     setName(e.target.value) //quando premo un tasto imposto il valore, il valore è la variabile name che viene ripassato all'input, è una sorta di ciclo. Ecco cos'è un controlled component, è un input che come valore ha una variabile di uno stato, lo stesso stato viene riaggiornato al variare della variabile name, con onChange. Un componente uncontrolled non ha nessuna tipologia di controllo da parte di react, quindi se vogliamo leggere il contenuto dobbiamo affidarci a uno useRef.  
    //     //quando ho un componente controllato, triggherando useSTate, ogni volta che io digito qualcosa il componente viene sempre renderizzato la prima volta che viene caricato in react, ma ora viene ri-renderizzato ogni volta che digito qualcosa. Può essere utile se per esempio ho una password cheve avere almeno 8 caratteri, perché so quanti caratteri l'utente sta digitando al momento.  
    // }
    // in questo caso potremmo usare uno use ref
    function handleAddTask() {
        // invece dello stato uso il context:
        dispatch({
            type: 'added',
            id: 'task-' + nanoid(),
            name: inputRef.current.value
        })
        inputRef.current.value = ''

        // addTask(inputRef.current.value)
    }

    return (
        <>
            <h4>Che cosa devi fare?</h4>
            <div className='input-container'>
                <input 
                className='input'
                // value va a prendere la variabile name
                // value={name} 
                // con questo listener viene controllato il contenuto dell'input e quando viene inserito un nuovo carattere viene definita una funzione:
                // onChange={handleChange}
                //in questo caso uso useRef
                ref={inputRef}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault()
                        inputRef.current.value !== '' && handleAddTask()
                    }
                }}
                />
                <Button 
                action={'Aggiungi'}
                handleClick={() => inputRef.current.value !== '' && handleAddTask()}
                isActive={false}
                type=""
                />
            </div>
        </>
    )
}