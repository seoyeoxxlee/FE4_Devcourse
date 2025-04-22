import a from "./assets/images/a.jpg";

export default function App () {
  return (
    <>
      <h1 className="Hambak">오잉</h1>

      {/* public 폴더에 있는 img는 "/..." 형태로 작성 */}
      <img src="/b.jpg" alt="samle img" />
      <div className="bg-b"></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url('/images/b.jpg)`,
        }}>
      </div>

      {/* Tailwind로 이미지 속성 적용 - public 폴더에 있는 이미지 */}
      <h2 className="text-3xl">Tailwind public</h2>
      <div className="w-full h-[200px] bg-[url('/images/b.jpg')]"></div>


      {/* src 폴더에 있는 img는 {} 형태로 작성 + import문 필요함 */}
      <img src={a} alt="a.jpg"/>
      <div className="bg-a"></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url(${a})`,
        }}>
      </div>

      {/* Tailwind로 이미지 속성 적용 - src 폴더에 있는 이미지 */}
      <h3>Tailwind src</h3>
      <div
        className={'w-full h-[200px]'}
        style={{
          background: `url(${a})`
        }}></div>
    </>
  );
}