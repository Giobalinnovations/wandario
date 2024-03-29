'use client';

import useScrollDirection from '@/hooks/useScrollDirection';

import MenuToggler from './menu-toggler';
import Navigation from './navigation';
import Logo from './ui/logo';
import { logo } from '@/lib/images';
import Wrapper from './ui/wrapper';

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed left-0 right-0 transition-all duration-500 ${
        scrollDirection === 'down'
          ? '-top-28  md:-top-24'
          : // : 'top-0 shadow-sm z-50 bg-white'
            'top-0 z-50'
      }
      `}
    >
      <Wrapper>
        <nav
          className="flex items-center justify-between py-4 px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Logo imgSrc={logo} />
          </div>
          <div className="flex lg:hidden">
            <MenuToggler />
          </div>
          <nav className="hidden [&_a]:text-white lg:flex lg:gap-x-16">
            <Navigation />
          </nav>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <MenuToggler />
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}
