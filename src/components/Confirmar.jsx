

const Confirmar = ({ checkPassword }) => {
  return (
    <div>
      <button onClick={checkPassword} className="px-3 py-1 bg-green-400 rounded-lg hover:bg-green-300">Confirmar</button>
    </div>
  )
}

export default Confirmar
