import React from 'react';
import { useState } from 'react';

function OmerCount() {
    const [lastNightCount, setLastNightCount] = useState(null)
    let fullLastNightCount = null;

    if (lastNightCount) {
        fullLastNightCount = `${lastNightCount} days of the Omer`
    }

    const [tonightCount, setTonightCount] = useState(null)
    let fullTonightCount = null;

    if (tonightCount) {
        fullTonightCount = `${tonightCount} days of the Omer`
    }

    return (
        <>
        <div className='d-flex align-items-center'>
            <div className='container text-center my-5 w-50'>
                <p className='fs-2 fw-light text-decoration-underline'>Last night was:</p>
                <p className='fs-2'>{fullLastNightCount}</p>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <p className='fs-2 fw-light text-decoration-underline'>Tonight is:</p>
                <p className='fs-2'>{fullTonightCount}</p>
            </div>
        </div>
        </>
    )
}

export default OmerCount