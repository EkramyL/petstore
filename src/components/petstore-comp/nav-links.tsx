'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const routes = [
    { label: 'Dashboard', path: '/app/dashboard' },
    {
      label: 'Account',
      path: '/app/account',
    },
  ];

  const path = usePathname();
  return (
    <ul className="flex gap-2 text-xs">
      {routes.map((route) => {
        return (
          <li key={route.label}>
            <Link
              className={`text-white/70 rounded-sm px-2 py-1 hover:text-white focus:text-white transition ${
                route.path === path ? ' bg-black/10 text-white' : ''
              }`}
              href={route.path}
            >
              {route.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
