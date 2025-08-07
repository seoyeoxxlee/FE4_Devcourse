import ListMovieClient from "@/components/list/ListMovieClient";
import ListMovieLoader from "@/components/list/ListMovieLoader";
import { getMovieMoreData } from "@/libs/api/movie";
import { notFound } from "next/navigation";
import { getTitle } from "@/libs/helper/helper";
import { Suspense } from "react";

export async function generateMetadata({
  params,
  searchParams,
} : {
  params: Promise<{type: string}>;
  searchParams: Promise<{keyword: string}>;
}) {
  const {type} = await params;
  const {keyword} = await searchParams;
  return {
    title: getTitle(type, keyword)
  }
}

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ keyword: string }>;
}) {
  const { type } = await params;
  const { keyword } = await searchParams;

  if (
    type !== "popular" &&
    type !== "now_playing" &&
    type !== "upcoming" &&
    type !== "search"
  ) {
    notFound();
  }

  const { results, total_pages }: { results: Movie[]; total_pages: number } =
    await getMovieMoreData(1, type, keyword);
  

  return (
    <section className="movie list">
      <h4 className="movie-subtext">{getTitle(type, keyword)}</h4>
      <Suspense fallback={<ListMovieLoader />}>
        <ListMovieClient
          key={keyword}
          initialMovies={results}
          totalPage={total_pages}
          type={type}
          keyword={keyword}
        />
      </Suspense>
    </section>
  );
}
