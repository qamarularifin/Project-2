import React, { useContext, useState, useEffect, useRef } from "react";
import Search from "./Search";
import Results from "./Results";
import { BookContext } from "../contexts/dataContext";
import { useNavigate } from "react-router-dom";
import Collapsible from "./Collapsible";

const SearchBox = () => {
  const navigate = useNavigate();
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    disableSubmit,
    setDisableSubmit,
    queryGoogleAPIBook,
    queryGoogleAPIBookOthers,
  } = useContext(BookContext);

  const [hasSearched, setHasSearched] = useState(true);
  // const [disableSubmit, setDisableSubmit] = useState(true)

  const authorSearchRef = useRef();

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    console.log("handleChangeee: ", searchTerm);
    setSearchTerm(searchTerm);
    // !searchTerm ? setDisableSubmit(true) : setDisableSubmit(false)
  };

  const handleSubmit = (e) => {
    if (searchTerm === "") {
      return;
    } else {
      e.preventDefault();
      console.log("handleSubmit: clicked");
      //const searchTerm = e.target.value; // not needed
      // setSearchTerm(searchTerm); //not needed
      // setHasSearched(false); //not needed as have already put navigate to results
      navigate("/results");
      queryGoogleAPIBook();
    }
  };

  const handleSubmitOthers = (e) => {
    e.preventDefault();
    console.log("handleSubmitOthers: clicked");
    // setHasSearched(false); // not needed as already put navigation to results
    navigate("/results");
    const search = authorSearchRef.current.value.replace(/ /g, "+");
    queryGoogleAPIBookOthers(search);
  };

  return (
    <div className="search-box">
      {hasSearched ? (
        <>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            disableSubmit={disableSubmit}
            handleSubmitOthers={handleSubmitOthers}
            authorSearchRef={authorSearchRef}
          />

          <Collapsible
            handleSubmitOthers={handleSubmitOthers}
            authorSearchRef={authorSearchRef}
          />
        </>
      ) : (
        <Results searchTerm={searchTerm} searchResults={searchResults} />
      )}
    </div>
  );
};

export default SearchBox;
