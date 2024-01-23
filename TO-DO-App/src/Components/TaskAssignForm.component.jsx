const TaskAssignFrom = () => {
  return (
    <form className="text-2xl grid-rows-3 my-8">
      <p className="font-[300] text-base col-span-full pl-2">
        Add Your Daily Routine Tasks
      </p>
      <input
        placeholder="Add The Task"
        required
        className="font-[500] px-[2rem] py-[1rem] border-2 hover:border-2 border-[#1876f275] hover:border-[#316FF6] rounded-[.8rem] duration-300 outline-none focus:border-[#316ff6] focus:bg-[#316ff601]"
        type="text"
      />
      <button
        className="hover:bg-[#316FF6] border-2 border-solid border-[#316ff6] outline-none hover:text-white hover:border-[#316ff6] duration-300 py-[1rem] px-[2.5rem] rounded-[.9rem] font-[500] ml-[6.5rem] focus:border-[#316ff6]"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TaskAssignFrom;
