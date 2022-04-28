import React from 'react'

import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';

const Planet = ({ image }) => {
    return (
        <div className='planet'>
            <img src={image} alt='Planet' />
            {/* <img src={moon} alt='Planet' /> */}
            {console.log(image)}

        </div>
    )
}

export default Planet