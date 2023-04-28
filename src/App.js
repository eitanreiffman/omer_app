import React from 'react'
import Calendar from './Calendar';
import OmerCount from './OmerCount';

function App() {
  return (
    <>
        <div className="text-center m-4">
            <h1 className='fw-lighter'>Hello, I'm your friendly Omer Counting Assistant</h1>
        </div>
        <container>
            <div className='row'>
                <div className='col-md-4'>
                    <Calendar />
                </div>
                <div className='col-md-8'>
                    <OmerCount />
                </div>
            </div>
        </container>
    </>
  );
}

export default App;
