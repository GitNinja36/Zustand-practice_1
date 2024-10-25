import './App.css'
import { create } from 'zustand'
import {devtools, persist} from 'zustand/middleware'

const useStore = create((set) => ({
  num : 0,
  increaseNumber : () => set((state)=>({num : state.num + 1})),
  decreaseNumber : () => set((state)=>({num: state.num -1})),
  increaseBy : (n) => set((state)=>({num : state.num + n})),
  decreaseBy : (n) => set((state)=>({num : state.num - n})),
  reset : () => set({num : 0})
}))

function App() {
  const {num, increaseNumber, decreaseNumber, increaseBy, decreaseBy, reset} = useStore();
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
        <button onClick={() => increaseBy(10)}>increase by 10</button>
        <button onClick={() => decreaseBy(10)}>decrease by 10</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
    </>
  )
}

export default App
