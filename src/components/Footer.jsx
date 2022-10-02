import React from 'react'
import CenterMenu from './CenterMenu'
import { Facebook, Twitter, GitHub, LinkedIn } from "@material-ui/icons"
import { Link } from '@material-ui/core'

function Footer() {
    const SocialStyle = "rounded-full border-2 border-white p-2 mr-[5rem]";
  return (
    <div className="footer flex flex-col items-center 
    justify-start px-[5rem] bg-[#3b3b71] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
        <CenterMenu />
        {/*  Social icon */}
        <div className='flex w-[100%] justify-center mt-14'>
            <div className={SocialStyle}>
                <Facebook />
            </div>

            <Link href="https://twitter.com/warisruzi" color="inherit">
            <div  className={SocialStyle}>
                <Twitter />
            </div>
            </Link>

            <div className={SocialStyle}>
                <GitHub />
            </div> 
            <div className={SocialStyle}>
                <LinkedIn />
            </div>
        </div>
        

        {/* detail */}
            <span className='details text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]' >
                يېڭى ئۇچۇر ۋە كودلارغا ئېرىشىشنى خالىسڭىز خالىغان سۇپىغا ئەگىشىپ قويۇڭ
            </span>
    </div>
  )
}

export default Footer