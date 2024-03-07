import { PropsWithChildren } from 'react';

export default function Section({ children }: PropsWithChildren) {
  return <section className="py-[4.375rem]">{children}</section>;
}
