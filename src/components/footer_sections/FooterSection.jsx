import Creator from "./Creator";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="container mx-auto flex flex-col gap-4 items-center  justify-end py-5  px-3 md:flex-row">
        <p className="text-white">Created By: </p>
        <div className="creators flex flex-wrap justify-center gap-5 md:flex-nowrap">
          <Creator name="Shakib Sardar" email="shakib6443@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
