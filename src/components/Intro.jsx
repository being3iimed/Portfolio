import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
function Intro(){
    const [text] = useTypewriter({ 
    words:['Full-Stack developer', 'AI & Cloud Enthusiast'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
    delaySpeed:1000,
    })
    return (

        <div className="flex items-center justify-center flex-col text-center pt-26 pb-6"> 
            <h1 className="my-6 text-4xl md:text-7xl mb-1 md:mb:3 font-bold">
                Imed Kouki
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                {text}
                <Cursor cursorColor='violet' />
                </p>
            <div className="g-6 mb-8 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <p className="text-sm max-w-xl mb-6 font-normal text-stone-500">As a developer, 
                    I take pride in building coding projects from scratch. Starting from the initial planning 
                    and designing stages, I work diligently to create solutions that address real-life problems 
                    through the power of code. <br />
                    My passion for technology extends to the exciting and innovative 
                    fields of artificial intelligence and cloud computing, which inspire me to constantly 
                    stay up-to-date with the latest advancements in these areas. 
                </p>
                <img 
                    src="/assets/linkdin.jpg"
                    alt="profileImg" 
                    className="mx-20 rounded-full overflow-hidden h-48 md:50 object-cover cursor-pointer"/>
            </div>
        </div>
    )
}

export default Intro;