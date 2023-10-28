import SelectBox from "./SelectBox";
import SearchBox from "./SearchBox";

const HeaderSection = () => {
  return (
    <header className="header-section py-5 px-3 shadow-2xl">
      <div className="container mx-auto flex items-center flex-col justify-center  md:flex-row">
        <div className="logo mb-5 md:me-auto md:mb-0">
          <a href="" className="text-white text-3xl font-medium">
            <span className="text-blue-600">Note</span>App
          </a>
        </div>
        <div className="filter-boxes flex flex-col gap-5 w-2/3 md:2/3 md:flex-row xl:w-1/2">
          <SelectBox />
          <SearchBox />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
