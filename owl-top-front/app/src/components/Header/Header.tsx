'use client';
import { ReactElement, useState, useRef, useEffect } from 'react';
import './Header.css'

import logo from './public/Logo.svg'
import Icon_Search from './public/Search.svg'
import MenuContent from './MenuContent';
import { useIconHover, iconConfig } from './scripts/useHover';
import { useAccordion, useAccordionChild } from './scripts/useAcordion';
import { useRouter, useSearchParams } from 'next/navigation';
import close from './public/close.svg'
import menu from './public/menu.svg'

export default function Header(): ReactElement {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentRouteId = searchParams.get('content') || 'home';
  const { hoverStates, handleMouseEnter, handleMouseLeave } = useIconHover();
  const { openSections, toggleSection } = useAccordion();
  const { openSectionsChild, toggleSectionChild } = useAccordionChild();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 941);
      if (window.innerWidth >= 941) {
        setIsMobileMenuOpen(false);
      }
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize)
  }, []);

  const handlecourseClick = (courseId: string) => {
    console.log('Переключаемся на курс:', courseId);

    const params = new URLSearchParams(searchParams.toString());
    params.set('content', courseId);

    router.replace(`/?${params.toString()}`, { scroll: false });
  }

  return <header>
    <div className="logo-container">
      <img src={logo.src}></img>
    </div>
    <div className='search-conteiner'>
      <div className='container'>
        <input
          required
          maxLength={50}
          className='search'
          id='site_search'
          placeholder="Поиск..."
        >
        </input>
        <button className='search-button'><img className='Icon-Search' src={Icon_Search.src} /></button>
      </div>
    </div>
    {isMobileView && (
        <div className="mobile-menu-toggle">
          <img
            onClick={() => setIsMobileMenuOpen(true)}
            src={menu.src} alt="Меню" />
        </div>
      )}
      <div className={`mobile-menu-modal ${isMobileMenuOpen ? 'open' : ''}`}>
        <MenuContent
          isMobile={true}
          currentRouteId={currentRouteId}
          onCourseClick={handlecourseClick}
        />
        <img
          onClick={() => setIsMobileMenuOpen(false)}
          src={close.src} />
      </div>
    {!isMobileView && (
      <MenuContent
        isMobile={false}
        currentRouteId={currentRouteId}
        onCourseClick={handlecourseClick}
      />
    )}
  </header>;
}