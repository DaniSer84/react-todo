import Task from "../types/Task.interface"

type TaskCounterProps = {
   list: Task[]
}

export default function TaskCounter({list}: TaskCounterProps) {
   return <h4>{list.length} task in questa lista</h4>
}