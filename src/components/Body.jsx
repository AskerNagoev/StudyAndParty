import React from "react";
import middleblockfirst from './middle-block-photo.jpg';
import middlebottomfirst from './middle-bottom-first.jpg'
import middlebottomsecond from './middle-bottom-second.jpg'
import middlebottomthird from './middle-bottom-third.jpg'
import middlebottomfourth from './middle-bottom-fourth.jpg'

const Body = () => {
    return (
        <div className='body'>
            <div className='body-top'>
                <div className='body-top-text-first'>
                    Хочешь сделать студенческую <br /> жизнь незабываемой?
                </div>
                <div className='body-top-text-second'>
                    Открой афишу мероприятий и выбери то, что тебе по душе!
                </div>
                <div className='body-top-start'>
                    <a>Начать</a>
                </div>
            </div>
            <div className='body-middle'>
                <div className='body-middle-block'>
                    <div></div>
                    <div className='body-middle-block-text'>
                        <div>
                            <h1>С нами ты не пропустишь <br /> ни одно мероприятие</h1>
                            <p>Наша платформа содержит мероприятия по <br />
                                основным направлениям деятельности:<br /> творческие,
                                научные, спортивные и развлекательные.</p>

                            <h1>И ни одно мероприятие <br /> не упустит тебя</h1>
                            <p>У тебя есть возможность принять участие в <br /> самых
                                крутых событиях университета и <br /> сделать свое
                                студенчество ярче.</p>
                        </div>
                    </div>
                    <div className='body-middle-block-photo'>
                        <img className='image-in-container' src={middleblockfirst} width='400em'></img>
                    </div>
                    <div></div>
                </div>
                <div className='body-middle-link'>
                    Посмотреть мероприятия
                </div>
            </div>
            <div className='body-bottom'>
                <div className='body-bottom-side'>
                    <img src={middlebottomfirst} width='300em' ></img>
                </div>
                <div className='body-bottom-center'>
                    <img src={middlebottomsecond} width='350em'></img>
                </div>
                <div className='body-bottom-center'>
                    <img src={middlebottomthird} width='350em'></img>
                </div>
                <div className='body-bottom-side'>
                    <img src={middlebottomfourth} width='300em'></img>
                </div>
            </div>
        </div>
    )
}
export default Body;