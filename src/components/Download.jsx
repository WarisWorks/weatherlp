import React from "react";
import DownloadAds from "./DownloadAds";

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem]  bg-gradient-to-r from-sky-500 to-indigo-500 h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
      {/* tild icon or path icon */}
      <img src={require("../img/part4.png")} alt="" className="animate-pulse w-[10rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>ئەپنى چۈشۈرۈپ ئىشلتىڭ</span>
        <span className="text-[1rem] text-white-400 px-[15rem] text-center mt-[1rem]">
          ياقتۇرسىڭىز دوستلىرىڭىزغا تەۋسىيە قىلىشنى ئۇنتۇپ قالماڭ
        </span>
      </div>
      {/* dowload ads */}
      <div className="mt-12">
        <DownloadAds />
      </div>
    </div>
  );
}

export default Download;
