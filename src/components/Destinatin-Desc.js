import React from 'react'

function DestinatinD({ name, desc, distance, travel }) {
    return (
        <div className='destinationD'>
            <h1>{name}</h1>
            <p className='destinationD-p'>{desc}</p>
            <hr />

            <div className='destinationD-container'>

                <div className='destinationD__section'>
                    <p className='destinatinD__section-top'>Avg. distance</p>
                    <p className='destinationD__section-bottom'>{distance}</p>
                </div>

                <div className='destinationD__section'>
                    <p className='destinatinD__section-top'>Est. travel time</p>
                    <p className='destinationD__section-bottom'>{travel}</p>
                </div>
            </div>
        </div>
    )
}

export default DestinatinD