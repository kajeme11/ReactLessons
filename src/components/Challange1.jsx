import React from 'react'
import { useState } from 'react'

const Challange1 = () => {

  const [color, setColor] = useState('');
  return (
    <div>
        <div style={{width: "200px", height: "200px", border: "1px solid black", padding:"25%", backgroundColor:`${color}`}}
        className='color-square'>{!color.length ? "Empty Value" : color}</div>

        <label htmlFor='color'></label>
        <input 
            autoFocus
            id='color'
            type="text"
            placeholder='Add a color'
            onChange={(e) => setColor(e.target.value)}/>
    
    </div>
  )
}

export default Challange1