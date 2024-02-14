const Buttons = ({ setValuesClicked, pass }) => {

  return (
    <div className='flex gap-10 justify-center h-full'>
      {
        pass.map((e, index) => {
          return <div className='bg-blue-400 rounded-full h-20 w-20 
          items-center cursor-pointer' style={{ backgroundColor: e === 1 ? 'red' : 'blue' }} onClick={() =>
              setValuesClicked(index)} key={index}>
            <p className='text-center h-full'>{index}</p>
          </div>
        })
      }
    </div>
  )
}

export default Buttons
