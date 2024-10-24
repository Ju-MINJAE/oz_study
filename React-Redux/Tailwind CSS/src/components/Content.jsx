const Content = ({ content }) => {
  return (
    <section className="w-[50%] h-auto p-[10px]">
      <img src={content.img} className="w-full rounded-[10px]" />
      <div className="flex flex-row gap-[10px] pt-[10px]">
        <div>
          <img src={content.profile} className="w-[30px] rounded-[100%]" />
        </div>
        <div>
          <p className="font-medium">{content.title}</p>
          <p className="font-[0.9rem] text-gray-500">{content.creator}</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
