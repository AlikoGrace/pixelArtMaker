import React from 'react'

const GridForm = ({
  newHeight,
  setNewHeight,
  newWidth,
  setNewWidth,
  handleGrid

}) => {
  return (
    <form action="">
        <label htmlFor="">Grid Height</label>
      <input 
      type="number"  
         className='border
          border-zinc-600 m-4 px-2'
          min={1}
           value={newHeight}
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
  )
}

export default GridForm