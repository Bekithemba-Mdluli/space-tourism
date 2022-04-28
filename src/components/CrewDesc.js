import React, { useState } from 'react'


import data from '../data/output';

function CrewDesc() {
    const [selected, setSelected] = useState(0)
    return (
        <div>

            <div className='crew-desc'>
                <h4 className='hide-for-desktop'><span>02</span>Meet your crew</h4>

                <div className='crew-container'>
                    <div className='crew-desc__img'>
                        <img src={data.crew[selected].images.png} alt="Douglas"></img>
                    </div>
                    <hr className='hr-crew hide-for-tablet' />

                    <div>


                        <div className='crew-desc__content'>
                            <h4 className='hft'><span>02</span>Meet your crew</h4>
                            <h1><span>{data.crew[selected].role}</span><br /> {data.crew[selected].name}</h1>
                            <p>{data.crew[selected].bio}</p>
                        </div>
                        <div className='crew-desc__radio hide-for-mobile'>
                            <button onClick={() => setSelected(0)} className={selected === 0 ? 'crew-desc__radio-btn rActive' : 'crew-desc__radio-btn'}></button>
                            <button onClick={() => setSelected(1)} className={selected === 1 ? 'crew-desc__radio-btn rActive' : 'crew-desc__radio-btn'}></button>
                            <button onClick={() => setSelected(2)} className={selected === 2 ? 'crew-desc__radio-btn rActive' : 'crew-desc__radio-btn'}></button>
                            <button onClick={() => setSelected(3)} className={selected === 3 ? 'crew-desc__radio-btn rActive' : 'crew-desc__radio-btn'}></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CrewDesc