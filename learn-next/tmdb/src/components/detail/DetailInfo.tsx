import { getMovieCreditData, getMovieDetailData } from "@/libs/api/movie";
import Image from "next/image";

export default async function DetailInfo({ id }: { id: string }) {
  const [detail, credits]: [MovieDetail, MovieCredits] = await Promise.all([
    getMovieDetailData(id),
    getMovieCreditData(id),
  ]);

  const genre = detail.genres.map((v) => v.name).join(", ");
  
  const casting = credits.cast
    .filter((v) => v.known_for_department === "Acting" && v.order <= 4)
    .map((v) => v.name)
    .join(" • ");

  const director = credits.crew
    .filter((v) => v.job === "Director")
    .map((v) => v.name)[0];

  const production = detail.production_companies.map((v) => v.name).join(" • ");
  return (
    <>
      <section className="detail">
        <div className="detail-wrap">
          <div className="detail-info">
            <h2 className="detail-title">{detail.title}</h2>
            <ul className="detail-features">
              <li className="features-item">
                <div
                  className={`progress-circle p${Math.floor(
                    detail.vote_average * 10
                  )} ${Math.floor(detail.vote_average * 10) > 50 && "over50"}`}
                >
                  <span>{Math.floor(detail.vote_average * 10)}%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
              </li>
              <li className="features-item">{genre}</li>
              <li className="features-item">1h 51m</li>
            </ul>
            <p className="detail-desc">{detail.overview}</p>
            <ul className="detail-maker">
              <li>
                <strong>Director</strong>:<span>{director}</span>
              </li>
              <li>
                <strong>Casting</strong>:<span>{casting}</span>
              </li>
              <li>
                <strong>Production</strong>:<span>{production}</span>
              </li>
            </ul>
          </div>
          <div className="detail-poster">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}.jpg`}
              alt=""
              width={500}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
