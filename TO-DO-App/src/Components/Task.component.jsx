const Task = ({hello, world}) => {
  return (
    <div id="task1"
    className="border-2 text-lg gap-2 rounded-lg border-solid flex w-[38rem] mr-[5px] h-[5.5rem] justify-between items-center border-[#7d95ff]">
      <input
        className="cursor-pointer completion-mark size-[2.5rem] ml-1"
        id="completionMark"
        type="checkbox" />

        <div className="flex flex-col overflow-y-hidden h-[5rem] jusify-center border border-solid border-transparent">
          <h3 id="taskDescription"
          className="overflow-y-scroll text-[1.6rem] leading-[3.5rem] truncate border border-solid border-transparent font-[500] h-[65%]"
          >{hello}</h3>

          <p className="font-[500] ml-[1px] text-base uppercase h-[30%]">{world}</p>
        </div>

        <button
        className="cursor-pointer bg-[#316FF6] focus:outline-black outline-offset-[-2px] border-2 border-solid border-[#316ff6] outline-none text-white p-[1rem] rounded-[.9rem] font-[400] focus:border-[#316ff6]">EDIT</button>

        <button
        className="cursor-pointer bg-[#e91c1c] focus:outline-black outline-offset-[-2px] border border-solid border-[#ff4141] outline-none text-white p-[1rem] rounded-[.9rem] font-[400] focus:border-[##e91c1c] mr-[2px]">DELETE</button>
    </div>
  )
}

export default Task