export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img
        src={content.img}
        alt={content.title}
        className="w-[300px] rounded-[10px] mb-[3px]"
      />
      <span className="text-[12px] text-[#d7fa00] border border-[#d7fa00] py-[4px] px-[5px] rounded-[3px]">
        모집중
      </span>
      <div className="text-[18px] font-medium">{content.title}</div>
      <p className="text-[12px] text-[rgb(160, 160, 160)]">
        {content.subtitle}
      </p>
    </div>
  );
}
