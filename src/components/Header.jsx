import React from 'react'

const Header = ({title = "Default Title"}) => {

  return (
    <header style={{
        backgroundColor: 'blue',
        color: '#fff',
    }
    }>
        <h1>{title}</h1>
    </header>
  )
}

// Header.defaultProps = {
//     title: "Default Title"
// }

export default Header