import { cn } from '@/lib/utils';

type titleUnderlineProps = {
  title: string;
  className?: string;
};
export default function TitleUnderline({
  title,
  className,
}: titleUnderlineProps) {
  return (
    <div>
      <h2 className={cn('text-3xl font-bold text-black ', className)}>
        {title}
      </h2>
      <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
    </div>
  );
}
