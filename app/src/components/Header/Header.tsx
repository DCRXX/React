'use client';
import { ReactElement, useState, useRef, useEffect } from 'react';
import './Header.css'
import logo from './public/Logo.svg'
import Icon_Search from './public/Search.svg'
import { useIconHover, iconConfig } from './scripts/useHover';
import { useAccordion, useAccordionChild } from './scripts/useAcordion';

export default function Header(): ReactElement {
  const { hoverStates, handleMouseEnter, handleMouseLeave } = useIconHover();
  const { openSections, toggleSection } = useAccordion();
  const { openSectionsChild, toggleSectionChild } = useAccordionChild();


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
      <button className='search-button'><img className='Icon-Search' src={Icon_Search.src} /></button>
    </div>
    <div className="list-of-services">
      <div className={`coures ${openSections.courses ? 'active' : ''}`}
        onMouseEnter={() => handleMouseEnter('courses')}
        onMouseLeave={() => handleMouseLeave('courses')}
        onClick={() => toggleSection('courses')}
      >
        <img src={
          openSections.courses ? iconConfig.courses.hover :
            hoverStates.courses ? iconConfig.courses.hover :
              iconConfig.courses.default
        } />
        <p1>Курсы</p1>
      </div>
      <div className={`accordion-content-coures ${openSections.courses ? 'open' : ''}`}>
        <div className='accordion-content-inner'>
          <div className='accord-spis-1'>

            <p className={`spis-item ${openSectionsChild.desing ? 'active' : ''}`}
              onClick={() => toggleSectionChild('desing')}
            >ДИЗАЙН</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.desing ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>Photoshop</p>
                  <p>AfterEffect</p>
                  <p>Illustrator</p>
                  <p>Figma</p>
                </div>
              </div>
            </div>

            <p className={`spis-item ${openSectionsChild.development ? 'active' : ''}`}
              onClick={() => toggleSectionChild('development')}
            >РАЗРАБОТКА</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.development ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>JavaScript</p>
                  <p>React/Next.js</p>
                  <p>Python</p>
                  <p>Node.js</p>
                  <p>Базы данных</p>
                </div>
              </div>
            </div>

            <p className={`spis-item ${openSectionsChild.analytics ? 'active' : ''}`}
              onClick={() => toggleSectionChild('analytics')}
            >АНАЛИТИКА</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.analytics ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>Excel</p>
                  <p>Google Analytics</p>
                  <p>SQL для аналитиков</p>
                  <p>Tableau</p>
                </div>
              </div>
            </div>

            <p className={`spis-item ${openSectionsChild.marketing ? 'active' : ''}`}
              onClick={() => toggleSectionChild('marketing')}
            >МАРКЕТИНГ</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.marketing ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>SEO</p>
                  <p>SMM</p>
                  <p>Копирайтинг</p>
                  <p>Контекстная реклама</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`services ${openSections.services ? 'active' : ''}`}
        onMouseEnter={() => handleMouseEnter('services')}
        onMouseLeave={() => handleMouseLeave('services')}
        onClick={() => toggleSection('services')}
      >
        <img src={
          openSections.services ? iconConfig.services.hover :
            hoverStates.services ? iconConfig.services.hover :
              iconConfig.services.default
        } />
        <p1>Сервисы</p1>
      </div>
      <div className={`accordion-content-coures ${openSections.services ? 'open' : ''}`}>
        <div className='accordion-content-inner'>
          <div className='accord-spis-1'>
            <p className={`spis-item ${openSectionsChild.cloud_storage ? 'active' : ''}`}
              onClick={() => toggleSectionChild('cloud_storage')}
            >ОБЛАЧНЫЕ ХРАНИЛИЩА</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.cloud_storage ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>Google Drive</p>
                  <p>Dropbox</p>
                  <p>Яндекс.Диск</p>
                </div>
              </div>
            </div>

            <p className={`spis-item ${openSectionsChild.communication ? 'active' : ''}`}
              onClick={() => toggleSectionChild('communication')}
            >КОММУНИКАЦИЯ</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.communication ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>Slack для команд</p>
                  <p>Zoom Pro</p>
                  <p>Notion</p>
                </div>
              </div>
            </div>

            <p className={`spis-item ${openSectionsChild.data_analytics ? 'active' : ''}`}
              onClick={() => toggleSectionChild('data_analytics')}
            >АНАЛИТИКА ДАННЫХ</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.data_analytics ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>Google Data Studio</p>
                  <p>Mixpanel</p>
                  <p>Hotjar</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={`Books ${openSections.Books ? 'active' : ''}`}
        onMouseEnter={() => handleMouseEnter('Books')}
        onMouseLeave={() => handleMouseLeave('Books')}
        onClick={() => toggleSection('Books')}
      >
        <img src={
          openSections.Books ? iconConfig.Books.hover :
            hoverStates.Books ? iconConfig.Books.hover :
              iconConfig.Books.default
        } />
        <p1>Книги</p1>
      </div>
      <div className={`accordion-content-coures ${openSections.Books ? 'open' : ''}`}>
        <div className='accordion-content-inner'>
          <div className='accord-spis-1'>
            <p className={`spis-item ${openSectionsChild.soft_skills ? 'active' : ''}`}
              onClick={() => toggleSectionChild('soft_skills')}
            >СОФТ СКИЛЛЫ</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.soft_skills ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>"7 навыков высокоэффективных людей"</p>
                  <p>"Как работать 4 часа в неделю"</p>
                  <p>"Атомные привычки"</p>
                </div>
              </div>
            </div>

            <p className={`spis-item ${openSectionsChild.business_and_startups ? 'active' : ''}`}
              onClick={() => toggleSectionChild('business_and_startups')}
            >БИЗНЕС И СТАРТАПЫ</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.business_and_startups ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>"Стартап за $100"</p>
                  <p>"Бизнес с нуля"</p>
                  <p>"Метод бережливого стартапа"</p>
                </div>
              </div>
            </div>

          </div>
          <div className='accord-spis-2'>
          </div>
        </div>
      </div>
      <div className={`Goods ${openSections.Goods ? 'active' : ''}`}
        onMouseEnter={() => handleMouseEnter('Goods')}
        onMouseLeave={() => handleMouseLeave('Goods')}
        onClick={() => toggleSection('Goods')}
      >
        <img src={
          openSections.Goods ? iconConfig.Goods.hover :
            hoverStates.Goods ? iconConfig.Goods.hover :
              iconConfig.Goods.default
        } />
        <p1>Товары</p1>
      </div>
      <div className={`accordion-content-coures ${openSections.Goods ? 'open' : ''}`}>
        <div className='accordion-content-inner'>
          <div className='accord-spis-1'>
            <p className={`spis-item ${openSectionsChild.subrcriptions_and_licenses ? 'active' : ''}`}
              onClick={() => toggleSectionChild('subrcriptions_and_licenses')}
            >ПОДПИСКИ И ЛИЦЕНЗИИ</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.subrcriptions_and_licenses ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>Годовые лицензии ПО</p>
                  <p>Подписка на сервисы</p>
                  <p>Доступ к библиотекам</p>
                </div>
              </div>
            </div>

            <p className={`spis-item ${openSectionsChild.mersch_and_branding ? 'active' : ''}`}
              onClick={() => toggleSectionChild('mersch_and_branding')}
            >МЕРЧ И БРЕНДИНГ</p>

            <div className={`accordion-content-in-spis ${openSectionsChild.mersch_and_branding ? 'open' : ''}`}>
              <div className='accordion-content-inner'>
                <div className='accord-spis-1'>
                  <p>Футболки с логотипом</p>
                  <p>Кружки для программистов</p>
                  <p>Стикеры с мемами про код</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </header>;
}