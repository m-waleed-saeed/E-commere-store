import React from 'react'

const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <div className='mt-8 border-t border-[#e9acd9] pt-4 text-center'>
      <p>&copy; {year} All Rights Reserved </p>

    </div>
  )
}

export default Copyright;