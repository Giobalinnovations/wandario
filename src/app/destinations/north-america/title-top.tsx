type TitleTopProps = {
  title: string;
};

export default function TitleTop({ title }: TitleTopProps) {
  return (
    <div className="mb-9">
      <h2 className="font-bold text-3xl">{title}</h2>
      <div className="border-b-[3px]  border-[#008ebe] w-[200px] my-2"></div>
    </div>
  );
}
