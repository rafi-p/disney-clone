import React from 'react'

const imgBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL

export default function HrMovieCard({movie}) {
    return (
        <section className=''s>
            <img src={imgBaseUrl + movie.backdrop_path}
                className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer '
            />
            <h2 className='w-[110px] md:w-[260px] text-white mt-2 '>{movie.title}</h2>
        </section>
    )
}
