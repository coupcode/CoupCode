import React from 'react'

const Button = ({data}) => {
  return (
    <div>
        <button className="md:py-3 md:px-6 xs:py-2 py-2 xs:px-3 px-2 bg-brownClr text-whiteClr md:text-xs xs:text-[10px] text-[6px] font-semibold uppercase shadow hover:scale-95 hover:shadow-md transition-all">{data}</button>
    </div>
  )
}

export default Button