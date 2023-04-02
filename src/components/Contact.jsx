import React from "react";
import Title from "./Title";
function Contact(){
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/f/98e8c7a7-60ac-41a3-a93c-f6e1935f0410"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                    >
                        <title>Contact</title>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                        />
                        <input 
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                        />
                        <textarea 
                            name="Message" 
                            placeholder="Message"  
                            rows="10"
                            className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                        />
                        <button 
                            type="submit"
                            className="text-center inline-block px-8 py-3 w-max text-base font-bold dark:text-stone-900 dark:bg-white rounded-md text-white bg-stone-900 drop-shadow-md"
                        >Work with me   
                        </button>
                    </form>
            </div>
        </div>
    )
}

export default Contact;