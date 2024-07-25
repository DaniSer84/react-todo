
// cHE cos'è un'azione? (vedi TaskReducer) Action avrà sens'altro una proprietà type. Poi a seconda dell'azione avrà un id, un booleano, ecc..
type TaskAction = {
    type: 'added',
    name: string,
    id: string
} |
{
    type: 'edited',
    id: string,
    name: string
} |
{
    type: 'deleted',
    id: string
} |
{
    type: 'toggled',
    id: string
}

export default TaskAction