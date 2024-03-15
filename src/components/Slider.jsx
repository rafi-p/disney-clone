import React from 'react'
import globalAPI from '../services/globalAPI'
import { HiChevronLeft , HiChevronRight} from "react-icons/hi";


const imgBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL
const screenWidth = window.innerWidth

export default function Slider() {
    const [ movieList, setMovieList ] = React.useState([])
    const elementRef = React.useRef()

    React.useEffect(() => {
        getTrendingMovies()
    }, [])

    const getTrendingMovies = () => {
        globalAPI.getTrendingVideos
            .then((res) => {
                setMovieList(res.data.results)
            })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)}/>
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)}/>
            <div
                className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth'
                ref={elementRef}
            >
                {
                    movieList.map((item, index) => (
                        <img 
                            key={item.id} 
                            src={imgBaseUrl + item.backdrop_path} 
                            className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
                        />
                    ))
                }
            </div>
        </div>
    )
}
