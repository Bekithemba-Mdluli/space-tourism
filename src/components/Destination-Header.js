import React, { useState } from 'react'

const DestinationH = () => {
    const [planet, setPlanet] = useState(0);

    return (
        <div className='dh'>
            <ul className='dh__header'>
                <li className={planet === 0 ? 'bActive' : ''}><button onClick={() => { setPlanet(0) }}>Moon</button></li>
                <li className={planet === 1 ? 'bActive' : ''}><button onClick={() => { setPlanet(1) }}>Mars</button></li>
                <li className={planet === 2 ? 'bActive' : ''}><button onClick={() => { setPlanet(2) }}>Europa</button></li>
                <li className={planet === 3 ? 'bActive' : ''}><button onClick={() => { setPlanet(3) }}>Titan</button></li>
            </ul>
        </div>
    )
}

export default DestinationH