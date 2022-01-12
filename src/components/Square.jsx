import { useState } from 'react'

function Square({ color }) {
  const [currentColor, setCurrentColor] = useState('gray')
  const handleNewColor = () => setCurrentColor(color)

  return (
    <button
      className={`${currentColor} square cursor-pointer`}
      onClick={handleNewColor}
    />
  )
}

export default Square
