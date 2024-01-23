import { Key } from '@mui/icons-material';
import OuterBgGredient from './Components/OuterBgGredient.component'
import Task from './Components/Task.component'

function App() {

  const propsData = [{
    name: 'sumit',
    age: 20
  },
  {
    name: 'amit',
    age: 22
  },
  {
    name: 'mohit',
    age: 24
  },
  {
    name: 'shivam',
    age: 19
  }]

  const addTask = (e) => {
    e.preventDefault();
    console.log(typeof e.target.parentElement[0].value);
  }

  return (
    <>
    <main className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center flex-col text-7xl font-popppins font-bold">
      <h1>TO DO LIST</h1>
      <div className="bg-[#F5F5F5] w-1/3 h-5/6 rounded-2xl mt-6 bg-tr px-14 overflow-hidden">
        <form className="text-2xl grid-rows-3 my-8">
          <p className="font-[300] text-base col-span-full pl-2">Add Your Daily Routine Tasks</p>
          <input 
          placeholder="Add The Task"
          required
          className="font-[500] px-[2rem] py-[1rem] border-2 hover:border-2 border-[#1876f275] hover:border-[#316FF6] rounded-[.8rem] duration-300 outline-none focus:border-[#316ff6] focus:bg-[#316ff601]"
          type="text" />
          <button onClick={(e) => addTask(e)}
          className="hover:bg-[#316FF6] border-2 border-solid border-[#316ff6] outline-none hover:text-white hover:border-[#316ff6] duration-300 py-[1rem] px-[2.5rem] rounded-[.9rem] font-[500] ml-[6.5rem] focus:border-[#316ff6]"
          type="submit">Add</button>
        </form>

        <div className="flex h-[40.1rem] border-t-solid border-t-2 border-t-[#7d95ff] rounded-b-[.8rem] bg-[#316ff609]">
          {/* TASK LIST */}
          <div className="overflow-x-hidden hide-scrollbar flex flex-col justify-start">
            {/* TASK WILL APPEND HERE... */}
            {/* <h1 className='w-[38.5rem] text-center'>Empty!</h1> */}
            <Task />
            {propsData.map((profile) => {
              return <Task key={profile.name} hello={profile.name} world={profile.age} />
            })}
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App