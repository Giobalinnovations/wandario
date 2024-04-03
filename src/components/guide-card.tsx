import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

type GuideCardProps = {
  description: string;
  btn: string;
  CountriesName: string;
};
export default function GuideCard({
  CountriesName,
  description,
  btn,
}: GuideCardProps) {
  return (
    <>
      <Card className=" backdrop-blur-sm bg-[#0000001A] border-[2px] border-[#00DBFF] ">
        <CardContent className=" flex-col  border border-white m-3">
          <CardTitle className="text-[30px] font-[600] mt-5  text-white">
            {CountriesName}
          </CardTitle>
          <CardDescription className="text-[14px] mb-2  text-white">
            {description}
          </CardDescription>
          <Button variant="outline" className="rounded-[100px] bg-transparent">
            {btn}
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
