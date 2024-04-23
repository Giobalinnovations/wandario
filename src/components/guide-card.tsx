import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import LinkButton from './ui/link-button';

type GuideCardProps = {
  description: string;

  CountriesName: string;
};
export default function GuideCard({
  CountriesName,
  description,
}: GuideCardProps) {
  return (
    <>
      <Card className="backdrop-blur-sm bg-[#0000001A] border-[2px] text-white border-[#00DBFF] ">
        <div className="border border-white m-3">
          <div className="p-2 flex flex-col gap-2 items-start">
            <CardTitle className="text-[28px] font-[600] mt-5  text-white">
              {CountriesName}
            </CardTitle>
            <CardDescription className="text-[14px] mb-2  text-white">
              {description}
            </CardDescription>
            <LinkButton href="/#" text="Read More" className="mb-2" />
          </div>
        </div>
      </Card>
    </>
  );
}
