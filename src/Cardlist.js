import React from 'react';
import Card from './Card';

const Cardlist = ({employs})=> {
    
    return (
        <div className='divo'>
            {employs.map((user , i )=> {
                return (
                    <Card 
                    key = {i}
                    id = {employs[i].id}
                    name = {employs[i].name}
                    work = {employs[i].work}
                    />
                );
            } 
        )
    }
        </div>
    )
}

export default Cardlist;