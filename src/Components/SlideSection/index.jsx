import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Pagination,Virtual} from 'swiper'
import MovieCard from '../MovieCard';
import { useGetPopularityQuery, useGetUpcommingQuery } from '../../services/api';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../../styles/slideSection.scss"

let sect={
    popularity:{
        method:useGetPopularityQuery,
        title:'The most popular now'
    },
    upcomming:{
        method:useGetUpcommingQuery,
        title:'Upcoming releases'
    }
}

const SlidesSection=({section})=>{
    
        let {currentData,error,isFetching}= sect[section].method()
        if(isFetching)return (<div>Loading</div>)
        if(currentData.length){
            return (
                <Swiper
                slidesPerView={'auto'}
                navigation={true}
                pagination={{type:'progressbar'}}
                parallax={true}
                modules={[Navigation,Pagination]}
                spaceBetween={30}
                className="mySwiper"

                >
                    <h5 className="section-title" >{sect[section].title}</h5>
                    {currentData.map((e,i)=><SwiperSlide className='swiper-slide-section' key={e.id+e.title}  >
                        {console.log(e)}
                        <MovieCard title={e.title} poster={e.poster_path}/>
                        </SwiperSlide>)}
                </Swiper>
            )
        }
}

export default SlidesSection