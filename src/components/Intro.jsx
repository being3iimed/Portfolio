import React from "react";

function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-26 pb-6"> 
            <h1 className="my-6 text-4xl md:text-7xl mb-1 md:mb:3 font-bold">Imed Kouki</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Full-stack developer</p>
            <p className="text-sm max-w-xl mb-6 font-normal text-stone-500">As a developer, 
            I take pride in building coding projects from scratch. Starting from the initial planning 
            and designing stages, I work diligently to create solutions that address real-life problems 
            through the power of code. <br />
            My passion for technology extends to the exciting and innovative 
            fields of artificial intelligence and cloud computing, which inspire me to constantly 
            stay up-to-date with the latest advancements in these areas. 
            </p>
        </div>
    )
}

export default Intro;