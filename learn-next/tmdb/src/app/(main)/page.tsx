import MainBanner from "@/components/main/MainBanner";
import MainBannerLoading from "@/components/main/MainBannerLoading";
import MainMovie from "@/components/main/MainMovie";
import MovieLoader from "@/components/movie/MovieLoader";
import { Suspense } from "react";

export default async function page() {
  return (
    <>
    <Suspense fallback={<MainBannerLoading />}>
      <MainBanner />
    </Suspense>

      <Suspense fallback={<MovieLoader subTitle="Now Movies" title="상영중인 영화" />}>
        <MainMovie 
          type="now_playing"
          subTitle="Now Movies"
          title="상영중인 영화"
        />
      </Suspense>

      <Suspense fallback={<MovieLoader subTitle="Popular Movies" title="인기있는 영화" />}>
        <MainMovie 
          type="popular"
          subTitle="Popular Movies"
          title="인기있는 영화"
        />
      </Suspense>

      <Suspense fallback={<MovieLoader subTitle="Upcoming Movies" title="개봉예정 영화" />}>
        <MainMovie 
          type="upcoming"
          subTitle="Upcoming Movies"
          title="개봉예정 영화"
        />
      </Suspense>
    </>
  );
}
