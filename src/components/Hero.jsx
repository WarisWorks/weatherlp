import {React, useState} from 'react';
import DownloadAds from './DownloadAds';
import VisibilitySensor from "react-visibility-sensor";
import {motion} from 'framer-motion';

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true : {
      left : '7rem',
    },
    false : {
      left : '19rem'
    }
  };
  const yamgurbulut = {
    true: {
      left: "290px",
    },
    false: {
      left: "235px",
    },
  };
  const quyun = {
    true: {
      left: "1rem",
    },
    false: {
      left: "-1rem",
    },
  }

  return (
    <VisibilitySensor
    onChange = {(isVisible) => setElementIsVisible(isVisible)}  minTopValue={300}>
    {/* main navi color */}
    <div className="wrapper bg-[#53B5FD] flex items-center justify-between px-[5rem]
      rounded-b-[5rem] w-[100%] h-[35rem] relative ">
        
         {/*  right side */}
         <div className="images"> 

         { /* quyash  */}
              <img src={require("../img/quyash.png")} alt=""
               className="animate-bounce   absolute  bottom-[12rem] right-[50rem]" />

 

         <motion.img
           variants={bg}
            animate={`{elementIsVisible}`}
              transition={{duration: 1, type: 'ease-out'}}
              src={ require ("../img/backsand.png")} alt="" 
              className="absolute bottom-[0rem] right-[0rem]" />
      
    


        { /*  Phone  */}
          <img src={require("../img/main.png")} alt=""
              className="absolute  bottom-[2rem] h-[28rem] left-[7rem] " />
          
        
         
         {/* eidgah */}
          <img src={require("../img/id3d.png")} alt=""
              className="absolute flex  bottom-[5rem] right-[30rem]" />

 
              {/* yamghur bulut  */}
          <motion.img
            variants={yamgurbulut}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
               src={require("../img/bulut.png")} alt="" 
              className='absolute bottom-[22rem] left-[2rem]' />

              {/* quyun  */}

          <motion.img
            variants={quyun}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/quyun.png")} alt=""
              className='space-x-4 absolute bottom-[12rem] left-[20rem]' />
        { /*  Phone  */}
          <img src={require("../img/sand-front.png")} alt=""
              className="absolute   h-[22rem] right-[8rem] " />
      
             
         </div>

         {/* left side */}

        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">  
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                ???????????????? ??????
            </span >
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500'>
                <b> -????????????- </b> 
            </span>
           
            <span className='text-[15px] text-[#5f5046] '>
                ?????? ???????? ?????? ?????? ???????????????? 
                
                ???????????????????? ?????????????????????? ????????????????<br /> ??????????????????
                ?????????? ?????????? ????????????
            </span>
            <span className='text-[13px] rtl:mr-3'>  ?????????? ???? ?????????????????? ?????????????????? ?????????????? </span>
            <DownloadAds/>          
        </div>
    </div>
    </VisibilitySensor>
  )
}

export default Hero