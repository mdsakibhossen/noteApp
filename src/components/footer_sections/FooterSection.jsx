import React from "react";
import Creator from "./Creator";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="container mx-auto flex gap-8 items-center justify-end py-5">
        <p className="text-white">Created By: </p>
        <div className="creators flex gap-5">
          <Creator name="Shakib Sardar" email="shakib6443@gmail.com" />
          <Creator name="Sou Rav" email="sourav@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
