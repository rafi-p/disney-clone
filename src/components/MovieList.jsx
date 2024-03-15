import React from 'react'
import globalAPI from '../services/globalAPI'
import MovieCard from './MovieCard'
import { HiChevronLeft , HiChevronRight} from "react-icons/hi";
import HrMovieCard from './HrMovieCard';
const screenWidth = window.innerWidth


export default function MovieList({genreId, index_}) {
    const [movieList, setMovieList] = React.useState([])
    const elementRef = React.useRef(null)

    React.useEffect(() => {
        getMovieByGenreId()
    }, [])

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    const getMovieByGenreId = () => {
        globalAPI.getMovieByGenreId(genreId)
        .then(res => {
            setMovieList(res.data.results)
        })
    }
    return (
        <div className='relative'>
            <HiChevronLeft className={`hidden md:block text-white text-[30px] absolute ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'} mx-8  cursor-pointer z-20`} onClick={() => sliderLeft(elementRef.current)}/>

            <HiChevronRight className={`hidden md:block text-white text-[30px]  mx-8 ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'} cursor-pointer absolute right-0 z-20`} onClick={() => sliderRight(elementRef.current)}/>

            <div
                ref={elementRef}
                className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-10 scroll-smooth '
            >
                {
                    movieList.map((item, index) => (
                        < >
                            {
                                index_ % 3 === 0
                                ? <HrMovieCard movie={item}/>
                                :
                                <MovieCard movie={item}/>
                            }
                        </>
                    )) 
                }
            </div>

        </div>

    )
}
