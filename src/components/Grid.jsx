import Square from './Square'

function Grid({ n, color }) {
  const grid = []
  for (let square = 0; square < n * n; square++) {
    grid.push(<Square key={square} color={color} />)
  }
  // To Do: grid-cols dinámico, problem: tailwind pseudo treeshaking
  return <div className="grid grid-cols-10 gap-1 mb-8">{grid}</div>
}

export default Grid
