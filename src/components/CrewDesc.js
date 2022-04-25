import React from 'react'

import doug from '../assets/crew/image-douglas-hurley.png';

function CrewDesc() {
    return (
        <div className='crew-desc'>
            <h4><span>02</span>Meet your crew</h4>

            <div className='crew-desc__img'>
                <img src={doug} alt="Douglas"></img>
            </div>
            <hr />

            <div>
                <div className='crew-desc__radio'>
                    <button className='crew-desc__radio-btn rActive'></button>
                    <button className='crew-desc__radio-btn'></button>
                    <button className='crew-desc__radio-btn'></button>
                    <button className='crew-desc__radio-btn'></button>
                </div>

                <div className='crew-desc__content'>
                    <h1><span>Commander</span> Douglas Hurley</h1>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
            </div>


        </div>
    )
}

export default CrewDesc