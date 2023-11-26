import React from 'react'
import Country from './Country'

export const Countries = ({ countries }) => {
    return (
        <div className='countries'>
            {countries?.map((country, index) => (<Country key={index} country={country} />))}
        </div>
    )
}
