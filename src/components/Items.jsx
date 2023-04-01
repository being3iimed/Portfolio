import React from "react";
import Item from "./data/Item";

function Items({Title,ImageUrl,Stack,Link}){
    return (
        <a 
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
            <img src={ImageUrl} 
                alt="Card"
                className="w-full h-36 md:48 object-cover cursor-pointer" />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb2 md:mb3 font-semibold dark:text-white">
                    {Title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                    {Stack.map(Item => (
                        <span className="inline-block px-2 py-1 dark:border-white font-semibold border-2 border-stone-900 rounded-md">
                            {Item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default Items;