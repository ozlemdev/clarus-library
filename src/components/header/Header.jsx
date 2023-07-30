import React from "react";

import {
  HeaderButton,
  HeaderContainer,
  HeaderFrom,
  HeaderTittle,
  SearchInput,
  SelectBox,
} from ".Header.style";
import { useContext } from "../../context/BooksContext";

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const { SearchInfo, setSearchInfo, getData } = useBooksContext();

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log({ [e.target.name]: e.target.value });
    setSearchInfo({ ...SearchInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  console.log(SearchInfo);
  return (
    <HeaderContainer>
      <HeaderTittle>BOOKS OR MAGAZINES</HeaderTittle>
      <HeaderFrom onSubmit={handleSubmit}>
        <SearchInput
          type="search"
          placeholder="Search..."
          name="query"
          value={SearchInfo.query}
          onChange={handleChange}
          required
        />
        <SelectBox>
          value={searchInfo.selectType}
          name="selectType" onChange={handleChange}
          {printType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          <HeaderButton>Search</HeaderButton>
        </SelectBox>
      </HeaderFrom>
    </HeaderContainer>
  );
};

export default Header;
