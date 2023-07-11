import React from 'react'

const Response = ({ response, handleClick }) => {
  return (
    <div className="response">
      <h4>Response:</h4>
      <p>{response}</p>
      <div className="form-group center">
        <button className="btn btn-transparent" onClick={handleClick}>
          Default
        </button>
      </div>
    </div>
  )
}

export default Response
