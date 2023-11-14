'use client';

import { LayoutGroup } from 'framer-motion';
import { NavItem } from './NavItem';
import { Suspense } from 'react';
import { Link } from '@remix-run/react';

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
};

const frameworks = {
  next: {
    name: 'next.js',
  },
  remix: {
    name: 'remix',
  },
  astro: {
    name: 'astro',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })}
              </Suspense>
            </div>
            <div className="flex flex-row space-x-0">
              <Suspense fallback={null}>
                {Object.entries(frameworks).map(([path, { name }]) => {
                  return (
                    <Link
                      key={path}
                      to={`https://${path.toLowerCase()}.umar.codes`}
                      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative py-1 px-2">{name}</span>
                    </Link>
                  );
                })}
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
