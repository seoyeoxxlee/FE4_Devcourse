export function getTitle(type: string, keyword: string) {
  switch(type) {
    case "now_playing":
      return "현재 상영중인 영화";
    case "popular":
      return "인기 있는 영화";
    case "upcoming":
      return "개봉 예정 영화";
    case "search":
      return `${keyword} 검색 결과`;
  }
}