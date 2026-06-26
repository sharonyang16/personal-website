'use client';

import { useDrawer } from '@/contexts/DrawerContext';
import Link from 'next/link';
import Logo from './Logo';
import { Typography } from '@/components/base';
import { nav } from './data';
import ThemeButton from './ThemeButton';

const NavDrawer = () => {
  const { open, toggle } = useDrawer();
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-100 bg-black/40 transition-opacity"
          onClick={toggle}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-101 h-full w-64 py-12 px-8 bg-white dark:bg-neutral-900 shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Sidebar navigation"
      >
        <div className="flex flex-col justify-between h-full">
          <nav className="flex flex-col gap-8">
            <Link href="/" aria-label="home page" onClick={toggle}>
              <Logo className="w-12" />
            </Link>

            <div className="flex flex-col gap-4">
              {nav.map((link: string) => (
                <Link key={link} href={`/${link}`} onClick={toggle}>
                  <Typography intent={'label1'}>{link}</Typography>
                </Link>
              ))}
            </div>
          </nav>
          <ThemeButton />
        </div>
      </aside>
    </>
  );
};

export default NavDrawer;
