import React from 'react'

const Footer = ({listSize}) => {

    const today = new Date();

    const footerStyle = {
        backgroundColor: "royalBlue",
        color: "#fff"
    }

  return (
    <footer style={footerStyle}>
        <p>Copyright &copy; {today.getFullYear()}</p>
        <p>{listSize} {listSize !== 1 ? "items": "item"}</p>
    </footer>
  )
}

export default Footer;