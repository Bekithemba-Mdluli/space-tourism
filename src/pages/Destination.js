import React from 'react'

import Header from '../components/Header';
import DestinatinD from '../components/Destinatin-Desc'

import data from '../data/output';

function Destination() {
    return (
        <div className='destination'>
            <Header />
            <main>
                <div className='destination__content'>
                    <h4><span>01</span> Pick your destination</h4>
                    <DestinatinD name={data.destinations[0].name} desc={data.destinations[0].description} distance={data.destinations[0].distance} travel={data.destinations[0].travel} />
                </div>
            </main>
        </div>
    )
}

export default Destination