type EquimentTopTitleProps = {
  title: string;
  description: string;
};

export default function EquimentTopTitle({
  title,
  description,
}: EquimentTopTitleProps) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-[22px] font-bold">{title}</h2>
        <div className="border-b-[3px]  border-[#008ebe] w-[260px] my-2"></div>
        <p>{description}</p>
      </div>
    </>
  );
}
