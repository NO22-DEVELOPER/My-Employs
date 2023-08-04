import React from 'react';
import './Card.css'


const Searchbox = ({searchChange}) => {
    return (
        <div className='pa2'>
        <input
        className='pa3 ba  '
        type='search'
        placeholder='Search for Employs'
        onChange={searchChange}
        />
        </div>
    );
}



export default Searchbox;