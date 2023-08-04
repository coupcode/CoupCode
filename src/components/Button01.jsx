import React, { useState } from 'react'

const Button01 = () => {
    const [count, setCount] = useState(0);

    function handlCount() {
        setCount(count + 1);
    }
  return (
    <div>
        <button conClick={handleCount}>Click {count}</button>
    </div>
  )
}

export default Button01