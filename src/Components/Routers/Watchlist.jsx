import React, { Component } from 'react';
import Job from '../Job';
import NavBar from '../NavBar';

class Watchlist extends Component {
    render() {
        return (
            <>
                <div>
                    <div className='px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                        <Job/>
                        <Job/>
                        <Job/>
                        <Job/>
                        <Job/>
                    </div>
                </div>
            </>
                        
        );
    }
}

export default Watchlist;
