import DetailInfo from "@/components/detail/DetailInfo";
import DetailInfoLoader from "@/components/detail/DetailInfoLoader";
import DetailRelated from "@/components/detail/DetailRelated";
import DetailTrailer from "@/components/detail/DetailTrailer";
import DetailTrailerLoading from "@/components/detail/DetailTrailerLoading";
import MovieLoader from "@/components/movie/MovieLoader";
import { Suspense } from "react";
// import MainMovie from "@/components/main/MainMovie";

export default async function page({
  params,
} : {
  params: Promise<{id: string}>
}) {
  const {id} = await params;
  return (
    <>
    <Suspense fallback={<DetailTrailerLoading />}>
      <DetailTrailer id={id} />
    </Suspense>
    <Suspense fallback={<DetailInfoLoader />}>
      <DetailInfo id={id} />
    </Suspense>
    <Suspense fallback={<MovieLoader subTitle="Related Movies" title={"관련 있는 영화"}/>}>
      <DetailRelated id={id} />
    </Suspense>
      {/* <MainMovie /> */}
    </>
  );
}
