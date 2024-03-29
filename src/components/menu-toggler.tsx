import { PropsWithChildren } from 'react';
import { Icons } from './icons';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from './ui/logo';

export default function MenuToggler({ children }: PropsWithChildren) {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="">
          <Icons.menu className="w-10 h-10 rounded-full bg-primary p-2 text-white" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo className="w-36 inline-block" />
          </SheetTitle>
          <SheetDescription>{children}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
