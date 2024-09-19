import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="h-screen w-screen duration-200" style={{background: color}}>
        <div className="fixed bottom-12 inset-x-0 flex justify-center">
          <div className="flex justify-center gap-3 bg-white px-5 py-3 rounded-3xl shadow-lg">
            <button className="w-20 py-1 bg-red-700 rounded-full text-white" onClick={()=>{setColor("red")}}>Red</button>
            <button className="w-20 py-1 bg-blue-700 rounded-full text-white" onClick={()=>{setColor("blue")}}>Blue</button>
            <button className="w-20 py-1 bg-green-700 rounded-full text-white" onClick={()=>{setColor("green")}}>Green</button>
            <button className="w-20 py-1 bg-yellow-500 rounded-full text-white" onClick={()=>{setColor("yellow")}}>Yellow</button>
            <button className="w-20 py-1 bg-purple-700 rounded-full text-white" onClick={()=>{setColor("purple")}}>Purple</button>
            <button className="w-20 py-1 bg-black rounded-full text-white" onClick={()=>{setColor("black")}}>Black</button>
          </div>
        </div>
      </div>
    </> 
  )
}

export default App
