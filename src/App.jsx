import {useState} from 'react'
import Button from './Button'
function App() {
 const [color, setColor] = useState("olive")

 let changeColor = (colour) => {
  setColor(colour)
 }
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}>
    

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

    <Button color={"red"} changeColor={changeColor}/>
    <Button color={"green"} changeColor={changeColor}/>
    <Button color={"blue"} changeColor={changeColor}/>
    <Button color={"olive"} changeColor={changeColor}/>
    <Button color={"grey"} changeColor={changeColor}/>
    <Button color={"yellow"} changeColor={changeColor} text={"black"}/>
    <Button color={"pink"} changeColor={changeColor} text={"black"}/>
    <Button color={"purple"} changeColor={changeColor}/>
    <Button color={"white"} changeColor={changeColor} text={"black"}/>
    <Button color={"black"} changeColor={changeColor} />
    {/* <button className='outline-none px-4 py-1 rounded-full bg-red-600 shadow-lg' onClick={()=>setColor("red")}>
      Red</button>
    <button className='outline-none px-4 py-1 rounded-full bg-green-600 shadow-lg'>
      Green</button>
    <button className='outline-none px-4 py-1 rounded-full bg-blue-600 shadow-lg'>
      Blue</button>
    <button className='outline-none px-4 py-1 rounded-full bg-yellow-600 shadow-lg'>
      Yellow</button> */}
      </div>
    </div>
    </div>
    
  )
}

export default App
