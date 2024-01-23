import TodoHeading from './TodoHeading.component'
import Forground from './Foreground.component'

const OuterBgGredient = () => {
  return (
    <main className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center flex-col text-7xl font-popppins font-bold">
      <TodoHeading />
      <Forground />
    </main>
  )
}

export default OuterBgGredient