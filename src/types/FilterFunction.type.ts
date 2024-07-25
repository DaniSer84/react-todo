import Task from "./Task.interface"

// Possiamo definire come è fatta una di queste funzioni di FILTERS: FILTERS può essere tipizzato come un oggetto al cui interno avrà necessariamente queste 3 chiavi e il valore sarà una funzione. E potremmo essere più specifici su queste funzioni, dicendo che possono avere dei parametri vuoti o di tipo task e che ritornano sempre dei buleani. 

// con il ? indico che può avere o meno un parametro task. L'ho tolto perché mi dava problemi sotto..
type FilterFunction = ((task: Task) => boolean)

export default FilterFunction