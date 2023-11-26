import React from 'react'

function Country({ country }) {
    return (
        <div className='card'>
            <img src={country.flags?.png} alt="" />
            <div>
                <p>Name : {country.name.common}</p>
                <p>Capital : {country.capital[0]}</p>
            </div>
        </div>
    )
}

export default Country