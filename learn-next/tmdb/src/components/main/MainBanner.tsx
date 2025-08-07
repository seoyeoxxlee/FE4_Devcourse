import Link from "next/link";
import { getMovieData } from "@/libs/api/movie";

export default async function MainBanner() {
  const { results: movies }: { results: Movie[] } = await getMovieData(
    "upcoming"
  );

  const randomMovie = () => {
    const movieFilter = movies.filter(
      (movie) => movie.overview && movie.overview.trim() !== ""
    );
    const randomIndex = Math.floor(Math.random() * movieFilter.length);
    return movieFilter[randomIndex];
  };

  const random = randomMovie();
  console.log(random);
  return (
    <>
      <section className="release">
        <div
          className="release-item"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500/${random.poster_path}')`,
          }}
        >
          <div className="release__text">
            <strong className="release__category">NEW RELEASE</strong>
            <h2 className="release__title">{random.title}</h2>
            <p className="release__desc">{random.overview}</p>
            <Link href={`/detail/${random.id}`}>
              <button className="release__btn">자세히보기</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
