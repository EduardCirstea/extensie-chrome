import React from 'react'

const Response = ({ response, handleClick }) => {
  return (
    <div className="response">
      <p>
        {response}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolores,
        saepe iusto ea assumenda iste possimus voluptas provident sequi aperiam
        blanditiis officiis voluptatem quaerat fuga adipisci eveniet eum debitis
        fugit?
      </p>
      <div className="form-group center">
        <button className="btn btn-transparent" onClick={handleClick}>
          Default
        </button>
      </div>
    </div>
  )
}

export default Response
