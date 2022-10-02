import React from 'react';
import Feature from './Feature';

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] 
    bg-gradient-to-r from-cyan-500 to-blue-500 ... h-[60rem] pt-[18rem] mt-[0rem] relative z-[1] rounded-b-[3rem]">
        {/* title icon */}
        <img src={require("../img/liniye.png")} alt=""  className='w-[10rem] animate-bounce'/>

        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>ھەر ۋاقىت ھەر يەردە ھاۋارايى ئەھۋالىدىن خەۋەردار قىلىپ تۇرىدىغان ئەپ</span>
            <span>
                <b>
                    ھاۋارايى ئەپ
                </b>
            </span>
        </div>
        {/* features */}
        <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
            <Feature icon='WeatherApp1' title = 'ئەڭ يېڭى مەلۇمات'/>
            <Feature icon='WeatherApp2' title = 'سىز ئۈچۈن ئەسكەرتىشلەر'/>
            <Feature  icon='WeatherApp3' title = 'تۇرمۇشىڭىزغا قولاي'/>
        </div>
    </div>
  )
}

export default Experience