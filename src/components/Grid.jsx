import React from 'react'

const Grid = ({
    grid,
    newWidth
}) => {
  return (


<div className="grid grid-cols-${newWidth}"
  style={{
    gridTemplateColumns: `repeat(${newWidth}, minmax(0, 1fr))`,
    // this means repeat the col to newitdth times, and same size for all
  }}
  >
    {grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className="h-10 w-10 border border-zinc-600"
        >

        </div>
      ))
    )}
  </div>
    
  )
}

export default Grid