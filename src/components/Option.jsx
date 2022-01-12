function Option({ color, handler }) {
  return (
    <button
      className={`${color} square selector`}
      onClick={() => handler(color)}
    />
  )
}

export default Option
