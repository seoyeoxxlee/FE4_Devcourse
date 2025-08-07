import { getMovieData, getMovieVideoData } from "@/libs/api/movie";
import Image from "next/image";

export default async function DetailTrailer({ id }: { id: string }) {
  const [{ results: trailer }, detail] = await Promise.all([
    getMovieVideoData(id),
    getMovieData(id),
  ]);

  const filterTrailer = trailer[0] || null;
  return (
    <>
      <section className="trailer">
        {filterTrailer && (
          <iframe
            src={`https://www.youtube.com/embed/${filterTrailer.key}?si=FDVIRTdUuTZr3DgM`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              border: 0,
              width: "90%",
              maxWidth: "900px",
              aspectRatio: "16 / 9",
            }}
          ></iframe>
        )}
        {!filterTrailer && (
          <Image
            src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
            alt="poster_path"
            width={900}
            height={0}
            style={{
              width: "90%",
              maxWidth: "900px",
              height: "auto",
              maxHeight: "500px",
            }}
          />
        )}
      </section>
    </>
  );
}
