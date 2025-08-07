export default function ListMovieLoader() {
  return (
    <>
      <div className="movie-list">
        {Array.from({ length: 20 }, (_, i) => i).map((v) => (
          <div key={v} className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
        ))}
      </div>
    </>
  );
}
