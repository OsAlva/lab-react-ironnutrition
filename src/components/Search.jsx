// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 5
function Search({searchFoodHandler}) {

    const [search, setSearch] = useState("");


    function searchHandler(e) {
        e.preventDefault();
        setSearch(e.target.value);
        console.log("ONCHANGE" ,e.target.value);
        return searchFoodHandler(e.target.value);
    }

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor='search'>Search</label>
      <Input name="search" value={search} type="text" onChange={searchHandler} />



    </>
  );
}

export default Search;
