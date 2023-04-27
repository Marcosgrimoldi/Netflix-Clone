import useBillboard from "@/hooks/useBillboard";
import React from "react";

const Billboard = () => {
    const { data } = useBillboard();
return (
        <div className="relative h-[56.25vw]">
        <video 
        className="
        w-full
        h-[56.25vw]
        object-cover
        brightness-[60%]
        "
        autoPlay
        muted
        loop
        poster={data?.thumbnaiUrl}
         src={data?.videoUrl}>

         </video>
         <div className="absolute top-[30%] md:top[40%] ml-4 md:ml-16">
        <p className="text-white text-3xl md:text-6xl h-full w-[50%] lg:text-8xl font-bold drop-shadow-xl">
            {data?.title}
        </p>
         </div>
        </div>
)
}

export default Billboard;