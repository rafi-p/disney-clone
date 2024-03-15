import React from 'react'
import generalList from '../constant/generalList'
import MovieList from './MovieList'


export default function GenreMovieList() {
    return (
        <div>
            {
                generalList.genre.map((item, index) => index <= 4 && (
                    <div key={item.id}
                        className='p-8 px-8 md:px-16'
                    >
                        <h2
                            className='text-[20px] text-white font-bold'
                        >
                            {item.name}
                        </h2>
                        <MovieList genreId={item.id} />
                    </div>
                ))
            }
        </div>
    )
}
