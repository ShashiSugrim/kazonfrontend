import React from 'react'

const TopBar = () => {
  return (
    <>
    <div>
    <h2 style={{textAlign: "center"}}>Kazon</h2>
    </div>
  <div className="parent" >
  
    <div className="child">
    <div className="Search-bar">
      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="7"
        maxlength="50"
        size="30"
        placeholder="Search" // Add this line
      />
    </div>
    </div>
    <div className="child">
    <button>Sign in</button>
    </div>
  </div>
  </>   
  )
}

export default TopBar