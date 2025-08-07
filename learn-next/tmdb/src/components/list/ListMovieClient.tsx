"use client";
import Link from "next/link";
import CustomImage from "../common/CustomImage";
import { getMovieMoreData } from "@/libs/api/movie";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ListMovieClient({
  initialMovies,
  totalPage,
  type,
  keyword,
}: {
  initialMovies: Movie[];
  totalPage: number;
  type: string;
  keyword: string;
}) {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(page < totalPage);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    const nextPage = page + 1;
    try {
      const { results } = await getMovieMoreData(nextPage, type, keyword);
      setMovies((movie) => [...movie, ...results]);
      setPage(nextPage);
      if (nextPage >= totalPage) setHasMore(false);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [keyword, page, totalPage, type]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && hasMore) {
        loadMore();
      }
    });
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, [loadMore, hasMore, isLoading]);

  return (
    <>
      <div className="movie-list">
        {movies &&
          movies.map((movie, i) => (
            <div key={`${movie.id} - ${i}`} className="movie-list__item">
              <Link href={`/detail/${movie.id}`}>
                <figure>
                  <CustomImage
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
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
                  <p className="movie-list__desc">{movie.overview}</p>
                  <span className="movie-list__release">
                    {movie.release_date} / 평점 {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        {isLoading &&
          Array.from({ length: 20 }, (_, i) => i).map((v) => (
            <div key={v} className="movie-list__item">
              <a href="#" className="skeleton-list-item ui0"></a>
            </div>
          ))}
      </div>
      <div ref={sentinelRef} style={{ height: "1px" }}></div>
    </>
  );
}
