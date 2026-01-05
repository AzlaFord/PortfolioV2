import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center mt-10 gap-3 '>
          <div className='border-1 w-100 h-100 rounded-sm'>

          </div>
          <div className='border-1 w-100 h-100 rounded-sm' >

          </div>
      </div>
    </>
  )
}

export default App
