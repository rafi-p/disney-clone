import React from 'react'

const imgBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL

export default function MovieCard({movie}) {
    return (
        <>
            <img src={imgBaseUrl + movie.poster_path}
                className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in'
            />
        </>
    )
}
