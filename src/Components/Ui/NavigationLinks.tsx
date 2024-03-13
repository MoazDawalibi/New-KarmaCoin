import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TbPointFilled } from "react-icons/tb";

//@ts-ignore
interface NavLink {
  label: string;
  to: string;
}

export const NavigationLinks = ({ className }: any) => {
  const [t] = useTranslation();
  const location = useLocation();

  const links: NavLink[] = [
    { label: t('Home'), to: '/' },
    { label: t('contact'), to: '/contact' },
    { label: t('consign'), to: '/consign' },
    { label: t('products'), to: '/products' },
    { label: t('about'), to: '/about' },
    { label: t('orders'), to: '/orders' },
  ];

  //this is a scroll function based on id 
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavLinks = (links: NavLink[]) => (
    <ul className={className} role="navigation">
      {links.map((link, index) => (
        <p key={index} className={`oneLink ${location.pathname}${location.hash}` === link.to ? 'active' : ''}>
          {
            <span className='oneLink_container'>
              <TbPointFilled className='Icon'/>
              <Link className='Link' to={link.to}>
                {link.label}
              </Link>
            </span>
          }
        </p>
      ))}
    </ul>
  );

  return renderNavLinks(links);
};
