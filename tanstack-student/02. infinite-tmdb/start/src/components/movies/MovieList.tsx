import MovieListItem from "./MovieListItem";
import MovieLoader from "./MovieLoader";

export default function MovieList() {
  return (
    <>
      <article className="bg-black px-4 pt-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Popular</h2>
          <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            <MovieLoader />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
          </div>
        </section>
      </article>
    </>
  );
}
