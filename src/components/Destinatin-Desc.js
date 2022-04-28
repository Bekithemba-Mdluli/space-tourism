import React, { useState } from 'react'

import Planet from './Planet';

import data from '../data/output';

function DestinatinD() {
    const [planet, setPlanet] = useState(0);
    // const [selected, setSelected] = useState(0):
    return (
        <div className='destination__content-items'>

            <div className='destination__content-items1'>
                <Planet image={data.destinations[planet].images} />
            </div>
            <div className='destination__content-items2'>
                <div className='dh'>
                    <ul className='dh__header'>
                        <li className={planet === 0 ? 'bActive' : ''}><button onClick={() => { setPlanet(0) }}>Moon</button></li>
                        <li className={planet === 1 ? 'bActive' : ''}><button onClick={() => { setPlanet(1) }}>Mars</button></li>
                        <li className={planet === 2 ? 'bActive' : ''}><button onClick={() => { setPlanet(2) }}>Europa</button></li>
                        <li className={planet === 3 ? 'bActive' : ''}><button onClick={() => { setPlanet(3) }}>Titan</button></li>
                    </ul>
                </div>

                <div className='destinationD'>
                    <h1>{data.destinations[planet].name}</h1>
                    <p className='destinationD-p'>{data.destinations[planet].description}</p>
                    <hr />

                    <div className='destinationD-container'>

                        <div className='destinationD__section'>
                            <p className='destinatinD__section-top'>Avg. distance</p>
                            <p className='destinationD__section-bottom'>{data.destinations[planet].distance}</p>
                        </div>

                        <div className='destinationD__section'>
                            <p className='destinatinD__section-top'>Est. travel time</p>
                            <p className='destinationD__section-bottom'>{data.destinations[planet].travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinatinD