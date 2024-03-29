'use client';
import React from 'react';
import Link from 'next/link';

import { MainNavItem } from '@/types';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

const navigation = [
  { title: 'Home', href: '/', dropdown: false },
  { title: 'About Us', href: '/about-us', dropdown: false },
  { title: 'Destinations', href: '/destinations', dropdown: false },
  { title: 'Local Cuisines', href: '/local-cuisines', dropdown: false },
  { title: 'Accommodations', href: '/accommodations', dropdown: false },
];

export default function Navigation({
  linkClassName,
}: {
  linkClassName?: string;
}) {
  const pathname = usePathname();

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {navigation.map((item: MainNavItem) =>
            item.dropdown ? (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item?.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold text-primary">
                      Most Popular
                    </h2>
                  </div>
                  {/* <ul className="grid gap-1 px-4 pb-4 pt-0 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {destinations?.map(destination => (
                      <ListItem
                        key={destination.name}
                        href={`/${destination.slug}`}
                        title={destination.name}
                      />
                    ))}
                  </ul> */}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={item.title} className="relative">
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent border-b-2 border-secondary  rounded-none`}
                  >
                    {item?.title}
                    <Separator className="absolute bottom-0-0 left-1/2 -translate-x-1/2" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-secondary-foreground',
            className
          )}
          {...props}
          href={href ? href : '#'}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p> */}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
