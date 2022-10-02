import React from 'react';

function CenterMenu() {
    const listStyle = "mr-[3rem] hover:cursor-pointer"
  return (
     <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={listStyle}>باش بەت</li>
            <li className={listStyle}>ھەققىدە</li>
            <li className={listStyle}>ئىقتىدارلىرى</li>
            <li className={listStyle}>تەكلىپلەر</li>
        </ul>
     </div>
  )
}

export default CenterMenu