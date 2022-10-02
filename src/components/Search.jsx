import {React, useState} from 'react';
import AppIntroduce from './AppIntroduce';
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";



function Search() {
 const [elementIsVisible, setElementIsVisible] = useState(false);
 const bg = {
    true: {
      right: "1rem",
    },
};
    const bulutquyash = {
     true: {
       left: "22rem",
     },
     false: {
       left: "27rem",
     },
  };
  const giradus = {
     true: {
       left: "7rem",
     },
     false: {
       left: "5rem",
     },
  };
  const hourly = {
     true: {
       left: "2rem",
     },
     false: {
       left: "6rem",
     },
   };



  return (
     <div className="search relative h-[45rem] px-[5rem]
     bg-gradient-to-r from-green-500 via-brown-500 to-blue-500 ... pt-[18rem] pb-[10rem] mt-[-2rem] 
      z-[1] flex items-center justify-between rounded-b-[3rem]">
    {/* sol terep */}
    <div className="left flex-1">
    <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
         src={ require ("../img/backsand.png")} alt=""
        className="absolute bottom-[0] left-[0]" /> 

           
         <motion.img src={require("../img/phone2.png")} alt=""
                className="w-[26rem] top-[6rem] absolute" />{" "}

          <motion.img
          variants={giradus}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
           src={require("../img/giradus.png")} alt=""
               className="w-[9rem] absolute top-[13rem] left-[7rem] " />{" "}

      <motion.img
          variants={bulutquyash}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/bulutquyash.png")} alt=""
               className="w-[9rem] top-[13rem] left-[21rem] absolute" />

       <motion.img
          variants={hourly}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/hourly.png")} alt=""
               className="w-[17rem] top-[30rem] left-[2rem] absolute" />     
     </div>

      {/* ong terep */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[-100%] ">
               {/*  Search */}
               <div className="searchbar flex justify-start w-[100%]">
                    <input type="text" placeholder='ئىزدىمەكچى بولغان شەھەر ئىسمىنى كىرگۈزۈڭ' 
                     className='flex-[19] outline-none rounded-xl p-3 border-rose-500  bg-[#3b3b71]'/>
                   {/*  Search icon */}  
                    <div className="searchIcon flex flex-1 items-center rounded-xl
                     ml-4 bg-gradient-to-bl from-[#3b3b71] to-[#75759b] p-4 h-[3rem]">
                         <img src={require("../img/search.png")}  alt="izdesh"
                          className='w-[1.5rem]' />
                    </div>
               </div>
               {/* tild icon */}
               <div className="tild flex justify-start  mt-7 items-center w-[100%]">
                    <img src={require("../img/style2.png")}
                     alt="" className='animate-bounce w-[5rem]'
                    />
               </div>
               {/*  chushendushi */}
               <div className="detail flex flex-col  text-3xl">
                    <span>شەھەر بويىچە ئىزدەڭ</span>
                    <span>
                         <b>پوچتا نومۇرى ياكى رايون ئىسمى ئارقىلىقمۇ  ئىزدەشكە بولىدۇ</b>
                    </span>
                    <span className="text-sm mt-3 text-[#87ceeb]">
                         ئىزدىمەكچى بولغان شەھەرنىڭ ئىسمى  ياكى پوچتا نومۇرىنى كىرگۈزۈش ئارقىلىقمۇ 
                         <br />
                         ھاۋارايى مەلۇماتىنى ئىزدىگىلى بولىدۇ
                    </span>
               </div>
               {/* App heqqide */}
               <VisibilitySensor
                onChange={(isVisible) => setElementIsVisible(isVisible)}>
               <AppIntroduce />
               </VisibilitySensor>
          </div>
     </div>
     
  )
}

export default Search