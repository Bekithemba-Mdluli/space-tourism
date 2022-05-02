import React, { useState } from 'react'

// import shutle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import data from '../data/output';

function TechContent() {
    const [selected, setSelected] = useState(0)

    // const toggle = () => {
    //     set
    // }
    return (
        <div className='tech'>
            <h4 className='tech__heading'><span>03</span>Space Launch 101</h4>

            <div className='tech-c'>
                <div className='tech__imgCon'>
                    <img className='tech__imgCon-img hft' src={data.technology[selected].images.portrait} alt="Rocket" />
                    <img className='tech__imgCon-img hide-for-desktop' src={data.technology[selected].images.landscape} alt="Rocket" />
                </div>
                <div className='tech__container'>
                    <div className='tech__container-btns'>
                        <button onClick={() => setSelected(0)} className={selected === 0 ? 'tech__container-btns-btn tActive' : 'tech__container-btns-btn'}>1</button>
                        <button onClick={() => setSelected(1)} className={selected === 1 ? 'tech__container-btns-btn tActive' : 'tech__container-btns-btn'}>2</button>
                        <button onClick={() => setSelected(2)} className={selected === 2 ? 'tech__container-btns-btn tActive' : 'tech__container-btns-btn'}>3</button>
                    </div>

                    <div className='tech__container-content'>
                        <h1><span>THE TERMINOLOGY…</span><br />{data.technology[selected].name}</h1>
                        <p>{data.technology[selected].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechContent