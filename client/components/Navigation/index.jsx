import React from 'react';
import Link from 'next/link';
import ls from './links.json';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';

export const Navigation = ({ name }) => {
  const { isOpen } = useSelector((state) => state.nav);
  const { toggleNav } = useActions();

  const bar = `bar ${isOpen ? 'change' : ''}`;
  const bars = [...Array(3)].map((_, i) => <div key={i} className={bar} />);

  const links = ls.map(({ to }, i) => {
    const dir = isOpen ? `slide-in-${i}` : `slide-out-${i}`;
    return <NavLink key={i} to={to} dir={dir} cb={toggleNav} />;
  });

  return (
    <div className='navigation'>
      <div className='menu-bars' onClick={() => toggleNav(!isOpen)}>
        {bars}
      </div>
      <div className='navigation__usr-img'>
        <div />
      </div>
      <span>{name}</span>
      <div className='navigation__links'>{links}</div>
    </div>
  );
};

const NavLink = ({ to, dir, cb }) => (
  <Link href={`/dashboard/${to}`}>
    <a className={dir} onClick={() => cb(false)}>
      {to.replace('-', ' ')}
    </a>
  </Link>
);
