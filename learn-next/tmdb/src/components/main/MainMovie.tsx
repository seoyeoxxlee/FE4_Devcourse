import Link from "next/link";
import "swiper/css";
import MovieList from "../movie/MovieList";
import { getMovieData } from "@/libs/api/movie";

export default async function MainMovie({
  type,
  subTitle,
  title,
  genres,
}: {
  type: string;
  subTitle: string;
  title: string;
  genres?: string;
}) {
  const {results} = await getMovieData(type, genres);
  //console.log(results);

  if (!results || results.length === 0) return null;

  return (
    <>
      <section className="movie">
        <h3 className="movie-category">{subTitle}</h3>
        <h4 className="movie-subtext">
          {title}{" "}
          {type !== "discover/moive" && (
            <Link href={`/movie/${type}`}>더보기</Link>
          )} 
        </h4>
        <div className="movie-list">
          <MovieList movies={results}/>
        </div>
      </section>
    </>
  );
}
