import React from "react";
import Item from "./data/Item";
import Items from "./Items";

function Portfolio(){
    return (
        <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Item.map(project => (
                    <Items 
                    Title={project.Title}
                    ImageUrl={project.ImageUrl}
                    Stack={project.Stack}
                    Link={project.Link}/>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;