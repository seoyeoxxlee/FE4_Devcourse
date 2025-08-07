import { getMovieDetailData } from "@/libs/api/movie";
import MainMovie from "../main/MainMovie";

export default async function DetailRelated({ id }: { id: string }) {
  const detail: MovieDetail = await getMovieDetailData(id);
  const genre = detail.genres.map((v) => v.id).join(", ");
  //console.log(genre);
  
  return (
    <>
      <MainMovie
        type="discover/movie"
        subTitle="Related Movies"
        title="관련 있는 영화"
        genres={genre}
      />
    </>
  );
}
