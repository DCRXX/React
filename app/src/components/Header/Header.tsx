'use client';
import { ReactElement, useState, useRef, useEffect } from 'react';
import './Header.css'
import Coures_Icon from './public/courses_are_not_active.svg'
import Coures_Icon_Active from './public/Active_courses.svg'
import Services_Icon from './public/Services_are_not_active.svg'
import Services_Icon_Active from './public/Services_active.svg'
import Products_Icon from './public/Products_are_not_active.svg'
import Products_Icon_Active from './public/Active_products.svg'
import Books_Icon from './public/Books_are_not_active.svg'
import Books_Icon_Active from './public/Books_active.svg'
import logo from './public/Logo.svg'
import Icon_Search from './public/Search.svg'

export default function Header(): ReactElement {
  const [hoverStates, setHoverStates] = useState({
    coures: false,
    services: false,
    book: false,
    goods: false
  });

  const handleMouseEnter =(itemName: string) => {
    setHoverStates(prev =>({
      ...prev,
      [itemName]: true
    }));
  };

  const handleMouseLeave = (itemName: string) => {
    setHoverStates(prev =>({
      ...prev,
      [itemName]: false
    }));
  };

  return <header>
    <div className="logo-container">
      <img src={logo.src}></img>
    </div>
    <div className='search-conteiner'>
      <textarea
        required
        maxLength={50}
        className='search' 
        id='site_search'
        placeholder="Поиск..."
      >
      </textarea>
      <button className='search-button'><img className='Icon-Search' src={ Icon_Search.src }/></button>
    </div>
    <div className="list-of-services">
      <div className="coures"
        onMouseEnter={() => handleMouseEnter('courses')}
        onMouseLeave={() => handleMouseLeave('courses')}
      >
        <img src={hoverStates.coures ? Coures_Icon.src: Coures_Icon_Active.src}/>
        <p1>Курсы</p1>
        
      </div>
      <div className="services">
        <img src={ Services_Icon.src }/>
        <p1>Сервисы</p1>
      </div>
      <div className="Books">
        <img src={ Books_Icon.src }/>
        <p1>Книги</p1>
      </div>
      <div className="Goods">
        <img src={ Products_Icon.src }/>
        <p1>Товары</p1>
      </div>
    </div>
  </header>;
}