import React from 'react'

import shutle from '../assets/technology/image-launch-vehicle-landscape.jpg';

function TechContent() {
    return (
        <div className='tech'>
            <h4 className='tech__heading'><span>03</span>Space Launch 101</h4>

            <div className='tech__imgCon'>
                <img className='tech__imgCon-img' src={shutle} alt="Rocket" />
            </div>

            <div className='tech__container'>
                <div className='tech__container-btns'>
                    <button className='tech__container-btns-btn tActive'>1</button>
                    <button className='tech__container-btns-btn'>2</button>
                    <button className='tech__container-btns-btn'>3</button>
                </div>
            </div>
        </div>
    )
}

export default TechContent