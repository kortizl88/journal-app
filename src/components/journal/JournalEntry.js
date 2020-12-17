import React from 'react'

export const JournalEntry = ({value}) => {
    return (
        <div className='journal__entry'>
            <div className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-930x487.jpg)'
            }}></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    Lorrem ipsum etnc etc fasdfasdff asdfdfas asdfasd sadsfd
                </p>

            </div>
            <div className='journal__entry-date-box'>
                <span>Lunes</span>
                <h4>28</h4>
                
            </div>
        </div>
    )
}
