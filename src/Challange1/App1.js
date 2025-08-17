import { useState } from "react"
import Input from "./Input"
import Square from "./Square"
import './App1.css'

const App1 = () => {

  const [colorValue, setColorValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className='app1'>
        <Square 
          colorValue={colorValue}
          isDarkText={isDarkText}/>
        <Input 
          colorValue={colorValue}
          setColorValue={setColorValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}/>

    </div>
    
  )
}

export default App1