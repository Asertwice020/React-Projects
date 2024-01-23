import TaskAssignForm from './TaskAssignForm.component'
import TaskListOuter from './TaskListOuter.component'

const Foreground = () => {
  return (
    <div className="bg-[#F5F5F5] w-1/3 h-5/6 rounded-2xl mt-6 bg-tr px-14 overflow-hidden">
      <TaskAssignForm />
      <TaskListOuter />
    </div>
  )
}

export default Foreground