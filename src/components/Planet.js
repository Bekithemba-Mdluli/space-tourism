import React from 'react'

const Planet = ({ image }) => {
    return (
        <div className='planet'>
            <img src={image} alt='Planet' />
            {console.log(image)}

        </div>
    )
}

export default Planet