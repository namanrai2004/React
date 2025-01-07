import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")
  let colors = ["red", "green", "blue", "orange", "white", "pink", "olive"]

  let random = () => {
    const rand = Math.floor(Math.random() * colors.length)
    console.log(colors[rand]);
    return colors[rand]
  }


  return (
    <>
      <div className="w-full h-screen duration-500 flex justify-center items-center"
        style={{ backgroundColor: color }}>
        <div className="flex flex-wrap justify-center bottom-12 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-3 font-semibold mx-1">
            <button onClick={() => setColor(colors[0])} className="bg-red-800 px-4 py-2 rounded-full text-white">Red</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-3 font-semibold mx-1">
            <button onClick={() => setColor(colors[1])} className="bg-green-800 px-4 py-2 rounded-full text-white">Green</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-3 font-semibold mx-1">
            <button onClick={() => setColor(colors[2])} className="bg-blue-800 px-4 py-2 rounded-full text-white">Blue</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-3 font-semibold mx-1">
            <button onClick={() => setColor(colors[3])} className="bg-orange-300 px-4 py-2 rounded-full text-white">Orange</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-3 font-semibold mx-1">
            <button onClick={() => setColor(random())} className="bg-orange-300 px-4 py-2 rounded-full text-white">Random</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
