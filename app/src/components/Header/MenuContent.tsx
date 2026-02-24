import { ReactElement, useState, useEffect } from 'react';
import { getRoutesBySubcategory, waitForRoutes, areRoutesInitialized } from '../index';
import { useAccordion, useAccordionChild } from './scripts/useAcordion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useIconHover, iconConfig } from './scripts/useHover';
import { menuAPI,ContentType, Category } from '@/routes';


interface MenuContentProps {
    isMobile: boolean;
    currentRouteId: string;
    onCourseClick: (courseId: string) => void;
}

export default function MenuContent({
    isMobile,
    currentRouteId,
    onCourseClick
}: MenuContentProps): ReactElement {
    /*Хуки для анимаций и работы*/
    const { hoverStates, handleMouseEnter, handleMouseLeave } = useIconHover();
    const { openSections, toggleSection } = useAccordion();
    const { openSectionsChild, toggleSectionChild } = useAccordionChild();
    

    /*Хуки для работы смены URL*/
    const router = useRouter();
    const searchParams = useSearchParams();

    /*Хуки для данных акардеона*/

    // Курсы
    const [designCourses, setDesignCourses] = useState<any[]>([]);
    const [developmentCourses, setDevelopmentCourses] = useState<any[]>([]);
    const [analyticsCourses, useAnalyticsCourses] = useState<any[]>([]);
    const [marketingCourses, setMarketingCourses] = useState<any[]>([]);
    // Сервисы
    const [storageServise, setStorageServise] = useState<any[]>([]);
    const [communicationServise, setCommunicationServise] = useState<any[]>([]);
    const [analyticsServise, setAnalyticsServise] = useState<any[]>([]);
    // Книги
    const [skillsBooks, setSkillsBooks] = useState<any[]>([]);
    const [startupsBooks, setStartupsBooks] = useState<any[]>([]);
    // Товары
    const [subscriptionsGoods, setSubscriptionsGoods] = useState<any[]>([]);
    const [merchGoods, setMerchGoods] = useState<any[]>([]);

    const [loading, setLoading] = useState(true);

    const [menuItem, setMenuItem] = useState<ContentType[]>([]);
    const coursesData = menuItem.find(item => item.type ==='courses');

    const useCategoriesObject = (categories: Category[] | undefined) => {
        return categories?.reduce((acc, cat) => {
            acc[cat.name] = cat;
                return acc;
        }, {} as Record<string, Category>);
    };
    const categoriesObj = useCategoriesObject(coursesData?.categories);


    useEffect(() =>{
        menuAPI.getFullMenu().then(data => {
            setMenuItem(data);
        });
    },  []);

    
    useEffect(() => {
    const loadCourses = async () => {
      if (!areRoutesInitialized()) {
        await waitForRoutes();
      }
      // Курсы
      setDesignCourses(getRoutesBySubcategory('courses', 'Дизайн'));
      setDevelopmentCourses(getRoutesBySubcategory('courses', 'Разработка'));
      useAnalyticsCourses(getRoutesBySubcategory('courses', 'Аналитика'));
      setMarketingCourses(getRoutesBySubcategory('courses', 'Маркетинг'));

      // Сервисы
      setStorageServise(getRoutesBySubcategory('services', 'ОБЛАЧНЫЕ ХРАНИЛИЩА'));
      setCommunicationServise(getRoutesBySubcategory('services', 'КОММУНИКАЦИЯ'));
      setAnalyticsServise(getRoutesBySubcategory('services', 'АНАЛИТИКА ДАННЫХ'));

      // Книги
      setSkillsBooks(getRoutesBySubcategory('Books', 'СОФТ СКИЛЛЫ'));
      setStartupsBooks(getRoutesBySubcategory('Books', 'БИЗНЕС И СТАРТАПЫ'));

      // Товары
      setSubscriptionsGoods(getRoutesBySubcategory('Goods', 'ПОДПИСКИ И ЛИЦЕНЗИИ'));
      setMerchGoods(getRoutesBySubcategory('Goods', 'МЕРЧ И БРЕНДИНГ'));

      setLoading(false);
    };

    loadCourses();
  }, []);





    /*Хуки для Модалки*/
    const containerClass = isMobile ? 'mobile-accordions' : 'list-of-services';
    const accordionClass = isMobile ? 'mobile-accordion-item' : '';
    const contentClass = isMobile ? 'mobile-content' : 'accordion-content-courses';

    /*скрипт изменения URL*/
    const handlecourseClick = (courseId: string) => {
        console.log('Переключаемся на курс:', courseId);

        const params = new URLSearchParams(searchParams.toString());
        params.set('content', courseId);

        router.replace(`/?${params.toString()}`, { scroll: false });
    }


    return (
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

                <p>{menuItem.find(item => item.type === 'courses')?.label}</p>
                
            </div>
            <div className={`accordion-content-coures ${openSections.courses ? 'open' : ''}`}>
                <div className='accordion-content-inner'>
                    <div className='accord-spis-1'>

                        <p className={`spis-item ${openSectionsChild.design ? 'active' : ''}`}
                            onClick={() => toggleSectionChild('design')}
                        >{categoriesObj?.['Дизайн']?.name.toUpperCase()}</p>

                        <div className={`accordion-content-in-spis ${openSectionsChild.design ? 'open' : ''}`}>
                            <div className='accordion-content-inner'>
                                <div className='accord-spis-1'>

                                    {designCourses.length > 0 ? (
                                        designCourses.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                               
                                                    <p>{course.label}</p>
                                                
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}

                                </div>
                            </div>
                        </div>

                        <p className={`spis-item ${openSectionsChild.development ? 'active' : ''}`}
                            onClick={() => toggleSectionChild('development')}
                        >{categoriesObj?.['Разработка']?.name.toUpperCase()}</p>

                        <div className={`accordion-content-in-spis ${openSectionsChild.development ? 'open' : ''}`}>
                            <div className='accordion-content-inner'>
                                <div className='accord-spis-1'>

                                    {developmentCourses.length > 0 ? (
                                        developmentCourses.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                <p>{course.label}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className={`spis-item ${openSectionsChild.analytics ? 'active' : ''}`}
                            onClick={() => toggleSectionChild('analytics')}
                        >{categoriesObj?.['Аналитика']?.name.toUpperCase()}</p>

                        <div className={`accordion-content-in-spis ${openSectionsChild.analytics ? 'open' : ''}`}>
                            <div className='accordion-content-inner'>
                                <div className='accord-spis-1'>

                                    {analyticsCourses.length > 0 ? (
                                        analyticsCourses.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                <p>{course.label}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}

                                </div>
                            </div>
                        </div>

                        <p className={`spis-item ${openSectionsChild.marketing ? 'active' : ''}`}
                            onClick={() => toggleSectionChild('marketing')}
                        >{categoriesObj?.['Маркетинг']?.name.toUpperCase()}</p>

                        <div className={`accordion-content-in-spis ${openSectionsChild.marketing ? 'open' : ''}`}>
                            <div className='accordion-content-inner'>
                                <div className='accord-spis-1'>

                                    {marketingCourses.length > 0 ? (
                                        marketingCourses.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                <p>{course.label}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}

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
                <p>{menuItem.find(item => item.type === 'services')?.label}</p>
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
                                    {storageServise.length > 0 ? (
                                        storageServise.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                    <p>{course.label}</p>
                                                
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className={`spis-item ${openSectionsChild.communication ? 'active' : ''}`}
                            onClick={() => toggleSectionChild('communication')}
                        >КОММУНИКАЦИЯ</p>

                        <div className={`accordion-content-in-spis ${openSectionsChild.communication ? 'open' : ''}`}>
                            <div className='accordion-content-inner'>
                                <div className='accord-spis-1'>
                                    {communicationServise.length > 0 ? (
                                        communicationServise.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                    <p>{course.label}</p>
                                                
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className={`spis-item ${openSectionsChild.data_analytics ? 'active' : ''}`}
                            onClick={() => toggleSectionChild('data_analytics')}
                        >АНАЛИТИКА ДАННЫХ</p>

                        <div className={`accordion-content-in-spis ${openSectionsChild.data_analytics ? 'open' : ''}`}>
                            <div className='accordion-content-inner'>
                                <div className='accord-spis-1'>
                                    {analyticsServise.length > 0 ? (
                                        analyticsServise.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                    <p>{course.label}</p>
                                                
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}
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
                <p>{menuItem.find(item => item.type === 'Books')?.label}</p>
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
                                    {skillsBooks.length > 0 ? (
                                        skillsBooks.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                    <p>{course.label}</p>
                                                
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className={`spis-item ${openSectionsChild.business_and_startups ? 'active' : ''}`}
                            onClick={() => toggleSectionChild('business_and_startups')}
                        >БИЗНЕС И СТАРТАПЫ</p>

                        <div className={`accordion-content-in-spis ${openSectionsChild.business_and_startups ? 'open' : ''}`}>
                            <div className='accordion-content-inner'>
                                <div className='accord-spis-1'>
                                    {startupsBooks.length > 0 ? (
                                        startupsBooks.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                    <p>{course.label}</p>
                                                
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}
                                </div>
                            </div>
                        </div>

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
                <p>{menuItem.find(item => item.type === 'Goods')?.label}</p>
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
                                    {subscriptionsGoods.length > 0 ? (
                                        subscriptionsGoods.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                    <p>{course.label}</p>
                                                
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className={`spis-item ${openSectionsChild.mersch_and_branding ? 'active' : ''}`}
                            onClick={() => toggleSectionChild('mersch_and_branding')}
                        >МЕРЧ И БРЕНДИНГ</p>

                        <div className={`accordion-content-in-spis ${openSectionsChild.mersch_and_branding ? 'open' : ''}`}>
                            <div className='accordion-content-inner'>
                                <div className='accord-spis-1'>
                                    {merchGoods.length > 0 ? (
                                        merchGoods.map((course) => (
                                            <div
                                                key={course.id}
                                                className={`course-item ${currentRouteId === course.id ? 'active-course' : ''}`}
                                                onClick={() => handlecourseClick(course.id)}
                                            >
                                                    <p>{course.label}</p>
                                                
                                            </div>
                                        ))
                                    ) : (
                                        <p>Курсы пока не добавлены</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}