import React from 'react'
import SelectBox from "./SelectBox";
import Form from "./Form";
import SearchBox from "./SearchBox";

const HeaderSection = () => {
  return (
    <div>
      <SelectBox />
      <Form />
      <SearchBox />
    </div>
  );
}

export default HeaderSection