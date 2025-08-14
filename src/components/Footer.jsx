import React from 'react'

const Footer = () => {

    const today = new Date();

    const footerStyle = {
        backgroundColor: "royalBlue",
        color: "#fff"
    }

  return (
    <footer style={footerStyle}>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer;