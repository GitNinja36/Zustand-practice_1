import { create } from 'zustand'
import './App.css'

const useStore = create((set) => ({
  num : 0,
  increaseNumber : ()=>set((state)=>({num : state.num + 1})),
  decreaseNumber : () =>set((state)=>({num: state.num -1}))
}))

function App() {
  const {num, increaseNumber, decreaseNumber} = useStore();
  return (
    <>
    <div className='container'>
      <div>
        <span>
          {num}
        </span>
      </div>
      <div>
        <button onClick={increaseNumber}>increase</button>
        <button onClick={decreaseNumber}>decrease</button>
      </div>
    </div>
    </>
  )
}

export default App
