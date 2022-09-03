import React, { useState, Fragment } from "react";
// import MetaData from "../layout/MetaData";
import "./Search.css";
import MetaData from "./../MetaData/MetaData";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Service ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
