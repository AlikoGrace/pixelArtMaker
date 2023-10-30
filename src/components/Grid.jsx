import React from 'react'

const Grid = ({
    grid,
    newWidth,
    onCellClick
}) => {
  return (


<div className="grid grid-cols-${newWidth}"
  style={{
    gridTemplateColumns: `repeat(${newWidth}, minmax(0, 1fr))`,
    // this means repeat the col to newitdth times, and same size for all
  }}
  >
    {grid.map((row, rowIndex) =>
      row.map((cellColor, colIndex) => (
        <div
        key={`${rowIndex}-${colIndex}`}
        className="h-10 w-10 border border-zinc-600"
        style={{ backgroundColor: cellColor || 'transparent' }}
        onClick={() => onCellClick(rowIndex, colIndex)}
      ></div>
      ))
    )}
  </div>
    
  )
}

export default Grid