import React, { useState } from 'react'
import Calendar from './Calendar';
import OmerCount from './OmerCount';

function App() {

    console.log('hello app')

    const [lastNightCount, setLastNightCount] = useState(null)
    const [tonightCount, setTonightCount] = useState(null)

    
    function handleDayClick(days) {
        if (days === null) {
            setLastNightCount(null)
            setTonightCount(null)
        }
        setLastNightCount(days[0])
        setTonightCount(days[1])
    }
    

    return (
    <>
        <div className="text-center m-4">
            <h1 className='fw-lighter'>Hello, I'm your friendly Omer Counting Assistant</h1>
        </div>
        <container>
            <div className='row'>
                <div className='col-md-4'>
                    <Calendar handleDayClick={handleDayClick} />
                </div>
                <div className='col-md-8'>
                    <OmerCount lastNightCount={lastNightCount} tonightCount={tonightCount} />
                </div>
            </div>
        </container>
    </>
  );
}

export default App;
