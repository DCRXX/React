'use client';
import { ReactElement, useState, useRef, ChangeEvent, useEffect} from "react";
import './PhotoshopContent.css'
import '@/globals.css'
import Sort_active from './public/Sort-active.svg'
import Sort_def from './public/Sort-default.svg'
import IC_Course from './public/Icon-course.svg'
import Status from './public/Status.svg'
import star_def from './public/star-def.svg'
import star_active from './public/star-active.svg'
import arrow from './public/arrow.svg'
import icon_user from './public/icon-user.svg'


export default function PhotoshopContent(): ReactElement {
    const [isHovered, setIsHovered] = useState(false);
    const [rating, setRating] = useState<number>(0);
    const [ratingReview, setRatingReview] = useState<number>(0);
    const [hoverRatingReview, setHoverRatingReview] = useState<number>(0);
    const currentRatingReview = hoverRatingReview || ratingReview;

    const [ratingCourseEvaluation, setRatingCourseEvaluation] = useState<number>(0);
    const [hoverRatingCourseEvaluation, setHoverRatingCourseEvaluation] = useState<number>(0);
    const currentRatingCourseEvaluation = hoverRatingCourseEvaluation|| ratingCourseEvaluation;

    const [hoverRating, setHoverRating] = useState<number>(0);
    const currentRating = hoverRating || rating;
    const [isActive, setIsActive] = useState(false);
    const [reviewsOpen, setReviewsOpen] = useState(false);


    const reviewTextareaRef = useRef<HTMLTextAreaElement>(null);
    const autoResizeTextarea = (element: HTMLTextAreaElement): void => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };
    const handleTextareaInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        autoResizeTextarea(event.target);
    };
    useEffect(() =>{
        if (reviewTextareaRef.current) {
            autoResizeTextarea(reviewTextareaRef.current);
        }
    }, []);


    return (
        <section className="section">
            <div className="block-header">
                <div className="Name-block">
                    <p>Курсы по, Photoshop</p>
                    <div className="number">
                        <p>10</p>
                    </div>
                </div>
                <div className="sorting-block">
                    <div className="rating-block"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img src={isHovered ? Sort_active.src : Sort_def.src}></img>
                        <p>По рейтингу</p>
                    </div>
                    <p>По цене</p>
                </div>
            </div>
            <div className="Section-Course">
                <div className="course">
                    <div className="course-title">
                        <div className="title">
                            <img src={IC_Course.src}></img>
                            <div>
                                <div className="Name-с">
                                    <p>Профессия дизайнер от 0 до PRO</p>
                                    <div className="status">
                                        <img src={Status.src}></img>
                                    </div>
                                </div>
                                <div className="category">
                                    <p1>Photoshop</p1>
                                    <p1>Дизайн</p1>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 'clamp(10px, 1.8vw, 100px)', }}>
                            <div className="Price-block">
                                <div className="Price">
                                    <p>24 000 ₽</p>
                                    <div className="discount">
                                        <p>-10 000 ₽ </p>
                                    </div>
                                    <span>цена</span>
                                </div>
                                <div className="Price-on-credit">
                                    <p>5 000 ₽<span>/мес</span></p>
                                    <span>в кредит</span>
                                </div>
                            </div>
                            <div className="grade">
                                <div>
                                    {Array.from({ length: 5 }, (_, i) => {
                                        const starNumber = i + 1;
                                        const isActive = starNumber <= currentRating;
                                        return (
                                            <img
                                                key={i}
                                                src={isActive ? star_active.src : star_def.src}
                                                onMouseEnter={() => setHoverRating(starNumber)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                onClick={() => setRating(starNumber)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )
                                    })}
                                </div>
                                <span>20 отзывов</span>
                            </div>
                        </div>
                    </div>
                    <div className="course-description">
                        <p>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</p>
                    </div>
                    <div className="course-characteristics">
                        <div className="block-1">
                            <div className="D">
                                <p>Документ об окончании </p>
                                <p>Диплом</p>
                            </div>
                            <div className="C">
                                <p>Сложность</p>
                                <p>Начальная</p>
                            </div>
                            <div className="B">
                                <p>Длительность</p>
                                <p>5 месяцев</p>
                            </div>
                            <div className="add_conditions">
                                <p>Гарантия трудоустройства</p>
                            </div>
                        </div>
                        <div className="block-2">
                            <div className="Advantages">
                                <span>Преимущества</span>
                                <p>Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала</p>
                            </div>
                            <div className="Flaws">
                                <span>Недостатки</span>
                                <p>Некоторое темы раскрыты не до конца</p>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="Find-out-more">
                            <p>Узнать подробнее</p>
                        </div>
                        <div className={`Read-reviews ${reviewsOpen ? 'active' : ''}`}
                            onClick={() => setReviewsOpen(!reviewsOpen)}
                            role="button"
                            aria-expanded={reviewsOpen}
                        >
                            <p>Читать отзывы</p>
                            <img src={arrow.src} />
                        </div>
                    </div>
                </div>
                <div className={`review ${reviewsOpen ? 'open' : ''}`}>
                    <div className="review-content">
                        <div className="review-header">
                            <div className="Title">
                                <img src={icon_user.src} />
                                <p>Василий Раганов:</p>
                                <span>Что вас ждет в этом курсе?</span>
                            </div>
                            <div className="review-info">
                                <div className="data">
                                    <p>10 марта 2021</p>
                                </div>
                                <div className="grade" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        {Array.from({ length: 5 }, (_, f) => {
                                            const starNumber = f + 2;
                                            const isActive = starNumber <= currentRatingReview;
                                            return (
                                                <img
                                                    key={f}
                                                    src={isActive ? star_active.src : star_def.src}
                                                    onMouseEnter={() => setHoverRatingReview(starNumber)}
                                                    onMouseLeave={() => setHoverRatingReview(0)}
                                                    onClick={() => setRatingReview(starNumber)}
                                                    style={{ cursor: 'pointer' }}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-text">
                            <p>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</p>
                        </div>
                        <div className="sending-feedback">
                            <input className="Name" 
                            type="text"
                            placeholder="Имя"
                            />
                            <input className="Review-title" 
                            type="text"
                            placeholder="Заголовок отзыва"
                            />
                            <div className="grade-Evaluation" style={{ display: 'flex'}}>
                                <p>Оценка:</p>
                                    <div>
                                        {Array.from({ length: 5 }, (_, f) => {
                                            const starNumber = f + 2;
                                            const isActive = starNumber <= currentRatingCourseEvaluation;
                                            return (
                                                <img
                                                    key={f}
                                                    src={isActive ? star_active.src : star_def.src}
                                                    onMouseEnter={() => setHoverRatingCourseEvaluation(starNumber)}
                                                    onMouseLeave={() => setHoverRatingCourseEvaluation(0)}
                                                    onClick={() => setRatingCourseEvaluation(starNumber)}
                                                    style={{ cursor: 'pointer' }}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            <textarea className="Review-text"
                            ref={reviewTextareaRef}
                            onChange={handleTextareaInput}
                            placeholder="Текст отзыва"
                            />
                        </div>
                        <div className="send-feedback">
                            <button className="sending">
                                <p>Отправить</p>
                            </button>
                            <p>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


