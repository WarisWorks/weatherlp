import React from 'react'

function AppIntroduce() {
  return (
    <div className="appintroduce flex flex-col px-5 w-[100%] border-1 border-black py-3 bg-[#232A4E] rounded-xl mt-5">
    {/* upper */}
    <div className="upperPart flex items-center justify-between">
        
    
     {/* profile */}
    <div className="profile flex">
    <img src={require("../img/Planet2.png")} className="w-[2.5rem] h-[2.5rem]" />

     <div className="details flex flex-col ml-4">
        <span className='text-[1rem]'> بۈگۈنكى ھاۋارايى </span>
        <span className='text-sm text-green-500' >   سىلسىيە گرادۇس  °32</span>
    </div>
   </div>
     <div>
        <img src={require("../img/path.png")} className=" h-[1rem]" />
     </div>
   </div>
      {/* low part */}
    <div className="lowerPart flex items-center justify-between mt-3">
        <div className="weatherlg flex justify-between flex-[2]">
            {/* <span>🌨</span> */}
            <img src={require("../img/hawa.png")}  className="w-[20rem]"/>
        </div>
        {/* Controls */}
        <div className="controls flex-1 flex items-center justify-around">
        {/* quyash */}
        <img src={require("../img/WeatherIcon.png")}  className="w-[20rem]"/>
         

        </div>
    </div>
   </div>
  );
}

export default AppIntroduce