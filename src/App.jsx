import { useState } from 'react'
import Grid from './components/Grid'
import Option from './components/Option'
import './styles/globals.css'

const n = 10
const pickerColors = ['blue', 'green', 'yellow', 'red', 'gray']

function App() {
  const [color, setColor] = useState('gray')
  const handleClick = (color) => setColor(color)

  return (
    <div className="w-screen h-screen grid place-content-center">
      <section className="bg-white rounded-2xl p-8 text-black">
        <h1 className="text-2xl mb-4">Grid Drawer</h1>
        <Grid n={n} color={color} />
        <div className="flex items-center p-4 gap-4">
          <h2>Color picker:</h2>
          <div className="flex items-center">
            {pickerColors.map((colorOption) => (
              <Option
                color={colorOption}
                handler={handleClick}
                key={colorOption}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
