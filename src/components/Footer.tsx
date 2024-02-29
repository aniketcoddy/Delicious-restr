import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col md:flex-row md: text-primary h-24 w-full justify-center md:justify-between font-semibold items-center border-t-2 border-primary p-4 gap-2 uppercase">
        <Link href="/" className="ml-0 md:ml-11">Massimo</Link>
        <p className="text-sm mr-0 md:mr-11">@ALL RIGHTS RESERVED TO ANIKET VISHNOI</p>
    </div>
  );
};

export default Footer;
