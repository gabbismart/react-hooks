import React from 'react';

const MovieCard = (props) => {
    return (
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    )
};

export default MovieCard;