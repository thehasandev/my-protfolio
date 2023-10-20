import React from 'react'

function Container({className,children}) {
  return (
    <div className={`max-w-container mx-auto ${className}`}>{children}</div>
  )
}

export default Container