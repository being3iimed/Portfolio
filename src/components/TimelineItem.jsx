import React from "react";

function TimelineItem({Year, Title, Company, Duration, Description }){
    return (
        <ol className="flex flex-col md-flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-2 -left-2 border border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify*center text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
                        {Year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900">
                        {Title}
                    </h3>
                    <div className="my-1 font-normal leading-none text-stone-400">
                        {Duration} 
                    </div>
                    <p className="my-2 text-base font-normal text-stone-500 ">
                        {Company}
                    </p>
                    <p className="my-2 text-base font-normal text-stone-500 ">
                        {Description}
                    </p>
                </p> 
            </li>
        </ol>
    )
}

export default TimelineItem;