import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type CardBlogProps = {
  title: string;
  description: string;
  date: string;
  continentsTitle?: string;
};

export default function CardBlog({
  title,
  description,
  date,
  continentsTitle,
}: CardBlogProps) {
  return (
    <>
      <Card className="flex flex-col gap-3  justify-end px-4 pb-5 bg-slate-700 text-white relative">
        <div className="absolute right-0  text-7xl rotate-90 bottom-[50%] top-[50%] m-auto translate-y-2/4  text-red-500 z-50">
          <div className="outline-title text-w pb-2 text-5xl font-bold">
            {continentsTitle}
          </div>
        </div>
        <CardTitle className="mt-32">{title}</CardTitle>
        <div className="border-b-4  border-[#008ebe] w-1/3 my-2"></div>
        <CardDescription>{description}</CardDescription>
        <span>{date}</span>
      </Card>
      <div></div>
    </>
  );
}
