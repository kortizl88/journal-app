import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                    <input type='text'
                    placeholder='un titulo'
                    className='notes__title-input'
                    />

                    <textarea
                        placeholder='que paso hoy?'
                        className='notes__textarea'>

                    </textarea>

                    <div className='notes__image'>
                        <img 
                            src='https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg'
                            alt='image' />
                    </div>

            </div>
        </div>
    )
}
