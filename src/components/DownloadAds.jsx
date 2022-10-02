import React from 'react';

function DownloadAds() {
    const downloadimg = 'border-[2px] border-[#53B5FD] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className="download">
        <div className="download_images flex">
            <img src={require("../img/App Store.png")} alt="Alma" 
             className={downloadimg + ` mr-[2rem] `}/>
            <img src={require("../img/Google Play.png")} alt="Enjur" 
             className={downloadimg} />
        </div>
    </div>
  )
}

export default DownloadAds