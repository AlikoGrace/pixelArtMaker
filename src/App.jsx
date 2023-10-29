
import React from 'react'
import { useState } from 'react'
const App = () => {
  const [newHeight, setNewHeight] = useState(1)
  const [newWidth, setNewWidth] = useState(1)
  const [grid, setGrid]=useState([])


  const handleGrid=(e)=>{

    e.preventDefault()
    const newGrid=[]

    for (let i=0; i < newHeight; i++){
         const row=[]

         for(let j=0; j< newWidth;j++){
          // this will be each cell in every row
          row.push(0)
         }
         newGrid.push(row)
    }
    setGrid(newGrid)
  }
  return (
    <>
    <main className='flex flex-col h-screen items-center justify-center'>
    <h1 className='text-xl text-black'>Pixel art MAKER</h1>
    <h2>Choose Grid size</h2>
    <form action="">
      <label htmlFor="">Grid Height</label>
      <input type="number"  
      className='border
       border-zinc-600 m-4 px-2'
        min={1} value={newHeight}
        onChange={e=>setNewHeight(e.target.value)}/>
      <label htmlFor="">Grid Width</label>
      <input type="number" 
      className='border
       border-zinc-600 m-4 px-2
       ' min={1} 
       value={newWidth}
       onChange={e=>setNewWidth(e.target.value)} />

       <button className='px-3 py-1 border border-zinc-300
        bg-zinc-300 text-xs rounded-sm shadow-sm 
         hover:bg-zinc-600 hover:text-white' onClick={handleGrid}>submit</button>
    </form>

    {grid.length > 0 && (
  <div className="grid grid-cols-${newWidth}"
  style={{
    gridTemplateColumns: `repeat(${newWidth}, minmax(0, 1fr))`,
  }}
  >
    {grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className="h-10 w-10 border border-zinc-600"
        >
          {/* You can add more styling or functionality here */}
        </div>
      ))
    )}
  </div>
)}


    </main>
    </>
  )
}

export default App