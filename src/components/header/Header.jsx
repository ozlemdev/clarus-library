const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>BOOKS OR MAGAZINES</HeaderTitle>
      <HeaderFrom>
        <SearchInput type="search" placeholder="Search..." />
        <selecBox>
          <option>All</option>
        </selecBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderFrom>
    </HeaderContainer>
  );
};

export default Header;
