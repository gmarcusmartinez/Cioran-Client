import React from 'react';
import Link from 'next/link';
import links from './links.json';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';

export const Navigation = () => {
  const { isOpen } = useSelector((state) => state.nav);
  const { toggleNav } = useActions();

  const navlinks = links.map((l) => (
    <Link key={l.to} href={l.to}>
      <a>{l.text}</a>
    </Link>
  ));

  return (
    <div className='navigation'>
      <div className='menu-bars' onClick={() => toggleNav(!isOpen)}>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
      </div>
      <div className='navigation__usr-img'>
        <div />
      </div>
      <span>Test User</span>
      <div className='navigation__links'>{navlinks}</div>
    </div>
  );
};
