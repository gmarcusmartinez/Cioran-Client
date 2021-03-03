import React from 'react';
import Link from 'next/link';
import links from './links.json';

export const Navigation = () => {
  const navlinks = links.map((l, i) => (
    <Link key={l.to} href={l.to}>
      <a>{l.text}</a>
    </Link>
  ));
  return (
    <div className='navigation'>
      <div className='navigation__header'>
        <div className='navigation__usr-img'>
          <div />
        </div>
        <span>Test User</span>
        {navlinks}
      </div>
    </div>
  );
};
