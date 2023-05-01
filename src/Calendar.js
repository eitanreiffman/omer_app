import React from 'react';

function Calendar({ handleDayClick, handleMouseOver, handleMouseOut, dayColor }) {

    return (
        <>
            <div className='container w-50 d-flex justify-content-start'>
                <div>
                <p className='my-3 fw-bold'>PLEASE SELECT A DAY:</p>
                    <div className='my-4'>
                        <p className='fs-5'>April</p>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Sun</th>
                                    <th>Mon</th>
                                    <th>Tues</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>1</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>2</td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>3</td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>4</td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>5</td>
                                    <td onClick={() => handleDayClick([0,1])}>6</td>
                                    <td onClick={() => handleDayClick([1,2])}>7</td>
                                    <td onClick={() => handleDayClick([2,3])}>8</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([3,4])}>9</td>
                                    <td onClick={() => handleDayClick([4,5])}>10</td>
                                    <td onClick={() => handleDayClick([5,6])}>11</td>
                                    <td onClick={() => handleDayClick([6,7])}>12</td>
                                    <td onClick={() => handleDayClick([7,8])}>13</td>
                                    <td onClick={() => handleDayClick([8,9])}>14</td>
                                    <td onClick={() => handleDayClick([9,10])}>15</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([10,11])}>16</td>
                                    <td onClick={() => handleDayClick([11,12])}>17</td>
                                    <td onClick={() => handleDayClick([12,13])}>18</td>
                                    <td onClick={() => handleDayClick([13,14])}>19</td>
                                    <td onClick={() => handleDayClick([14,15])}>20</td>
                                    <td onClick={() => handleDayClick([15,16])}>21</td>
                                    <td onClick={() => handleDayClick([16,17])}>22</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([17,18])}>23</td>
                                    <td onClick={() => handleDayClick([18,19])}>24</td>
                                    <td onClick={() => handleDayClick([19,20])}>25</td>
                                    <td onClick={() => handleDayClick([20,21])}>26</td>
                                    <td onClick={() => handleDayClick([21,22])}>27</td>
                                    <td onClick={() => handleDayClick([22,23])}>28</td>
                                    <td onClick={() => handleDayClick([23,24])}>29</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([24,25])}>30</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='fs-5'>May</p>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Sun</th>
                                    <th>Mon</th>
                                    <th>Tues</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td onClick={() => handleDayClick([25,26])}>1</td>
                                    <td onClick={() => handleDayClick([26,27])}>2</td>
                                    <td onClick={() => handleDayClick([27,28])}>3</td>
                                    <td onClick={() => handleDayClick([28,29])}>4</td>
                                    <td onClick={() => handleDayClick([29,30])}>5</td>
                                    <td onClick={() => handleDayClick([30,31])}>6</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([31,32])}>7</td>
                                    <td onClick={() => handleDayClick([32,33])}>8</td>
                                    <td onClick={() => handleDayClick([33,34])}>9</td>
                                    <td onClick={() => handleDayClick([34,35])}>10</td>
                                    <td onClick={() => handleDayClick([35,36])}>11</td>
                                    <td onClick={() => handleDayClick([36,37])}>12</td>
                                    <td onClick={() => handleDayClick([37,38])}>13</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([38,39])}>14</td>
                                    <td onClick={() => handleDayClick([39,40])}>15</td>
                                    <td onClick={() => handleDayClick([40,41])}>16</td>
                                    <td onClick={() => handleDayClick([41,42])}>17</td>
                                    <td onClick={() => handleDayClick([42,43])}>18</td>
                                    <td onClick={() => handleDayClick([43,44])}>19</td>
                                    <td onClick={() => handleDayClick([44,45])}>20</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([45,46])}>21</td>
                                    <td onClick={() => handleDayClick([46,47])}>22</td>
                                    <td onClick={() => handleDayClick([47,48])}>23</td>
                                    <td onClick={() => handleDayClick([48,49])}>24</td>
                                    <td onClick={() => handleDayClick([49,0])}>25</td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>26</td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>27</td>
                                </tr>
                                <tr>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>28</td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>29</td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>30</td>
                                    <td onClick={() => handleDayClick([])} className='bg-light'>31</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar;