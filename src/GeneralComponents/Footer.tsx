import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-holder w-full">
      <div className="mt-20">
        <div className="pb-20 pt-20">sa</div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <div className="mt-2"> &reg; Slaska1a. All rights reserved.</div>
        <div className="mb-2 mt-2">
          <Link to={'https://github.com/Samessprog'} target="_blank">Created by Sames</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
