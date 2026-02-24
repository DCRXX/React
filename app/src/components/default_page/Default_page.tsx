'use client';
import Logo from '@/src/components/Header/public/Logo.svg'
import check_mark from '@/src/components/courses/design/photoshop/public/check-mark.svg'
import './Default_page.css'
import '@/globals.css'
import { ReactElement } from "react";

export default function Home(): React.ReactElement{
    return(
        <section className="Home-page">
            <div className="hero-section">
                <img src={Logo.src}/>
                <p> <span>OWL Top</span> — ваш путь в цифровые профессии</p>
            </div>
            <div className='description-section'>
                <p>Образовательная платформа с практическими курсами по дизайну, разработке, аналитике и маркетингу. А ещё полезные сервисы, книги и инструменты для работы.</p>
            </div>
            <div className='section-of-benefits'>
                <div className="block-benefits">
                    <img src={check_mark.src}/>
                    <p>Практические навыки</p>
                    <span>Курсы с реальными проектами для портфолио</span>
                </div>
                <div className="block-benefits">
                    <img src={check_mark.src}/>
                    <p>Сервисы и инструменты</p>
                    <span>Облачные хранилища, аналитика, коммуникации</span>
                </div>
                <div className="block-benefits">
                    <img src={check_mark.src}/>
                    <p>Библиотека знаний</p>
                    <span>Книги по софт-скиллам, бизнесу и стартапам</span>
                </div>
                <div className="block-benefits">
                    <img src={check_mark.src}/>
                    <p>Товары и подписки</p>
                    <span>Лицензии ПО, годовые подписки на сервисы и брендовый мерч</span>
                </div>
            </div>
            <div className='recruiting-section'>
                <h1>Готовы начать обучение?</h1>
                <p>Откройте меню слева и выберите первый курс!</p>
            </div>
        </section>
    )
}