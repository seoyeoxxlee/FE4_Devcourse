import Image from "next/image";
import Link from "next/link";
import "swiper/css";

export default function MainMovie() {
  return (
    <>
      <section className="movie">
        <h3 className="movie-category">Now Movies</h3>
        <h4 className="movie-subtext">
          상영중인 영화 <Link href="/movie/now_playing">더보기</Link>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <Link href="/detail/1" className="skeleton-list-item ui0">
              {" "}
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href="#">
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href="#">
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href="#">
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href="#">
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
