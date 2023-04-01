import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white py-16 text-stone-900">
      <div className="text-center">
        <p className="text-primary font-normal text-base mb-2 dark:text-white">
          © {currentYear} Imed Kouki. All rights reserved.
        </p>
        <p className="text-primary font-semibold text-base dark:text-white">
          Made with {"<3"}
        </p>
      </div>
    </div>
  );
};

export default Footer;