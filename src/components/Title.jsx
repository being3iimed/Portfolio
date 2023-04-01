import React from "react";

const Title = ({children, id }) => {
  return (
    <h1 
        id={id && id}
        className="text-2xl dark:text-white font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900"
    >
        {children}
    </h1>
  );
};

export default Title;