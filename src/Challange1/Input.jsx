import React from 'react'

const input = ({colorValue, setColorValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add color name:</label>
        <input 
            autoFocus
            type='text'
            placeholder='Add color Name'
            value={colorValue}
            onChange={(e)=> setColorValue(e.target.value)}
            required/>
            <button onClick={() => setIsDarkText(!isDarkText)}>Toggle text color</button>
    </form>
  )
}

export default input