import React from 'react'

function Hero() {
    return (
        <div className='hero'>
            <div className='heroL-container'>
                <div className='hero__left'>
                    <h1>
                        <span>So, you want to travel to</span><br /> Space
                    </h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
            </div>

            <div className='hero__right'>
                <div className='hero__right-btn'>
                    {/* <button>
                        Explore
                    </button> */}
                    <a className='large-button' href='/'>Explore</a>
                </div>
            </div>
        </div>
    )
}

export default Hero