import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";
import { twJoin } from "tailwind-merge";

export default function App() {
  const areas = ["Seoul", "London", "Paris", "NewYork"];
  const images: { [key: string]: string } = {
    travel,
    seoul,
    london,
    paris,
    newyork,
  };
  // 도시 이름 저장하는 useState
  const [location, setLoaction] = useState("Seoul");

  return (
    <>
      <div className="absolute top-10 left-10 text-3xl cursor-pointer">
        <div className="light-icon fa-regular fa-sun"></div>
        <div className="light-icon fa-regular fa-moon"></div>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <img src={travel} alt={"로고"} width={80} />

          <ul className="flex items-center antialiased justify-around w-full">
            {/* areas 배열에 map()돌러서 각 도시를 리스트로 만듦 */}
            {areas.map((area) => (
              // twJoin -> Tailwind 클래스들을 깔끔하게 병합해주는 함수
              // 현재 선택된 도시와 같으면 font-bold 적용
              <li className={twJoin(location === area && "font-bold")}>
                <a href="#" onClick={() => setLoaction(area)}>
                  {area}
                </a>
              </li>
            ))}
          </ul>

          {/* 선택된 도시 이미지 표시 */}
          {/* 각 area에 대해 현재 선택된 도시(location)와 같을 때만 이미지를 렌더링 */}
          <div>
            {areas.map((area) => {
              return (
                location === area && (
                  <img src={images[area.toLocaleLowerCase()]} alt={area} />
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}