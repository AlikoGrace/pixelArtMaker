
import React from 'react'
import { useState } from 'react'
import GridForm from './components/GridForm'
import Grid from './components/Grid'
const App = () => {
  const [newHeight, setNewHeight] = useState(1)
  const [newWidth, setNewWidth] = useState(1)
  const [grid, setGrid]=useState([])
  const [selectedColor, setSelectedColor]=useState('')


  const handleGrid=(e)=>{

    e.preventDefault()
    const newGrid=[]

    for (let i=0; i < newHeight; i++){
         const row=[]

         for(let j=0; j< newWidth;j++){
          // this will be each cell in every row
          row.push(selectedColor)

         }
         newGrid.push(row)
    }
    setGrid(newGrid)
  }
  const handleColorChange=(color)=>{
       setSelectedColor(color)
  }

  const handleCellCLick=(rowIndex,colIndex)=>{
    const updatedGrid=[...grid];
    updatedGrid[rowIndex][colIndex]=selectedColor;
    setGrid(updatedGrid)
  }
  return (
    <>
    <main className='flex flex-col h-screen items-center justify-center'>
    <h1 className='text-xl text-black'>Pixel art MAKER</h1>
    <h2>Choose Grid size</h2>

    <GridForm
       newHeight={newHeight}
       newWidth={newWidth}
       setNewHeight={setNewHeight}
       setNewWidth={setNewWidth}
       handleGrid={handleGrid}
    />
    
   

<div>
  <h1>Pick A Color</h1>
  <input type="color"
  value={selectedColor}
    onChange={(e)=>handleColorChange(e.target.value)}
   />
  
  <h2>Design Canvas</h2>
</div>


{grid.length > 0 && (
    <Grid grid={grid} newWidth={newWidth} onCellClick={handleCellCLick}/>
)}

    </main>
    </>
  )
}

export default App