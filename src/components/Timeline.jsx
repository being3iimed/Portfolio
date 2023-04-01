import React from "react";
import TItem from "./data/TItem";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
function Timeline(){
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <title>Timeline</title>
                {TItem.map(item => (
                    <TimelineItem
                        Year={item.Year}
                        Title={item.Title}
                        Company={item.Company}
                        Duration={item.Duration}
                        Description={item.Description}
                    />
                ))}  
            </div>          
        </div>
    )
}

export default Timeline;