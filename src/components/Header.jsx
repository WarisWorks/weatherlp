import React from 'react';
import CenterMenu from './CenterMenu';

function Header() {
    const buttonStyle = 
    "border-[2px] rounded-[10px] border-[#2682ba] px-[25px] py-[7px]"
  return (
    /*  nav main color */
    <div className="header bg-sky-500/100 flex items-center
     justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
        {/* logo */}
        <img src={require("../img/HawarayiLogo.png")} alt="logo"
         className='logo w-[50px] h-[50px]'/>
        {/* side menu */}
        <CenterMenu/>
        {/* buttons */}
        <div className="buttons flex">
            <button className={ `mr-[35px] hover:bg-[#2682ba] ` + buttonStyle}> تىزىملىتىش </button>
            <button className={buttonStyle+ ` bg-[#2682ba] `}> كىرىش </button>
        </div>
    </div>
  )
}

export default Header