import Icon from "./Icon";

const Header = () => {
  return (
    <header>
      <Icon type="hamburger" />
      <Icon type="logo" />
      <form>
        <input placeholder="검색" />
        <button>
          <Icon type="search" />
        </button>
      </form>
      <Icon type="cam" />
      <Icon type="bell" />
    </header>
  );
};

export default Header;
