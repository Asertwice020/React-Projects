import Task from './Task.component'
import EmptyMessage from './EmptyMessage.component'

const TaskList = () => {
  return (
    <div className="overflow-x-hidden hide-scrollbar flex flex-col justify-start pt-3 gap-y-4">
      {/* TASK WILL APPEND HERE... */}
      <Task />
      <Task />
      <Task />
      <EmptyMessage />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default TaskList