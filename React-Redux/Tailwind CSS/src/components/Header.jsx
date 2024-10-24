import Icon from './Icon';

const Header = () => {
  return (
    <header className="grid col-span-2 grid-cols-[auto_auto_3fr_auto_auto_auto] justify-items-center items-center p-[20px] gap-[20px]">
      <Icon type="hamburger" />
      <Icon type="logo" />
      <form className="flex px-[10%] py-0 w-full">
        <input
          placeholder="검색"
          className="w-full h-[40px] rounded-l-[20px] pl-[20px] border-solid border-gray-300 text-gray-300 font-extralight"
        />
        <button className="w-[60px] h-[40px] rounded-r-[20px] border-solid border-gray-300 bg-[rgb(245,245,245)] border-l-transparent grid place-items-center">
          <Icon type="search" />
        </button>
      </form>
      <Icon type="cam" />
      <Icon type="bell" />
    </header>
  );
};

export default Header;
