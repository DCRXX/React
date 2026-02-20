
import { useState } from 'react';
import Coures_Icon from '../public/courses_are_not_active.svg'
import Coures_Icon_Active from '../public/Active_courses.svg'
import Services_Icon from '../public/Services_are_not_active.svg'
import Services_Icon_Active from '../public/Services_active.svg'
import Products_Icon from '../public/Products_are_not_active.svg'
import Products_Icon_Active from '../public/Active_products.svg'
import Books_Icon from '../public/Books_are_not_active.svg'
import Books_Icon_Active from '../public/Books_active.svg'

export const iconConfig: IconSets = {
  courses: {
    default: Coures_Icon.src,
    hover: Coures_Icon_Active.src
  },
  services: {
    default: Services_Icon.src,
    hover: Services_Icon_Active.src
  },
  Books: {
    default: Books_Icon.src,
    hover: Books_Icon_Active.src
  },
  Goods: {
    default: Products_Icon.src,
    hover: Products_Icon_Active.src
  }
};


export type IconSet = {
  default: string;
  hover: string;
};

export type IconSets = {
  courses: IconSet;
  services: IconSet;
  Books: IconSet;
  Goods: IconSet;
};

export type HoverStates = {
  courses: boolean;
  services: boolean;
  Books: boolean;
  Goods: boolean;
};


export const useIconHover = (initialStates: HoverStates = {
  courses: false,
  services: false,
  Books: false,
  Goods: false
}) => {

  const [hoverStates, setHoverStates] = useState<HoverStates>(initialStates);


  const handleMouseEnter = (blockName: keyof HoverStates) => {
    setHoverStates(prev => ({
      ...prev,
      [blockName]: true
    }));
  };


  const handleMouseLeave = (blockName: keyof HoverStates) => {
    setHoverStates(prev => ({
      ...prev,
      [blockName]: false
    }));
  };


  return {
    hoverStates,
    handleMouseEnter,
    handleMouseLeave
  };
};