import React from 'react'

export default function CustomButton(props) {
  const mystyle={
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "20px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "17px",
    margin: "4px 4px",
    cursor: "pointer",
    borderRadius:"5px"
  }
  return (
    <button style={mystyle}>Add</button>
  )
}


