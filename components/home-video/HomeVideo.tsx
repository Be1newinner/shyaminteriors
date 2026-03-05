import React from "react";

function HomeVideo() {
  return (
    <div className="w-full h-70 relative sm:h-screen">
      <video
        className="object-cover w-full h-full inset-0"
        src="/assets/interior-designer.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

export default HomeVideo;
