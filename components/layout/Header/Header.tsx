'use client';
import NextLink from 'next/link';
import { Typography } from '@/components/base';
import Logo from './Logo';
import ThemeButton from './ThemeButton';
import { nav } from './data';
import { FaBars } from 'react-icons/fa';
import { useDrawer } from '@/contexts/DrawerContext';
import { IconButton, Link } from 'unremarkable-ui';

const Header = () => {
  const { toggle } = useDrawer();
  return (
    <header className="w-full">
      <div className="py-8 hidden lg:flex justify-between items-center ">
        <NextLink href="/" aria-label="home page">
          <Logo className="w-12" />
        </NextLink>
        <div className="">
          <div className="flex gap-8 items-center">
            <nav className="flex gap-8">
              {nav.map((link: string) => (
                <Link as={NextLink} key={link} href={`/${link}`}>
                  <Typography intent={'label1'}>{link}</Typography>
                </Link>
              ))}
            </nav>
            <ThemeButton />
          </div>
        </div>
      </div>
      <div className="lg:hidden py-8">
        <IconButton variant="ghost" size="lg" icon={FaBars} onClick={toggle} />
      </div>
    </header>
  );
};

export default Header;
