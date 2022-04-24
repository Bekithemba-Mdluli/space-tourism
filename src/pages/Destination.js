import React from 'react'

import Header from '../components/Header';
import DestinatinD from '../components/Destinatin-Desc'
import DestinationH from '../components/Destination-Header'
import Planet from '../components/Planet'

import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

// import data from '../data/data.json';
import data from '../data/output';

function Destination() {
    return (
        <div className='destination'>
            {/* {console.log(d.name)} */}
            <Header />
            {/* {console.log(data.destinations[0].images.webp)} */}
            <main>
                <div className='destination__content'>
                    <h4><span>01</span> Pick your destination</h4>

                    <div className='destination__content-items'>
                        <div>
                            <Planet image={data.destinations[0].images} />
                            {/* <img src={require(data.destinations[0].images.png)} alt="Earth" /> */}
                            {/* {console.log(data.destinations[0].images)} */}
                        </div>

                        <div>
                            <DestinationH />
                            <DestinatinD name={data.destinations[0].name} desc={data.destinations[0].description} distance={data.destinations[0].distance} travel={data.destinations[0].travel} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Destination