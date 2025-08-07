"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          380: {
            slidesPerView: movies.length < 2 ? movies.length : 2,
          },
          480: {
            slidesPerView: movies.length < 3 ? movies.length : 3,
          },
          740: {
            slidesPerView: movies.length < 4 ? movies.length : 4,
          },
          980: {
            slidesPerView: movies.length < 5 ? movies.length : 5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-list__item">
              <Link href={`/detail/${movie.id}`}>
                <figure>
                  <Image
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    sizes="300px"
                    priority
                    quality={100}
                  />
                </figure>
                <div className="movie-list__txt">
                  <div
                    className={`progress-circle p${Math.floor(
                      movie.vote_average * 10
                    )} ${Math.floor(movie.vote_average * 10) > 50 && "over50"}`}
                  >
                    <span>{Math.floor(movie.vote_average * 10)}%</span>
                    <div className="left-half-clipper">
                      <div className="first50-bar"></div>
                      <div className="value-bar"></div>
                    </div>
                  </div>
                  <strong className="movie-list__title">{movie.title}</strong>
                  <span className="release_date">{movie.release_date}</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
