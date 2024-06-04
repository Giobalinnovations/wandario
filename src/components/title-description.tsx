type TitleDescriptionProps = {
  title: string;
  description: string;
};

export default function TitleDescription({
  title,
  description,
}: TitleDescriptionProps) {
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
