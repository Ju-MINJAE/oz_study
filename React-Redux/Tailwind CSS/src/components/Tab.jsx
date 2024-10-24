import Icon from './Icon';

const tabs = [
  '전체',
  '게임',
  '음악',
  '뉴스',
  '라이브',
  '최근에 업로드된 동영상',
  '새로운 맞춤 동영상',
];

const Tab = () => {
  return (
    <section className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-[20px] pr-[20px]">
      <Icon type="arrow-left" />
      <ul className="list-none flex gap-[10px] overflow-hidden">
        {tabs.map((el, idx) => (
          <List key={'tab' + idx} text={el} />
        ))}
      </ul>
      <Icon type="arrow-right" />
    </section>
  );
};

const List = ({ text }) => {
  return (
    <li className="bg-[rgb(245,245,245)] p-[8px] rounded-[8px] text-[0.8rem] whitespace-nowrap first:bg-black first:text-white first:p-[8px] first:rounded-[8px]">
      {text}
    </li>
  );
};

export default Tab;
