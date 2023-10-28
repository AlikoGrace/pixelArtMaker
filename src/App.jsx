
import React from 'react'

const App = () => {
  return (
    <>
    <main className='flex flex-col h-screen items-center justify-center'>
    <h1 className='text-xl text-black'>Pixel art MAKER</h1>
    <h2>Choose Grid size</h2>
    <form action="">
      <label htmlFor="">Grid Height</label>
      <input type="number"  className='border border-zinc-600 m-4' min={1} value={1}/>
      <label htmlFor="">Grid Width</label>
      <input type="number" className='border border-zinc-600 m-4' min={1} value={1}/>
    </form>

    </main>
    </>
  )
}

export default App